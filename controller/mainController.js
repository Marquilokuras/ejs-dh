const path = require('path');
const arrayPlatos = require('../database/platos')

const mainController = {
    renderHome: (req, res) => {
        res.render('index', { title: 'Platos', data: arrayPlatos })
    },

    renderDetalleMenu: (req, res) => {

        res.render('detalleMenu', { title: 'Detalle del Menu', data: arrayPlatos })
    },

    /* renderAbout: (req,res) =>{
       res.render('about',{ title: 'About',data: arrayPlatos})
    },  */




}

module.exports = mainController;