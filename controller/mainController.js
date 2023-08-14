const path = require('path');
const arrayPlatos = require('../database/platos')

const mainController = {
    renderHome: (req, res) => {
        res.render('index', { title: 'Platos', data: arrayPlatos })
    },

    renderDetalleMenu: (req, res) => {
        const platoSearch = arrayPlatos.find((plato) => plato.id === req.params.id)
        res.render('detalleMenu',{plato: platoSearch});
    },

    /* renderAbout: (req,res) =>{
       res.render('about',{ title: 'About',data: arrayPlatos})
    },  */




}

module.exports = mainController;