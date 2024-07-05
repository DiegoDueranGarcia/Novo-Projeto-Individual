var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
        alert("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
        alert("Sua senha está undefined!");
    }
    else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            nome: resultadoAutenticar[0].nome,
                            fkMarca: resultadoAutenticar[0].fkMarca,


                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                        alert("Email e/ou senha inválido(s)")
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var marca = req.body.marcaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
        alert("Insira seu nome corretamente")
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!")
        alert("Preecha o nome corretamente")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
        alert("Insira sua senha corretamente")
    }
    else if (marca == undefined) {
        res.status(400).send("Sua marca está undefined!");
        alert("Escolha sua marca !")
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, marca)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function bancoquestionario(req,res) {
// Variavel para pegar os valores do arquivo cards.html
var Primeira = req.body.primeirovalorServer;
var Segunda = req.body.segundovalorServer;
var Terceira = req.body.terceirovalorServer;
var Quarta = req.body.quartovalorServer;
var idUsuario = req.body.idUsuarioServer;

// Validações com esses valores

if(Primeira==undefined){
    res.status(400).send("A primeira pergunta não foi definida")
}
else if (Segunda==undefined){
    res.status(400).send("A segunda pergunta não foi definida")
}
else if (Terceira==undefined){
    res.status(400).send("A terceira pergunta não foi definida")
}
else if (Quarta==undefined){
    res.status(400).send("A quarta pergunta não foi definida")
}

else{
    usuarioModel.bancoquestionario(Primeira,Segunda,Terceira,Quarta,idUsuario)
    .then(
        function(resultado){
            res.json(resultado)
        }).catch(
            function (erro){
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}



module.exports = {
    autenticar,
    cadastrar,
    bancoquestionario
}