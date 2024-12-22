import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  cod_id: {
    type: Number,
    required: true,
    unique: true,
    immutable: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  number_class: {
    type: String,
    required: false,
  },
  process: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    required: true,
  },
  register: {
    type: [String],
  },
});

const Property = mongoose.model("Property", PropertySchema);

export default Property;
