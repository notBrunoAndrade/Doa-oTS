import express from "express";
import { router } from "./routes";
import mustacheExpress from "mustache-express";
import { error404 } from "./controllers/error404";
import path from "path";

const app = express();

// Configurar motor de templates Handlebars
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "../public")));

// Usar as rotas do router
app.use(router);

// Middleware para erro 404
app.use(error404);

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
