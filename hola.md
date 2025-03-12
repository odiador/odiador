# Arquitectura de Información y Modelado de Interacción  

## Categorías en la Arquitectura de Información  
Al diseñar la arquitectura de información, definimos **tres categorías** que representaran los aspectos que queríamos abordar. Estas categorías **no están expresadas en forma de verbos**.  

## Selección de Patrones  
Es necesario elegir **tres patrones** de otras aplicaciones similares.  

- **Modelo de datos unificado**  
  - Todos los patrones compartirán el mismo modelo de datos.  
  - Se representará con un **diagrama de entidad-relación** o un **diagrama de clases**.  
  - El modelo de datos de los patrones ya debe existir, solo se debe **buscar y pegar**.  
  - Los patrones pueden corresponder a procesos como **compras** o **inicio de sesión**.  

## Modelo de Interacción  
Se debe analizar cómo es el proceso y describir **todos sus pasos**.  

- **Aspectos clave**  
  - Implican cambios en la **navegación**.  
  - Se describe de **tres maneras**:  
    1. **Lenguaje natural**: Listado de tareas  
       - Existen **tareas padre** con **subtareas**.  
       - Se asignan etiquetas según el **tipo de tarea**.  
       - Se toma como referencia el modelo **CTT (modelo de tareas concurrentes, representado como una nube)**.  
       - Clasificación de tareas:  
         - **Interactivas**:  
           - Si el usuario realiza una acción.  
           - Si el sistema **imprime o muestra** algo.  
         - **De usuario**:  
           - Implican **decisiones**.  
         - **De sistema**:  
           - Procesos internos (**validaciones, búsquedas**).  
           - Si se muestra un **porcentaje o feedback**, se considera una tarea de interacción.  
         - **Abstractas**:  
           - Son tareas **padre**.  

- **Otras formas de modelar la interacción con tareas**  
  - Se debe explicar **por qué** se usa un modelo u otro.  

## Benchmarking  
En el **benchmarking**, se deben incluir **tres pestañas** con los nombres de los **patrones de interacción elegidos**.  

- Se debe describir **cómo cinco aplicaciones** usan dichos patrones.  
- **Ejemplo: hacer una reserva**  
  - Se muestra el **paso a paso** en pantallas.  

```
Cuando hicimos la arquitectura de información pensamos en 3 categorías que expresaran lo que queríamos abordar, estas categorías no están expresadas en forma de verbos

Hay que elegir 3 patrones de otras aplicaciones parecidas

Todos 3 tendrían el mismo modelo de datos
-> con un diagrama de entidad-relación o diagrama de clases
-> el modelo de datos de los patrones deben de estar ya hechos, es solo buscarlo y pegarlo ahí, el patrón puede ser de compra o incluso de inicio de sesión

En el modelo de interacción hay que analizar como es el proceso y todos sus pasos


-> implican cambio en la navegación
-> se describe de 3 maneras: 
----> lenguaje natural: listado de tareas (hay tareas padre que tienen subtareas, tienen etiquetas que son el tipo de tarea, lo tomamos de un modelo que se llama CTT (modelo de tareas concurrente, es una nubecita) 
---------> si el usuario hace algo, es una tarea interactiva
---------> si el sistema imprime o muestra, también es interactivo
---------> las de usuario implican decisiones
---------> las de sistema son de procesamiento interno (validaciones, búsqueda, se está haciendo un proceso
------------> si se muestra un porcentaje o un feedback mientras se hace una tarea de sistema, hay otra tarea de interacción que es la que muestra ese %
---------> las abstractas son tareas padre

Hay otra forma de modelar la interacción con tareas

Hay que explicar por qué usamos un modelo u otro

En el benchmarking hay que agregar 3 pestañas que son los nombres de los patrones de interacción elegidos

Hay que describir para 5 aplicaciones cuales son las pantallas que usan ese patrón de interacción

Ejemplo: hacer una reserva
-> se muestra el paso a paso por pantallas

```
