import mongoose from "mongoose";
import config from "config";

export async function connectToMongo() {
  try {
    console.log(`dburi: ${config.get("dbUri")}`)
    await mongoose.connect(config.get("dbUri"));
    console.log("Connected to Database");
  } catch (error) {
    console.error('Falha ao conectar no mongo',error);
    process.exit(1);
  }
}