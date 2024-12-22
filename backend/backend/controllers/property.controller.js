import propertyService from "../services/property.service.js";
import excelJs from "exceljs";

const register = async (req, res) => {
  const existingProperty = await propertyService.findByCodIdService(
    req.body.cod_id
  );

  if (existingProperty) {
    return res
      .status(400)
      .json({ message: "Property with this ID already exists" });
  }

  const timestamp = Date.now();
  const data = new Date(timestamp);
  const dataFormatada = data.toISOString();

  const {
    cod_id,
    name,
    price,
    location,
    number_class,
    process,
    status,
    description,
    model,
    brand,
    date,
  } = req.body;

  if (
    !cod_id ||
    !name ||
    !price ||
    !location ||
    !number_class ||
    !process ||
    !status ||
    !description ||
    !brand ||
    !model ||
    !date
  ) {
    res.status(400).json("Submit all fields for registration");
  } else {
    try {
      const newItem = dataFormatada.toString();

      const property = await propertyService.create(req.body);

      if (!property) {
        return res.status(400).send({ message: "Error creating property" });
      }

      property.register.push(newItem);

      await property.save();

      res.status(201).send({
        user: {
          cod_id,
          name,
          price,
          location,
          number_class,
          process,
          status,
          description,
          model,
          brand,
          date,
          register: property.register,
        },
        message: "Property created successfully",
      });
    } catch (error) {
      console.error("Error creating property:", error);
      res.status(500).send({ message: "Error creating property" });
    }
  }
};

const findAllProperties = async (req, res) => {
  let { limit, offset } = req.query;

  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 10;
  }
  if (!offset) {
    offset = 0;
  }

  const properties = await propertyService.findAllService(offset, limit);
  const total = await propertyService.countPropertiesService();
  const currentUrl = req.baseUrl;
  console.log(currentUrl);
  const next = offset + limit;
  const nextUrl =
    next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  if (properties.length === 0) {
    return res
      .status(400)
      .send({ message: "There are no registered properties" });
  }
  res.send({ nextUrl, previousUrl, limit, offset, total, properties });
};

const findByIdProperties = async (req, res) => {
  try {
    const cod_id = req.cod_id;
    const property = await propertyService.findByCodIdService(cod_id);
    res.send(property);
  } catch (error) {
    console.error("Error finding property:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const update = async (req, res) => {
  const timestamp = Date.now();
  const data = new Date(timestamp);
  const dataFormatada = data.toISOString();
  const {
    name,
    price,
    location,
    number_class,
    process,
    status,
    description,
    model,
    brand,
    date,
    register,
  } = req.body;
  if (
    !name &&
    !price &&
    !location &&
    !number_class &&
    !process &&
    !status &&
    !description &&
    !brand &&
    !model &&
    !date
  ) {
    res.status(400).send({ message: "Submit at least one field for update" });
  }
  const { cod_id } = req;
  try {
    const property = await propertyService.findByCodIdService(cod_id);
    property.register.push(dataFormatada);
    await property.save();
    await propertyService.updateService(
      cod_id,
      name,
      price,
      location,
      number_class,
      process,
      status,
      description,
      model,
      brand,
      date
    );
    res.send({ message: "Property sucessfully update!" });
  } catch (e) {
    console.error("Error updating property:", e);
    res.status(500).send({ message: "Error updating property" });
  }
};

const amountProperties = async (req, res) => {
  const countProperties = await propertyService.countPropertiesService();
  const amountPrice = await propertyService.amountPriceService();
  const total = amountPrice;
  const priceTotal = total.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);
  console.log(priceTotal);
  return res.status(200).json({
    countProperties: countProperties,
    price: priceTotal,
    message: "sucess",
  });
};

const groupInactive = async (req, res) => {
  const countInactive = await propertyService.amountInactiveService();
  const amountInactive = [];
  countInactive.map((obj) => {
    amountInactive.push(obj.price);
  });
  const amountInactivePrice = amountInactive.reduce(
    (acc, curr) => acc + curr,
    0
  );
  return res.status(200).json({
    amountInactive: amountInactivePrice,
    countInactive: countInactive,
    message: "sucess",
  });
};

const groupModified = async (req, res) => {
  const groupModifiedItems = await propertyService.groupModifiedItemsService();
  let groupModified = [];

  groupModifiedItems.map((e) => {
    e.total != null && groupModified.push(e);
  });
  return res
    .status(200)
    .json({ groupModifiedItems: groupModified, message: "sucesss" });
};

const Backup = async (req, res) => {
  try{
  const object = await propertyService.BackupService();
  const workbook = new excelJs.Workbook();

  const sheet = workbook.addWorksheet("Dados Patrimonias");

  sheet.columns = [
    {header: "Cod Id", key: "cod_id", width: 25},
    {header: "Processo", key: "process", width: 35},
    {header: "Valor", key: "price", width: 35},
    {header: "Data", key: "date", width: 10},
    {header: "Localização", key: "location", width: 35},
    {header: "Numero da sala", key: "number_class", width: 35},
    {header: "Nome", key: "name", width: 35},
    {header: "Marca", key: "brand", width: 35},
    {header: "Modelo", key: "model", width: 35},
    {header: "Descrição", key: "description", width: 35},
  ]
  object.map((value, idx)=> {
    sheet.addRow({cod_id: value.cod_id, process: value.process, price: value.price, date: value.date, location: value.location, number_class: value.number_class, name: value.name, brand: value.brand, model: value.model, description: value.description});
  });

  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", "attachment;filename=backup.xlsx");

  await workbook.xlsx.write(res);
  }catch (err){
    console.log(err);
  }
}

export default {
  register,
  findAllProperties,
  findByIdProperties,
  update,
  amountProperties,
  groupInactive,
  groupModified,
  Backup,
};
