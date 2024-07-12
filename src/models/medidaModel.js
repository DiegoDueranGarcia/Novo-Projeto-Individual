var database = require("../database/config");

function buscarPreferencia() {
    // 10/07/2024
    // Select mostrando o total de pontos de cada marca.

    var instrucaoSql = `
SELECT Marca.nomeMarca AS Marca, COUNT(*) AS qtd
FROM Usuario
JOIN Marca ON Usuario.fkMarca = Marca.idMarca
GROUP BY Marca.nomeMarca
ORDER BY qtd ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarExperiencia() {
    // 10/07/2024
    // Select mostrando o total as experiencias escolhidas.

    var instrucaoSql = `
SELECT experiencia, COUNT(*) AS quantidade
FROM Questionário
GROUP BY experiencia;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// function buscarMedidasEmTempoReal(req, res) {

//     var idDados = req.params.idDados;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idDados).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    buscarPreferencia,
    buscarExperiencia
    // buscarMedidasEmTempoReal

}