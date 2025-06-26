import mongoose from "mongoose"

function manipuladorDeErros() {
// eslint-disable-next-line no-unused-vars
(erro, req, res, next)=>{
  if(erro instanceof mongoose.Error.CastError) {
          res.status(400).send({message:"Um ou mais dados fornecidos incorretos."})
        }else{

          res.status(500).send ({message: "Erro interno do servidor."})
        }
}
}

export default manipuladorDeErros