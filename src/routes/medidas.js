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

// 11/07/2024, Caminho para realizar a função buscarExperiencia
router.get("/experiencia", function (req, res) {
    medidaController.buscarExperiencia(req, res);
});
// 02/08/2024, Caminho para realizar a função buscarImportancia
router.get("/importancia", function (req, res) {
    medidaController.buscarImportancia(req, res);
});
// 02/08/2024, Caminho para realizar a função buscarTrilha
router.get("/trilha", function (req, res) {
    medidaController.buscarTrilha(req, res);
});


module.exports = router;