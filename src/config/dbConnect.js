import mongoose from "mongoose";

// eslint-disable-next-line no-undef
mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;

