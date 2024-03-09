# Entrega 3.2: Patterns 2
## Middleware (Nivel 1)
Ficheros (en carpeta **1_middleware**):
- **app.js**, contiene la clase calculadora, es el fichero principal del programa.
- **middlewarecontainer.js**, contiene la clase MiddlewareContainer que implementa el patron Middleware.
- **params.json**, contiene los parametros (2 números), con los que se hacen los cálculos.

Para ejecutar el programa:
```
npm run middleware
```
## Decorator (Nivel 2)
Ficheros (en carpeta **2_decorator**):
- **app.js**, aplicación con la implementación del decorador.
- **decorator.js**, decorador que implementa la función de cambio de moneda a euros.
- **currency_conversions.json**, fichero con los tipos de cambio.

Para ejecutar el programa:
```
npm run decorator
```
## Publisher - Subscriber (Nivel 3)
Necesario tener instalado Rabbit MQ (https://www.rabbitmq.com/download.html)
instalar dependencias (amqplib)
```
npm install
```
Ficheros (en carpeta **3_publisher_subscriber**):
- **app.js**, lanzador de 2 forks, una del servidor (publisher) y otra del cliente (subscriber).
- **servidor.js**, clase Publisher.
- **cliente.js**, clase Subscriber.

Para ejecutar el programa desde **app.js** y ejecutar 2 forks (**servidor.js** y **cliente.js**). Los mensajes comparten consola.
```
npm run pub-subs
```
Para ejecutar en consolas separadas, abrir dos consolas y ejecutar los comandos:
- consola 1:
```
npm run subscriber
```
- consola 2:
```
npm run publisher
```

Seguro que hay una manera mejor, pero no la he encontrado 🙂