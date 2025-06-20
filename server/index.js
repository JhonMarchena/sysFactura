import { PORT } from "./config/port.js";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import facturaRoutes from "./routes/facturas.routes.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(facturaRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server has listening on port ${PORT}`);
});
