// DOM Document Object Model - Modelo de objetos del documento

/*
DOM es la representacion de nuestro HTML hecha por el navegador y accesible por JS
cada ELEMENTO del DOM es un NODO
un NODO se representa como un OBJETO
y los OBJETOS a su vez tienen METODOS y PROPIEDADES 
console.dir(document)
console.dir(head)
console.dir(body)


Tenemos 12 tipos de NODOS

Estos son los mas utilizados:

Document : Nodo raiz, Nodo principal 

Element : representa cada unas de las etiquetas HTML, de un Element podemos tener otros NODOS
HIJOS.

Attr  :  representan en el arbol de nodos los atributos de mi HTML ej: <section class = "pepe">
esta clase se veria como un NODO de ATRIBUTO.

Text  : son los atributos de contenido textual literalmente.

Comment  : los Nodos se comment son los comentarios incluidos en HTML, representa todo lo q 
esta comentado.

¿q ganamos al acceder al objeto Document? : ganamos ver los NODOS, tener acceso a todo nuestro
HTML. Podemos acceder desde JS a todos los elementos HTML de mi sitio, y puedo cambiar todos
los nodos que tenemos.

metodos de Document para acceder a los nodos:
getElementById() - getElementsByClassName() - getElementsByTagName()
con esto voy a poder acceder a partes de mi DOM

El metodo getElementById() sirve para accedera un elemento de la estructura HTML
utilizando  su atributo ID como IDENTIFICACION.


template strings (plantillas de texto) : es una forma distinta de escribir nuestro texto,
escribimos todo dentro de comillas invertidas `` y diferenciamos dentro de este bloque
${} lo que es una variable HTML de lo q es texto real.

*/
