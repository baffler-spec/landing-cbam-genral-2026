# Coldwell Banker Franquicias — landing general

Proyecto independiente de la calculadora de conversión. No reemplaza el dominio oficial.

## Recorrido
Escenas progresivas: punto de partida; mercado internacional + ciudad; mercado premium + adquisición; exclusivas y formación + capital de trabajo; acompañamiento y proptech + momento; calculadora y sesión.

## Contacto
El formulario utiliza POST nativo a la acción Zoho publicada en https://coldwellbanker.com.mx/franquicias. Se conservaron todos los nombres, valores y rangos de los campos visibles originales, incluida la aceptación de privacidad. Se conservó la redirección oficial de agradecimiento. No se enviaron leads de prueba a Zoho. La compatibilidad de recepción requiere una prueba autorizada con el equipo comercial antes de sustituir la landing oficial.

Mapeo: SingleLine (nombre), PhoneNumber_countrycode (WhatsApp), Email, Radio2 (adquisición), Radio4 (capital de trabajo), Radio3 (momento), SingleLine10 (ciudad), Radio (oficina Si/No), Radio1 (Acepto). SingleLine11 mantiene Adquiere Franquicia.

Las UTMs originales, gclid, zc_gad y referrer se transmiten en campos ocultos. Se añadió utm_ad; hay que verificar que Zoho lo tenga configurado para almacenarlo. Eventos dataLayer: selección de ruta, avance por escena, intento de contacto, descarga de PDF. No se instala un ID de Analytics ni se etiqueta el intento como conversión confirmada. El evento de conversión final corresponde a la página oficial de agradecimiento.

## Calculadoras
La ruta de conversión conserva lib/calculator.ts y lib/parameters.json sin modificaciones frente al proyecto original. El ingreso bruto por comisiones (IBC) no se presenta como utilidad neta ni como crecimiento adicional sumado al rango.

La ruta emprendedor muestra un simulador aritmético independiente: valor de propiedad × tasa de comisión × cierres anuales; se compara retención al 100% con un porcentaje editable de participación al compartir. Los supuestos están expuestos y son editables. No se infiere ROI ni elegibilidad. No se equipara exclusiva con comisión completa garantizada.

Ambas rutas generan PDF de una hoja, con logo y enlace de regreso para solicitar sesión. Descargar no registra datos ni solicita contacto.

## Argumentos y fuentes de revisión
- Landing oficial consultada el 6 octubre 2026: 50+ países, 85+ oficinas, 800+ asesores, proptech y proceso de siete pasos.
- Notas de revisión del 2 octubre: caso de una franquicia en CDMX con más de 100 MDP en comisiones durante 2024. Se presenta como caso reportado, no promedio ni resultado asegurado. La frase de exclusividad de marca fue incorporada a solicitud expresa del cliente en la revisión del 5 octubre 2026.
- Programa de seis semanas: hito de incorporación de propiedad, no venta garantizada. Confirmar definición y condiciones con CB antes de publicación abierta.
- Análisis de propuesta Coach: separar las rutas, sostener la calificación por rangos, anticipar contacto, trazabilidad de UTMs y no prometer plazos de recuperación.

Cinco fotografías ilustrativas nuevas, exclusivas para esta landing, sin reutilizar fotografías de la calculadora ni de la versión anterior.

## Revisión de rutas — 12 octubre 2026
La pregunta visible es «¿Ya tienes tu propia agencia inmobiliaria?». El campo Zoho continúa siendo Radio, con valores exactos Si/No y el título original administrado por Zoho.

No: ciudad, monto de adquisición, capital del primer año y momento de inversión se responden a lo largo de las escenas. Al finalizar se muestra un resumen de beneficios, una síntesis del proyecto y el formulario de nombre, WhatsApp y correo con las respuestas previas precargadas. Ya no existe el simulador ni el PDF de cifras para emprendedores.

Si: se entra directamente a las cuatro escenas de la calculadora original (comisiones brutas anuales, renta mensual, gastos mensuales, valor promedio de propiedades). Conserva parámetros, resultados, gráfica y PDF. Los campos originales de calificación de Zoho se completan en el formulario de contacto si aún no tienen respuesta; no se deducen ni se rellenan a partir de la calculadora.

La solicitud de reunión informa que habrá contacto por WhatsApp, llamada o correo, con cita pendiente de coordinación. Se ofrece el teléfono oficial para coordinar directamente. No se inventó una agenda conectada ni se enviaron leads reales durante las verificaciones.

Se aplicaron los comentarios claros de la landing general y conversión: tono colaborativo de apertura, Universidad Coldwell Banker, explicación de capital de trabajo separado de adquisición, análisis de plaza, beneficios PropTech/inventario/coaching y nota de comisiones brutas. No se aplicaron cambios a las otras páginas mencionadas en el documento. Los estados autorizados que menciona el documento no están enumerados; el campo ciudad conserva entrada libre.

## Cierre emprendedor — ajuste del 12 octubre
Al responder el momento de inversión se muestra una sola tarjeta con ciudad, rangos de adquisición y capital, momento, seis beneficios breves y el CTA «Convierte tu proyección en un negocio real». El formulario no se muestra automáticamente: ese CTA revela la reunión de discovery y los datos del lead. Se conserva el acceso voluntario desde el encabezado. El resto de información final aparece después de revelar el contacto, para centrar el cierre del cuestionario en la tarjeta.


## Actualización: Landing emprendedores — 19 de noviembre de 2026

- Nombre de la página y metadatos: Landing emprendedores.
- Títulos, subtítulo principal, Coaching Directivo permanente y beneficios según la sección Emprendedores del documento de cambios. Inventario de +30,000 propiedades sin calificar todo el inventario como premium.
- Referencia visual: Figma LANDINGS CBAM, página LANDING EMPRENDEDORES; fotografías corporativas de la carpeta compartida, paneles claros/oscuros, títulos con pesos contrastantes y acentos azules. Se conservaron el recorrido progresivo y el modelo de calculadora existentes.
- Estado y ciudad/zona de apertura: catálogo cerrado basado en la hoja Prioritarias, con Guadalajara incorporada de la captura Estrategia 2027. Se mantienen las exclusiones de Sin cupo. Baja California habilitada (Mexicali, Rosarito y Valle de Guadalupe); Baja California Sur excluida.
- No se interpreta la prioridad territorial como cupo garantizado. Se indica validación por Expansión; la captura no agrega un catálogo municipal nuevo y no se inventan otras ciudades.
- La ciudad permanece oculta hasta elegir estado. Cada cambio de estado borra la ciudad. No se puede avanzar o enviar con una combinación ajena al catálogo.
- Integración Zoho conservada: SingleLine10 recibe ciudad/zona y estado de apertura en un solo valor; no se crea un campo remoto sin mapeo confirmado. UTMs, consentimiento y destino de formulario conservados.
- Verificación: TypeScript, compilación y comprobaciones del catálogo territorial. Prueba visual de Baja California disponible, Jalisco limitado a Guadalajara/Zapopan, reinicio de ciudad y botón bloqueado tras cambiar estado. No se envían leads de prueba al CRM.


## Revisión de 20 anotaciones — noviembre 2026

Aplicados los comentarios 1–20: encabezado, eliminación del botón superior, denominación de marca, favicon recortado del monograma CB y estrella, mercado de lujo/semilujo, copy de ímpetu y éxito, segundo bullet de liderazgo internacional, nota territorial unificada, expertos en Coaching Directivo, capital sin publicidad, portales de lujo, llamada a agendar sesión, condonación de regalías según ejercicio financiero, recuadro antes del botón con nuevo título, “Juntos” azul, eliminación de metodología y cierre, logo blanco original sin filtro y enlace de WhatsApp en el pie.

Se conservan la selección territorial vinculada, el formulario Zoho, las UTMs, el consentimiento y la calculadora. No se envían leads de prueba.


## Reencuadre del hero

Fotografía recompuesta conservando la pareja y el entorno, con ambas personas a la derecha y espacio libre a la izquierda. Imagen anclada arriba/derecha, sin animación de zoom. En pantallas de hasta 1100 px, fotografía encima del bloque de texto para impedir que los titulares y el formulario cubran los rostros. Asset: public/hero-emprendedores-right.webp.


## Ruta hacia calculadora externa

Al seleccionar Sí y pulsar Explorar el potencial de mi agencia se navega en la misma pestaña a https://coldwellbanker.com.mx/franquicias/calculadora. Se conservan parámetros UTM y gclid si existen. Elegir No conserva el recorrido de emprendedores. Seleccionar Sí por sí solo no redirige.
