import mongoose from "mongoose";

// eslint-disable-next-line no-undef
mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;

// mongodb+srv://admin:admin123@cluster0.1iit9b3.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0
