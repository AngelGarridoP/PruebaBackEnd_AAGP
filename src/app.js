import  express  from "express";
import morgan from "morgan";

//Routes 
import userRoutes from "./routes/userData.routes"

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

//CallRoutes
app.use(userRoutes);

export default app;