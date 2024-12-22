import propertyService from "../services/property.service.js";

export const validId = (req, res, next) => {
  const cod_id = req.params.cod_id;
  if (isNaN(cod_id)) {
    return res.status(400).send({ message: "Invalid id, try numbers valid" });
  }
  next();
};

export const validProperty = async (req, res, next) => {
  const cod_id = req.params.cod_id;

  const property = await propertyService.findByCodIdService(cod_id);

  if (!property) {
    return res.status(404).send({ message: "Property not found" });
  }

  req.cod_id = cod_id;
  req.property = property;

  next();
};

export default {
  validId,
  validProperty,
};
