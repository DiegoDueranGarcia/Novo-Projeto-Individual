var database = require("../database/config");

function buscarPreferencia() {

    // Select mostrando o total de pontos de cada marca.

    var instrucaoSql = `
    select 'Honda' as Marca,count(*) as qtd from usuario where fkMarca=1
union all
select 'BMW' as Marca,count(*) as qtd from usuario where fkMarca=2
union all
select 'KTM' as Marca,count(*) as qtd from usuario where fkMarca=3
union all
select 'Yamaha' as Marca,count(*) as qtd from usuario where fkMarca=4
union all
select 'Kawasaki' as Marca,count(*) as qtd from usuario where fkMarca=5
union all
select 'Suzuki' as Marca,count(*) as qtd from usuario where fkMarca=6;`;

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
    buscarPreferencia
    // buscarMedidasEmTempoReal

}