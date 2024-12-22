import mongoose from "mongoose";

const connectcDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongodb"))
    .catch((e) => console.log(e));
};

export default connectcDatabase;
