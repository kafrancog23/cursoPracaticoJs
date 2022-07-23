//Filter
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "auto", costo: 2500},
    {nombre: "siri", costo: 320},
    {nombre: "moto", costo: 10000},
    {nombre: "teclado", costo: 30000},
    {nombre: "audifonos", costo: 500},
    {nombre: "tele", costo: 1700}
];
var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <= 500
});
//Map
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "auto", costo: 2500},
    {nombre: "siri", costo: 320},
    {nombre: "moto", costo: 10000},
    {nombre: "teclado", costo: 30000},
    {nombre: "audifonos", costo: 500},
    {nombre: "tele", costo: 1700}
];
var nombreArticuloss = articulos.map(function(articulos){
    return articulos.nombre
});

//find
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "auto", costo: 2500},
    {nombre: "siri", costo: 320},
    {nombre: "moto", costo: 10000},
    {nombre: "teclado", costo: 30000},
    {nombre: "audifonos", costo: 500},
    {nombre: "tele", costo: 1700}
];
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "bici"
});

//For Each
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "auto", costo: 2500},
    {nombre: "siri", costo: 320},
    {nombre: "moto", costo: 10000},
    {nombre: "teclado", costo: 30000},
    {nombre: "audifonos", costo: 500},
    {nombre: "tele", costo: 1700}
];
articulos.forEach(function(articulos){
    console.log(articulos.nombre);
});

//Some
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "auto", costo: 2500},
    {nombre: "siri", costo: 320},
    {nombre: "moto", costo: 10000},
    {nombre: "teclado", costo: 30000},
    {nombre: "audifonos", costo: 500},
    {nombre: "tele", costo: 1700}
];
var baratosArticulo = articulos.some(function(articulos){
    return articulos.costo <= 2500
});