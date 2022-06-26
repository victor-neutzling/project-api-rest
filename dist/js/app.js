import express from "express";
import db from "./config/dbconnect.js";
import routes from "./routes/index.js";
db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});
const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
app.use(express.json());
routes(app);
export default app;
//# sourceMappingURL=app.js.map