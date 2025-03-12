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
