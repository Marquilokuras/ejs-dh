const path = require('path');
const arrayPlatos = require('../database/platos')

const about = {
    title: "Sabores que Enamoran",
    description1: "Excelente Servicio",
    description2: "Buena Atencion",
    img: "principal.jpg"
}

const mainController = {
    renderHome: (req, res) => {
        res.render('index', { title: 'Platos', data: arrayPlatos, about })
    },

    renderDetalleMenu: (req, res) => {
        const platoSearch = arrayPlatos.find((plato) => plato.id === req.params.id)
        res.render('detalleMenu',{platoBuscado: platoSearch});
    },

}

module.exports = mainController;