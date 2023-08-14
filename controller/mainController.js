const path = require('path');

const arrayPlatos = [

    {
        id:"1",
        nombre: "Carpaccio fresco",
        descripcion: "Entrada Carpaccio de salmón con cítricos",
        precio: 65.50,
        imagen: "/imagenes/Carpaccio-de-salmon.jpg"
    },
    {
        id:"2",
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: 47.00,
        imagen: "/imagenes/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id:"3",
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: 27.50,
        imagen: "/imagenes/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id:"4",
        nombre: "Espárragos blancos",
        descripcion: " Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: 37.50,
        imagen: "/imagenes/esparragos.png"
    },
]

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