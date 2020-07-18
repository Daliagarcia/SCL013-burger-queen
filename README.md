# Burger Queen

## Índice

* [1. ¿A quién va dirigido?](#1-¿A-quién-va-dirigido?)
* [2. ¿Cómo se usa esta aplicación?](#2-¿Cómo-se-usa-esta-aplicación?)
* [3. Historias de usuario](#3-Historias-de-usuario)
* [4. ¿Cómo se planificó el proceso de la aplicación](#4-¿Cómo-se-planificó-el-proceso-de-la-aplicación)
* [5. ¿Cómo se pensó en el usuario?](#5-¿Cómo-se-pensó-en-el-usuario?)
* [6. Diseño de la página](#5-Diseño-de-la-pagina)

***

![portada-burger-queen](https://i.ibb.co/T4XfHvR/Portada-Burguer-Queen.png)


***

## 1. ¿A quién va dirigido?

Este proyecto fue solicitado por un restaurant de comida rápida. Y el principal cliente en este caso son los trabajadores del restaurante, principalmente el Mesero y Cocinero. 

***

## 2. ¿Cómo se usa esta aplicación?

* [ ] [1] Para comenzar debe registrarse e inciar sesión un usuario (con un correo existente y una contraseña de más de 6 caracteres).
* [ ] [2] Luego de registrarse el usuario, el siguiente paso es seleccionar su rol correspondiente, en las opciones de botones que se muestran en el home del sitio.

### Mesero 

* [ ] [1] Si el usuario ingresa como mesero, dirigirá a la pantalla del menú del restaurant, en esta pantalla el mesero debe seleccionar los productos deseados, estos se estarán listando y sumando en un contenedor de pedido. 
* [ ] [2] Una vez seleccionados los productos el pedido debe ser enviado a cocina (vista del cocinero) y el contenedor de pedido se limpiará.

### Cocinero
* [ ] [1] Si el usuario ingresa como cocinero, se le enviará directamente a la vista de los pedidos ya enviados por el mesero, mismos que deberían estar siendo preparados por el cocinero.
* [ ] [2] Una vez preparado el pedido, la única función del cocinero en su vista es cambiar el estado del pedido a "Listo para servir", presionando un botón, hecho esto el pedido cambia su estado a listo y es eliminado de la pantalla del cocinero.

Para el orden que debía tener la aplicación realizamos un diagrama de flujo: 

[_Diagrama de flujo_](https://app.lucidchart.com/documents/view/3f0e3a9b-1ae0-4bf0-9db3-ce2bd25bda7e/0_0)

***

## 3. Historias de usuario

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

## 4. ¿Cómo se planificó el proceso la aplicación?

La planificación del proceso del sitio fue a traves de trello, planificando nuestros tiempos y priorizando tareas.

[_Tablero Trello_](https://trello.com/b/HAYtsB73/burger-queen)

***

## 5. ¿Cómo se pensó en el usuario?

Siempre se pensó en ambos usuarios, y en su trabajo, al ser estos muy intensos y rápidos, decidimos que nuestra aplicación debía ser muy intuitiva y fácil de usar. Para esto hicimos prototipos en InVision y Figma:

##### Protipo de baja fidelidad

[_LINK PROTOTIPO_](https://burguerqueen.invisionapp.com/freehand/Burguer-Queen--cAUeRVwlw)

![Prototipo de baja fidelidad](https://i.ibb.co/m82TFSN/invision.png)

##### Protipo de alta fidelidad

[_LINK PROTOTIPO_](https://www.figma.com/proto/9WMSEpZ6N6bklJSZBTiSA8/Burger-Queen?node-id=8%3A2&scaling=min-zoom)

![Prototipo de alta fidelidad](https://i.ibb.co/PQfZS3q/figma.png)

***

## 6. Diseño de la página

### Fondo

El fondo fue definido en base a los elementos que contiene toda la aplicación, al ser estos con tamaños y colores bien llamativos, con el fondo queriamos nivelar el diseño del sitio, es por esto que tiene colores neutros, y repeticiones de nuestro logo, en forma de marca de agua.

![fondo](https://i.ibb.co/RCmG8hm/Fondito-3.jpg)

### Estructura

Para la estructura y la posición de los elementos, nos enfocamos en el propósito ya mencionado de nuestro sitio, que debía ser intuitivo y fácil de usar. Es por esto que decidimos hacer contenedores amplios para cada elemento, y que todos estuvieran en una misma vista, así el trabajador no tendría que hacer tanto trabajo ni iteración en la aplicación.

### Colores

En base a los colores del sitio, fueron escogidos pensando en llamar la atención de cliente, basandose en los colores principales que son usados en la mayoria de los restaurantes de comida rapida, y además al ser tonos fuertes, creímos que estos colores serían más fácil para el uso del sitio, pensando en el mesero y cocinero, es decir, son colores fáciles de diferenciar, de ver a distancia e intuitivos, sobretodo si se está en constante movimiento, que es en el caso de ambos clientes. 

![colores](https://i.ibb.co/nQZyhkX/Portada-Burguer-Queen-1.png)

***
