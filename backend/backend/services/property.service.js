import Property from "../models/property.js";

const create = (body) => Property.create(body);

const findAllService = (offset, limit) =>
  Property.find().sort({ cod_id: 1 }).skip(offset).limit(limit);


const findByCodIdService = (cod_id) => Property.findOne({ cod_id: cod_id });

const updateService = (
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
  register
) =>
  Property.findOneAndUpdate(
    { cod_id: cod_id },
    {
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
    }
  );

const countPropertiesService = () => Property.countDocuments();

const amountPriceService = () =>
  Property.aggregate([
    { $group: { _id: "$cod_id", total: { $sum: "$price" } } },
  ]);

const amountInactiveService = () => Property.find({ status: "inativo" });

const groupModifiedItemsService = () =>
  Property.aggregate([
    {
      $group: {
        _id: "$cod_id",
        total: {
          $push: {
            $cond: {
              if: {
                $and: [
                  { $isArray: "$register" },
                  { $gt: [{ $size: "$register" }, 1] },
                ],
              },
              then: {
                name: "$name",
                array: "$register",
              },
              else: null,
            },
          },
        },
      },
    },
    {
      $project: {
        _id: 1,
        total: {
          $filter: {
            input: "$total",
            as: "item",
            cond: { $ne: ["$item", null] },
          },
        },
      },
    },
    {
      $unwind: "$total",
    },
    {
      $sort: { "total.array": -1 },
    },
  ]);
  
  const BackupService = () => Property.find().sort({cod_id: 1});

export default {
  create,
  findAllService,
  findByCodIdService,
  updateService,
  countPropertiesService,
  amountPriceService,
  amountInactiveService,
  groupModifiedItemsService,
  BackupService,
};
