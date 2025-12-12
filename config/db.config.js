import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);

    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error al conectar MongoDB:", error);
    process.exit(1);
  }
};
