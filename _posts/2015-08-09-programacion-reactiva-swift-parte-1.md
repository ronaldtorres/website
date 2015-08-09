---
layout: post
title: Programación Reactiva en Swift: Parte 1, Introducción
excerpt: "Aprende conceptos reactivos en Swift (Reactive Cocoa) y empieza a trabajar con ellos en tus proyectos"
modified: 2015-08-0
tags: [reactive, swift, reactive cocoa]
comments: true
image:
  feature: headers/windows.jpg
  credit: Pedro Piñera
sitemap   :
  priority : 0.5
  isfeatured : 0
---

Con la llegada de Swift y la introducción de interesantes operadores, conceptos funcionales, y la seguridad de tipos el paradigma de programación reactiva ha cobrado especial importancia en el desarrollo de apps. En comparación con la programación imperativa a la que la mayoría de desarrolladores estamos acostumbrados *(yo incluido)* programar de forma reactiva consiste en modelar los sucesos que tienen lugar en el sistema como un conjunto de *eventos* que son enviados a través de un “stream” de datos. El concepto es bastante sencillo, y aunque no todos los sucesos tienen carácter de *stream*, pueden acabar siendo modelados como tal. Desde acciones que realiza el usuario sobre la UI, hasta la información que proviene del framewok de localización.

Todas las librerías que encontramos hoy en día si echamos un vistazo en Github tratan de modelar todos los conceptos reactivos a través de una serie componentes y operadores para manipular y procesar los eventos. La diferencia entre ellas es principalmente la sintaxis y el nombre que usan para los componentes. Algunas de ellas incluso añaden operaciones como por ejemplo de *retry*. Encontramos librerías como [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) que recientemente ha actualizado toda su API para adaptarse a las ventajas que Swift aporta como lenguaje, o [RXSwift](https://github.com/ReactiveX/RxSwift) cuya base es ReactiveX disponible para otros lenguajes como Java o Javascript.

>Si tienes curiosidad en el repositorio de [RXSwift](https://github.com/ReactiveX/RxSwift) encontrarás una tabla donde comparan RXSwift con el resto de alternativas para Swift.

![]({{site.url}}/images/posts/reactive_stream.png)

## Patrones de observación

Cuando empecé a introducir los conceptos reactivos una de mis primeras inquietudes fue entender qué patrones similares había estado usando hasta ahora, que problemas presentaban, y de qué forma la programación reactiva ayudaba o facilitaba estos patrones. La mayoría de ellos los usas a diario:

### KVO

Extensivamente usado en Cocoa. Permite observar el estado de las properties de un objeto determinado y reaccionar antes sus cambios. El mayor problema de KVO es que no es fácil de usar, su API está demasiado recargada y todavía no dispone de una interfaz basada en bloques (o closures en Swift)

{% highlight swift %}
objectToObserve.addObserver(self, forKeyPath: "myDate", options: .New, context: &myContext)
{% endhighlight %}
