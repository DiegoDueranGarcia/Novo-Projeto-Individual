 var medidaModel = require("../models/medidaModel");


function buscarPreferencia(req, res) {

//Essa função verifica se existe algum dado na API.
    
    console.log(`Recuperando as ultimas medidas`);

    medidaModel.buscarPreferencia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarExperiencia(req, res) {
    // 04/07/2024
    //Essa função verifica se existe algum dado na API.
        
        console.log(`Recuperando as ultimas medidas`);
    
        medidaModel.buscarExperiencia().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    function buscarImportancia(req, res) {
        // 02/08/2024
        //Essa função verifica se existe algum dado na API.
            
            console.log(`Recuperando as ultimas medidas`);
        
            medidaModel.buscarImportancia().then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!")
                }
            }).catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
        }
        function buscarTrilha(req, res) {
            // 02/08/2024
            //Essa função verifica se existe algum dado na API.
                
                console.log(`Recuperando as ultimas medidas`);
            
                medidaModel.buscarTrilha().then(function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                });
            }
    

module.exports = {
    buscarPreferencia,
    buscarImportancia,
    buscarTrilha,
    buscarExperiencia


}