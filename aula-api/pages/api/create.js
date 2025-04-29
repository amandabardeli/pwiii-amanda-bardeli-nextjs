// pages/api/read.js
import { createConnection } from "mysql2/promise";

// Função para conectar no MySql 
async function connectToDatabase() {
    return createConnection({
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'testeApi', 
    });
}

export default async function handler(req, res) {
    if(req.method != 'POST'){
        return res.status(405).json({ error: 'Metodo não permitido'});
    }

    const userdata = req.body;
    console.log(userdata)

    const { nome, email } =  userdata;

    if ( !nome || !email ) {
        return res.status(400).json({ error: 'nome e email são obrigatórios no request body. '});
    }

    try {
        // Conexão no MySql 
        const connection = await connectToDatabase();

        // Execução da query para transacionar dados da tabela "Users"
        const [result] = await connection.execute('INSERT INTO users (nome, email) VALUES ( ?, ?)', [
            nome,
            email,
        ]);

        // Fechar conexão 
        await connection.end();

        // Resposta com os dados do usuário
        res.status(200).json({ id:result.unsertId, message: 'Usuário criado com sucesso!'});
    } catch (error) {
        console.error('Erro de conexão com o banco: ', error);
        res.status(500).json({ error: 'Erro interno de Servidor'});
    }
}