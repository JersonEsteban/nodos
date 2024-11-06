console.log("Don de la consola")

//captura del encabezado
var head = document.getElementById('head');
console.log(head);

var encabezado = document.getElementsByClassName('encabezado');
console.log(encabezado);

var superior = document.getElementsByTagName('header');
console.log(superior);


//captura del cuerpo del documento

var container = document.querySelector('#container');
console.log(container);

var cuerpo =  document.querySelector('.cuerpo');
console.log(cuerpo);

var medio = document.querySelector('main');
console.log(medio);

//captura del footer

var pieDePagina = document.querySelector('#pieDePagina');
console.log(pieDePagina);

//captura del h1

var hini = document.querySelector('h1'); //por etiqueta
console.log(hini)

//captura h3
var htres = document.querySelector('h3'); //por etiqueta
console.log(htres);

//captura parrafo

var parrafo = document.querySelectorAll('.parrafo');
console.log(parrafo);

//crear elementos html desde js

var h2 = document.createElement('h2');
console.log(h2);

//crear documento 
var textnote2 = document.createTextNode('Hola h2 desde JS');
console.log(textnote2);

//agragar el nodo h2 al nodo dentro del header
//seleccionar la referncia en este caso el nodo header

var header = document.querySelector('.encabezado');
console.log(header);

//agreagar nodo al dom 
header.appendChild(h2);

h2.appendChild(textnote2);


//crear un h4 desde js

var h4 = document.createElement('h4');
console.log(h4);

var text3 = document.createTextNode('Hola h4 desde js');
console.log(text3);

var h = document.querySelector('.encabezado');
console.log(h);

h.appendChild(h4);
h4.appendChild(text3);


//crear h5 dede js en el main

var h5 = document.createElement('h5');
console.log(h5);

var text4 = document.createTextNode('PRODUCTOS');
console.log(text4);

var m = document.querySelector('.cuerpo');
console.log(m);
m.appendChild(h5);
h5.appendChild(text4);

//crear section
var section = document.createElement('section');
console.log(section);
m.appendChild(section);

//crear article

var article = document.createElement('article');
console.log(article);

var s = document.querySelector('section');
console.log(s);
s.appendChild(article);



//crear article 2

var article2 = document.createElement('article');
console.log(article2);

var s = document.querySelector('section');
console.log(s);
s.appendChild(article2);

//crear parrafo en article 1

var p = document.createElement('p');
console.log(p);
var parrafo1 = document.createTextNode('Parafo del article 1');
console.log(parrafo1);

article.appendChild(p);
p.appendChild(parrafo1);

//crear parrafo article 2

var p2 = document.createElement('p');
console.log(p2);
var parrafo2 = document.createTextNode('Parafo del article 2');
console.log(parrafo2);

article2.appendChild(p2);
p2.appendChild(parrafo2);


//agregar imagen al article 1
var img = document.createElement('img');
img.src = 'images/descarga.jpg';
article.appendChild(img);


//agregar imagen al article 2
var img2 = document.createElement('img');
img2.src = 'images/sqljoins.jpg';
article2.appendChild(img2);

//poner estilos 

article.style.color = 'blue';
section.style.display = 'flex';

article2.style.height = '20vh';
article2.style.width = '10wh';
article.style.height = '20vh';
article.style.width = '10wh';


img.style.height = '100%';
img.style.with = '100%';
img2.style.height = '100%';
img2.style.with = '100%';
section.style.width = '100%';
section.style.height = '100%';

section.style.backgroundColor = 'rgb(200, 200, 200';

article.style.padding = '80px';
article2.style.padding = '80px';

h5.style.background = 'green';
h5.style.textAlign = 'center';
h5.style.color = 'yellow'
p2.style.background = 'green';
p2.style.textAlign = 'center';

p.style.background = 'green';
p.style.textAlign = 'center';
img.style.justifyContent = 'center';
img.style.alignItems = 'center';
section.style.justifyContent = 'center';
section.style.alignItems = 'center';
header.style.backgroundColor = 'rgb(200, 200, 200';
header.style.border = '1px solid black';
header.style.textAling = 'center';
header.style.alignItems = 'center';
header.style.justifyContent = 'center';
header.style.color = 'rgb(100, 100, 100';
//hini.style.border = '1px solid black';
hini.style.textAlign = 'center';

header.style.display = 'flex';
header.style.justifyContent = 'space-around';


var b = document.querySelector('body');
console.log(b);

b.style.backgroundColor = 'rgb(150, 150, 150';
