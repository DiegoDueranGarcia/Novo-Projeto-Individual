var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha,fkMarca) {

// Foi adicionado a fkMarca que esta sendo utilizada na tabela usuario
// que sera responsável por identificar marca que o usuario mais gosta 

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha,fkMarca) VALUES ('${nome}', '${email}', '${senha}',${fkMarca});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function bancoquestionario(Primeira,Segunda,Terceira,Quarta){
      // Alteração feita no dia 04/07/2024
    var instrucaoSql = `
    INSERT INTO Questionário (experiencia,tipo_de_trilha,grau_de_importancia,equipamento_mais_importante) VALUES ('${Primeira}', '${Segunda}', '${Terceira}','${Quarta}');
`;  
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);


}


module.exports = {
    autenticar,
    cadastrar,
    bancoquestionario
};