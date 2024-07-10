var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

// 04/07/2024, Caminho para realizar a função buscarPreferencia
router.get("/preferencia", function (req, res) {
    medidaController.buscarPreferencia(req, res);
});


// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;