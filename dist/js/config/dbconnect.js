import mongoose from "mongoose";
mongoose.connect("mongodb+srv://victor:123@project-api-rest.kjek2sq.mongodb.net/project-api-rest");
let db = mongoose.connection;
export default db;
//# sourceMappingURL=dbconnect.js.map