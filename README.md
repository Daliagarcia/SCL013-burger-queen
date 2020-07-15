# Burger Queen

## Índice

* [1. ¿A quién va dirigido?](#1-¿Cómo-se-usa-esta-aplicación?)
* [2. ¿Cómo se usa esta aplicación?](#2-a-quien-va-dirigido)
* [3. ¿Cómo se planificó el proceso de la aplicación](#3-como-se-planificó)
* [4. ¿Cómo se pensó en el usuario?](#4-como-se-penso-en-el-usuario)
* [5. Diseño de la página](#5-diseño-de-la-pagina)

***

![portada-burger-queen](https://i.ibb.co/T4XfHvR/Portada-Burguer-Queen.png)

## 1. ¿A quién va dirigido?

Este proyecto fue solicitado por un restaurant de comida rápida. Y el principal cliente en este caso son los trabajadores del restaurante, principalmente el Mesero y Cocinero. 

<!-- [React](https://es.reactjs.org/) y [Angular](https://angular.io/)  -->

## 2. ¿Cómo se usa esta aplicación?

* [ ] [1] Para comenzar debe registrarse e inciar sesión un usuario (con un correo existente y una contraseña de más de 6 caracteres).
* [ ] [2] Luego de registrarse el usuario, el siguiente paso es seleccionar su rol correspondiente, en las opciones de botones que se muestran en el home del sitio.

### Mesero 

* [ ] [1] Si el usuario ingresa como mesero, dirigirá a la pantalla del menú del restaurant, en esta pantalla el mesero debe seleccionar los productos deseados, estos se estarán listando y sumando en un contenedor de pedido. 
* [ ] [2] Una vez seleccionados los productos el pedido debe ser enviado a cocina (vista del cocinero) y el contenedor de pedido se limpiará.

### Cocinero
* [ ] [1] Si el usuario ingresa como cocinero, se le enviará directamente a la vista de los pedidos ya enviados por el mesero, mismos qe deberían estar siendo preparados por el cocinero.
* [ ] [2] Una vez preparado el pedido, la única función del cocinero en su vista es cambiar el estado del pedido a "Listo para servir", presionando un botón, hecho esto el pedido cambia su estado a listo y es eliminado de la pantalla del cocinero.

Para el orden que debía tener la aplicación realizamos un diagrama de flujo: 

[_Diagrama de flujo_](https://app.lucidchart.com/documents/view/3f0e3a9b-1ae0-4bf0-9db3-ce2bd25bda7e/0_0)

## 3. ¿Cómo se planificó el proceso la aplicación?

La planificación del proceso del sitio fue a traves de trello, planificando nuestros tiempos y priorizando tareas.

[_Tablero Trello_](https://trello.com/b/HAYtsB73/burger-queen)

## 4. ¿Cómo se pensó en el usuario?

Siempre se pensó en ambos usuarios, y en su trabajo, al ser estos muy intensos y rápidos, decidimos que nuestra aplicación debía ser muy intuitiva y fácil de usar. Para esto hicimos prototipos en InVision y Figma:

[_Prototipo de baja fidelidad_](https://burguerqueen.invisionapp.com/freehand/Burguer-Queen--cAUeRVwlw)

[_Prototipo de alta fidelidad_](https://www.figma.com/proto/9WMSEpZ6N6bklJSZBTiSA8/Burger-Queen?node-id=8%3A2&scaling=min-zoom)

## 5. Diseño de la página

### Fondo

El fondo fue definido en base a los elementos que contiene toda la aplicación, al ser estos con tamaños y colores bien llamativos, con el fondo queriamos nivelar el diseño del sitio, es por esto que tiene colores neutros, y repeticiones de nuestro logo, en forma de marca de agua.

![fondo](https://i.ibb.co/RCmG8hm/Fondito-3.jpg)

### Estructura

Para la estructura y la posición de los elementos, nos enfocamos en el propósito ya mencionado de nuestro sitio, que debía ser intuitivo y fácil de usar. Es por esto que decidimos hacer contenedores amplios para cada elemento, y que todos estuvieran en una misma vista, así el trabajador no tendría que hacer tanto trabajo ni iteración en la aplicación.

### Colores

En base a los colores del sitio, fueron escogidos pensando en llamar la atención de cliente, basandose en los colores principales que son usados en la mayoria de los restaurantes de comida rapida, y además al ser tonos fuertes, creímos que estos colores serían más fácil para el uso del sitio, pensando en el mesero y cocinero, es decir, son colores fáciles de diferenciar, de ver a distancia e intuitivos, sobretodo si se está en constante movimiento, que es en el caso de ambos clientes. 

![colores](https://i.ibb.co/nQZyhkX/Portada-Burguer-Queen-1.png)


