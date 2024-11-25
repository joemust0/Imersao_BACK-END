import { MongoClient } from "mongodb";

    export default async function conectarAoBanco(stringConexao) {
        let mongoClient;

        try {
            mongoClient = new MongoClient(stringConexao);
            console.log('conectando ao cluster do banco de dados ...');
            await mongoClient.connect();
            console.log('conectado ao MongoDB Atlas com sucesso!');

            return mongoClient;
            } catch (erro) {
                console.error('Falha na conexão com o banco!', erro);
                process.exit();
            }

 } 