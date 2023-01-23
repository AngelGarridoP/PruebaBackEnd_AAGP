import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    database: process.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};