import type { Topic } from '../topic-types';

/** P2 · Llegadas, alojamiento y más planes en la ciudad (27–36). */
export const CIUDAD_TOPICS: Topic[] = [
  {
    slug: 'desde-centro-bucaramanga',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'del centro de bucaramanga al parque san pio',
    intent: 'Resolver el trayecto desde el centro de la ciudad',
    title: 'Cómo llegar al Parque San Pío desde el centro de Bucaramanga',
    description: 'Opciones para ir del centro de Bucaramanga al Parque San Pío en Cabecera del Llano: taxi, aplicación, bus o a pie según el punto de partida.',
    h1: 'Del centro de Bucaramanga al Parque San Pío',
    lead: 'Cabecera está dentro del área urbana; el último tramo se resuelve con mapas. Esta página plantea el trayecto sin fijar rutas ni tiempos.',
    sections: [
      {
        heading: 'Plantea el trayecto el mismo día',
        paragraphs: [
          'Introduce «Parque San Pío» en tu aplicación de mapas o de transporte al salir: taxis, aplicaciones, bus urbano y la caminata son alternativas según dónde estés y la hora.',
          'No fijamos una ruta, un tiempo de trayecto ni una tarifa, porque dependen del tráfico y de los recorridos vigentes. Una aplicación local refleja mejor esas condiciones que una guía estática.'
        ]
      },
      {
        heading: 'El último tramo en Cabecera',
        paragraphs: [
          'Como referencia de zona, Google Maps lista Cra. 33 #45; no es una entrada exacta verificada. Confirma el punto de llegada con el conductor o en el mapa antes de bajar.',
          'Si decides caminar desde el centro, mide primero la distancia en tu aplicación de mapas: depende mucho de tu punto de partida y del clima del día.'
        ],
        bullets: [
          'Escribe el destino completo en la aplicación.',
          'Confirma el punto de bajada antes de terminar el trayecto.',
          'Valora la caminata según distancia real y clima.',
          'Lleva agua si el recorrido se hace a pie.'
        ],
        callout: 'Esta guía no publica tiempos de trayecto ni tarifas de transporte.'
      },
      {
        heading: 'Si vienes de más lejos',
        paragraphs: [
          'Desde el aeropuerto u otras zonas fuera del casco urbano, suele convenir llegar primero a un punto céntrico y desde allí resolver el último tramo hacia Cabecera.',
          'Las guías de transporte público y de llegada desde el aeropuerto Palonegro desarrollan ese esquema; la de cómo llegar compara todas las formas de acercarse al parque.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Se puede ir caminando desde el centro?',
        a: 'Depende de tu punto de partida y del clima; consulta la distancia en tu aplicación de mapas el mismo día.'
      },
      {
        q: '¿Qué bus lleva al parque?',
        a: 'No fijamos rutas; consulta una aplicación de transporte local el día de la visita.'
      },
      {
        q: '¿Cuánto tarda el trayecto?',
        a: 'No publicamos tiempos: dependen del tráfico, del medio de transporte y del punto de partida.'
      }
    ],
    related: ['como-llegar', 'transporte-publico', 'desde-aeropuerto-palonegro', 'ubicacion'],
    sources: [5, 3, 4],
    map: true
  },
  {
    slug: 'desde-aeropuerto-palonegro',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'aeropuerto palonegro al parque san pio',
    intent: 'Organizar la llegada desde el aeropuerto sin horarios fijos',
    title: 'Del aeropuerto Palonegro al Parque San Pío, Bucaramanga',
    description: 'Cómo plantear el trayecto desde el Aeropuerto Internacional Palonegro hasta el Parque San Pío sin depender de horarios fijos.',
    h1: 'Del aeropuerto Palonegro al Parque San Pío',
    lead: 'El aeropuerto que sirve a Bucaramanga está fuera del casco urbano, en la zona de Lebrija. Esta página explica cómo organizar el trayecto sin inventar frecuencias ni precios.',
    sections: [
      {
        heading: 'Un trayecto por carretera',
        paragraphs: [
          'El recorrido se realiza por carretera y su duración depende del tráfico y de las condiciones de la vía; por eso esta guía no publica tiempos ni frecuencias.',
          'Consulta el mismo día los servicios de transporte disponibles en el aeropuerto, sus tarifas y sus puntos de llegada. Esa información la gestionan los operadores y puede cambiar.'
        ]
      },
      {
        heading: 'Resolver el último tramo en la ciudad',
        paragraphs: [
          'Una forma práctica de organizarlo es llegar primero a un punto céntrico de Bucaramanga y desde allí resolver el último tramo hacia Cabecera con una aplicación de mapas.',
          'Si tu vuelo llega de noche, confirma además el estado de acceso al parque y aplica las precauciones habituales de un espacio público urbano.'
        ],
        bullets: [
          'Verifica los servicios de transporte disponibles al llegar.',
          'Confirma tarifas y punto de destino antes de subir.',
          'Divide el trayecto: ciudad, luego Cabecera.',
          'Si llegas de noche, revisa avisos y señalización.'
        ],
        callout: 'No verificamos rutas directas, horarios ni frecuencias desde el aeropuerto.'
      },
      {
        heading: 'Primeras paradas de la visita',
        paragraphs: [
          'Si el paseo es lo primero del viaje, conviene empezar por los datos de ubicación y por las opciones de cómo llegar dentro de la ciudad.',
          'Para decidir la franja horaria del paseo tras un vuelo, la guía del mejor momento para visitar resume clima, luz y precauciones según la hora.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay un bus directo al parque?',
        a: 'No verificamos rutas directas; consulta los servicios vigentes en el aeropuerto el día del viaje.'
      },
      {
        q: '¿Cuánto se tarda desde Palonegro?',
        a: 'No publicamos tiempos de trayecto: dependen del tráfico y de las condiciones de la vía.'
      },
      {
        q: '¿Cuánto cuesta el transporte?',
        a: 'No publicamos tarifas; consúltalas con los operadores disponibles en el aeropuerto el mismo día.'
      }
    ],
    related: ['como-llegar', 'transporte-publico', 'desde-centro-bucaramanga', 'horario'],
    sources: [5, 3, 4],
    map: true
  },
  {
    slug: 'hoteles-cerca',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'hoteles cerca del parque san pio cabecera',
    intent: 'Elegir alojamiento en el sector sin recomendar negocios',
    title: 'Hoteles cerca del Parque San Pío, Cabecera',
    description: 'Alojamiento en Cabecera del Llano cerca del Parque San Pío y cómo verificar ubicación, tarifas y servicios antes de reservar.',
    h1: 'Dónde alojarse cerca del Parque San Pío',
    lead: 'Cabecera del Llano es una zona con oferta de alojamiento y servicios, además de comercio y restaurantes. Esta guía no recomienda establecimientos concretos.',
    sections: [
      {
        heading: 'Busca por sector, no por promesa de distancia',
        paragraphs: [
          'Si quieres tener el parque a distancia caminable, busca alojamiento en Cabecera y comprueba la dirección exacta en el canal oficial del hotel o de la plataforma de reservas.',
          'Esta guía no confirma establecimientos concretos, distancias, precios ni disponibilidad. Una ficha de terceros puede quedar desactualizada, así que conviene contrastarla.'
        ]
      },
      {
        heading: 'Qué verificar antes de reservar',
        paragraphs: [
          'Además de la dirección, revisa horarios de llegada, políticas de cancelación y condiciones de la reserva directamente con el proveedor.',
          'Si el motivo del viaje es la visita al parque, comprueba también los avisos de acceso del espacio público: un cierre por mantenimiento puede cambiar el plan aunque el alojamiento esté bien ubicado.'
        ],
        bullets: [
          'Dirección exacta y sector.',
          'Horarios de llegada y salida.',
          'Política de cancelación y condiciones de pago.',
          'Servicios incluidos, confirmados con el proveedor.'
        ],
        callout: 'Esta guía no lista ni recomienda negocios concretos ni gestiona reservas.'
      },
      {
        heading: 'Combinar estadía y paseo',
        paragraphs: [
          'El plan de media jornada del sector sirve como punto de partida para organizar paseo, comida y café sin grandes desplazamientos.',
          'Para contextualizar la zona, la guía de Cabecera del Llano explica qué resuelve caminando; para llegar desde otras zonas, las guías de transporte y llegada.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Recomiendan un hotel en particular?',
        a: 'No; esta guía independiente no lista ni recomienda negocios concretos.'
      },
      {
        q: '¿A qué distancia está el parque de los hoteles?',
        a: 'No publicamos distancias: verifica la dirección de cada alojamiento en su canal oficial y mídela en el mapa.'
      },
      {
        q: '¿Puedo reservar desde esta guía?',
        a: 'No. La guía no ofrece reservas, cuentas ni formularios de contacto.'
      }
    ],
    related: ['cabecera-del-llano', 'plan-media-jornada', 'guia-bucaramanga-familiar', 'ubicacion'],
    sources: [3, 5, 4]
  },
  {
    slug: 'otros-parques-bucaramanga',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'otros parques de bucaramanga ademas de san pio',
    intent: 'Ampliar el plan con otros espacios de la ciudad',
    title: 'Otros parques y paseos de Bucaramanga además de San Pío',
    description: 'Otros espacios públicos y paseos citados en rutas locales de Bucaramanga, y en qué se diferencia el Parque San Pío.',
    h1: 'Otros parques y paseos de Bucaramanga',
    lead: 'San Pío es una parada urbana; la ciudad y su área metropolitana ofrecen otros planes al aire libre. Esta página los menciona solo como contexto.',
    sections: [
      {
        heading: 'Referencias de contexto',
        paragraphs: [
          'En las rutas locales suelen mencionarse el Parque del Agua y el centro histórico de Girón, entre otros espacios. Esta guía los cita únicamente como referencias de contexto.',
          'No verificamos sus direcciones, horarios, tarifas ni estado de acceso, y recomendamos consultar cada destino por separado antes de incluirlo en el plan.'
        ],
        callout: 'No presentamos comparativas de calidad ni rankings entre parques.'
      },
      {
        heading: 'Qué hace particular a San Pío',
        paragraphs: [
          'La combinación de arbolado maduro, senderos de ladrillo y arte público —con la escultura de Botero— dentro de un sector comercial caminable como Cabecera.',
          'Esa mezcla explica por qué funciona bien como paseo corto y no como una excursión de día completo. Para profundizar en esos elementos, la guía de qué ver los describe uno por uno.'
        ],
        bullets: [
          'Arte público con declaratoria cultural municipal.',
          'Arbolado y paisajismo documentados por la Alcaldía.',
          'Entorno comercial caminable en Cabecera del Llano.',
          'Visita que no requiere reserva según la información disponible.'
        ]
      },
      {
        heading: 'Cómo ampliar el plan',
        paragraphs: [
          'Si prefieres seguir en la misma zona, las guías de qué hacer en los alrededores y de planes sin costo proponen combinaciones sin salir de Cabecera.',
          'Para entender el origen del parque y de sus obras, la guía de historia reúne las fuentes documentales; para el arte público, la guía de la escultura de Botero.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuál es mejor, San Pío u otro parque?',
        a: 'Depende de lo que busques; aquí documentamos San Pío y no emitimos comparativas de calidad.'
      },
      {
        q: '¿Verifican los horarios del Parque del Agua o de Girón?',
        a: 'No. Se citan como contexto; consulta cada destino en sus fuentes oficiales antes de incluirlo.'
      },
      {
        q: '¿Se puede visitar todo en un día?',
        a: 'No publicamos itinerarios entre destinos que no verificamos. Organiza cada parada por separado.'
      }
    ],
    related: ['escultura-botero', 'historia', 'cosas-gratis-bucaramanga', 'ubicacion'],
    sources: [3, 0, 1],
    article: true
  },
  {
    slug: 'cosas-gratis-bucaramanga',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'planes gratis en bucaramanga parques arte publico',
    intent: 'Encontrar planes sin costo a partir del espacio público',
    title: 'Planes gratis en Bucaramanga: parques y arte público',
    description: 'Ideas de planes sin costo en Bucaramanga a partir de espacios públicos como el Parque San Pío, senderos y arte al aire libre.',
    h1: 'Planes sin costo en Bucaramanga',
    lead: 'Caminar por la ciudad y su arte público es un plan que no requiere entrada según las fuentes disponibles. Esta página distingue ese núcleo de los servicios de pago.',
    sections: [
      {
        heading: 'El parque como punto de partida',
        paragraphs: [
          'Paseo bajo los árboles, senderos de ladrillo y la escultura de Botero en un espacio público de libre acceso según las fuentes disponibles. Añade una caminata por las calles de Cabecera y la observación del arte público del sector.',
          'No se verificó una tarifa municipal vigente para el ingreso. Eso no convierte en gratuitos los servicios que puedan ofrecerse alrededor.'
        ],
        bullets: [
          'Paseo por senderos y zonas verdes.',
          'Observación del arte público.',
          'Caminata por las calles comerciales de Cabecera.',
          'Fotografía del entorno, respetando la señalización.'
        ]
      },
      {
        heading: 'Lo que sí puede tener costo',
        paragraphs: [
          'Comida, café, alojamiento, transporte y eventos organizados pueden tener costo. Esta guía no afirma que todos los servicios o actividades del entorno sean gratuitos.',
          'Confirma cada caso antes de ir y respeta cierres del espacio público. Un evento con boleta anunciada se rige por las condiciones de su organizador.'
        ],
        callout: 'Confirma cualquier cobro anunciado con quien lo realiza antes de pagar.'
      },
      {
        heading: 'Extensiones sencillas',
        paragraphs: [
          'Para ordenar el paseo con tiempos, la guía de qué hacer en los alrededores propone tres ritmos; para una salida familiar, la guía de Bucaramanga en familia.',
          'Si el plan depende de la luz del día, la guía del mejor momento para visitar resume las franjas más cómodas en clima cálido.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Todo el parque es gratis?',
        a: 'El parque se describe como público; cualquier actividad o servicio con cobro anunciado debe confirmarse por separado.'
      },
      {
        q: '¿Los alrededores también son gratuitos?',
        a: 'No necesariamente: comida, café, alojamiento y transporte son servicios de terceros con sus propias condiciones.'
      },
      {
        q: '¿Hay que reservar para caminar por el parque?',
        a: 'No se verificó un sistema de reservas para el espacio público.'
      }
    ],
    related: ['entrada-precio', 'otros-parques-bucaramanga', 'que-ver', 'que-hacer-alrededores'],
    sources: [5, 3, 0]
  },
  {
    slug: 'flora-y-arboles',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'arboles y plantas del parque san pio',
    intent: 'Conocer el paisajismo documentado sin inventar especies',
    title: 'Árboles y plantas del Parque San Pío, Bucaramanga',
    description: 'Qué se ha publicado sobre el arbolado y el paisajismo del Parque San Pío: sombra, plantas ornamentales y senderos.',
    h1: 'Árboles y paisajismo del Parque San Pío',
    lead: 'La sombra de árboles maduros es parte de la identidad del parque. Esta página recoge lo documentado y aclara qué no hemos verificado.',
    sections: [
      {
        heading: 'Una intervención de paisajismo documentada',
        paragraphs: [
          'La Alcaldía de Bucaramanga reportó una intervención que incluyó la siembra de más de 3.000 plantas ornamentales y el mejoramiento del entorno de la escultura de la mariposa donada por Mario Hernández.',
          'También se documentaron trabajos en senderos, iluminación y mobiliario. Son registros de mantenimiento del espacio público, no una descripción botánica del parque.'
        ]
      },
      {
        heading: 'Qué no afirma esta guía',
        paragraphs: [
          'No verificamos un inventario de especies, cantidades actuales ni el estado de cada zona verde. Una cifra de siembra de una intervención pasada no equivale a un censo vigente.',
          'Tampoco certificamos que cada área ajardinada esté abierta: las zonas en recuperación pueden estar señalizadas o cerradas temporalmente.'
        ],
        bullets: [
          'Sin inventario de especies verificado.',
          'Sin conteo actual de ejemplares.',
          'Sin certificación del estado de cada zona.',
          'Sin identificación de árboles concretos.'
        ],
        callout: 'Disfruta la sombra sin intervenir las plantas y respeta las áreas en recuperación o cerradas.'
      },
      {
        heading: 'La sombra en la experiencia de visita',
        paragraphs: [
          'En el clima cálido de Bucaramanga, el arbolado maduro hace más cómodo el paseo y explica por qué la mañana y el final de la tarde resultan agradables.',
          'Para el contexto histórico de las mejoras, la guía de historia; para los motivos fotográficos que ofrece el arbolado, la guía de fotografía.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Qué especies de árboles hay?',
        a: 'No verificamos un inventario de especies; consulta publicaciones municipales si necesitas ese detalle.'
      },
      {
        q: '¿Siguen allí las 3.000 plantas?',
        a: 'La cifra corresponde a una intervención reportada por la Alcaldía, no a un conteo actual.'
      },
      {
        q: '¿Se pueden tocar o cortar las plantas?',
        a: 'No intervengas las plantas y respeta las zonas señalizadas o en recuperación.'
      }
    ],
    related: ['historia', 'guia-de-fotografia', 'que-ver', 'escultura-mariposa'],
    sources: [0, 2, 3],
    article: true
  },
  {
    slug: 'escultura-mariposa',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'escultura de la mariposa parque san pio mario hernandez',
    intent: 'Identificar la otra pieza de arte público del parque',
    title: 'La escultura de la mariposa del Parque San Pío',
    description: 'La mariposa donada por Mario Hernández en el Parque San Pío y su relación con las mejoras de paisajismo documentadas por la Alcaldía.',
    h1: 'La escultura de la mariposa en San Pío',
    lead: 'Además de Botero, el parque cuenta con otra pieza muy citada en las publicaciones locales. Esta página la distingue con claridad de la obra de Botero.',
    sections: [
      {
        heading: 'Qué documentan las fuentes',
        paragraphs: [
          'La Alcaldía de Bucaramanga reportó el mejoramiento del entorno de la escultura de la mariposa donada por Mario Hernández, dentro de una intervención de paisajismo que incluyó más de 3.000 plantas ornamentales.',
          'Es una referencia documental de una mejora del espacio, no una verificación del estado actual de la pieza ni de su ubicación exacta dentro del parque.'
        ]
      },
      {
        heading: 'No es una obra de Botero',
        paragraphs: [
          'Las fuentes municipales vinculan la mariposa a una donación de Mario Hernández. La pieza de Botero en el parque es «Mujer de pie, desnuda», instalada en 2010 y declarada bien de interés cultural municipal en 2013 según el IMCT.',
          'Distinguirlas evita confusiones al buscar imágenes o al preguntar por el arte público del lugar. Cada una tiene su propia historia y su propio régimen de conservación.'
        ],
        bullets: [
          'Mariposa: donación de Mario Hernández, según la Alcaldía.',
          'Botero: «Mujer de pie, desnuda», según el IMCT.',
          'Paisajismo: más de 3.000 plantas ornamentales reportadas.',
          'Estado actual de ambas piezas: no verificado por esta guía.'
        ],
        callout: 'Si tu visita busca esta obra en concreto, confirma en sitio su ubicación y posibles trabajos de conservación.'
      },
      {
        heading: 'Visitar el arte público',
        paragraphs: [
          'Recorre el espacio con calma, respeta la señalización y no intervengas las piezas. Si hay obras en curso, adapta el paseo a las zonas abiertas.',
          'Para la historia y la declaratoria de la pieza de Botero, consulta su guía específica; para el conjunto de elementos del parque, la guía de qué ver.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Es también una obra de Botero?',
        a: 'No; las fuentes municipales la vinculan a una donación de Mario Hernández. La pieza de Botero es «Mujer de pie, desnuda».'
      },
      {
        q: '¿Dónde está exactamente la mariposa?',
        a: 'No verificamos su ubicación exacta dentro del parque; confírmala en sitio y respeta la señalización.'
      },
      {
        q: '¿Está en restauración?',
        a: 'No verificamos el estado actual de la pieza; revisa los avisos y cierres que encuentres al llegar.'
      }
    ],
    related: ['escultura-botero', 'historia', 'flora-y-arboles', 'que-ver'],
    sources: [0, 1, 3],
    article: true
  },
  {
    slug: 'guia-bucaramanga-familiar',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'bucaramanga en familia planes con ninos',
    intent: 'Organizar una salida familiar con pocos traslados',
    title: 'Bucaramanga en familia: guía de planes con niños',
    description: 'Cómo organizar una salida familiar en Bucaramanga con el Parque San Pío como punto de partida: paseo, comida y precauciones.',
    h1: 'Bucaramanga en familia',
    lead: 'Una salida con niños funciona mejor con pocos traslados y planes flexibles. Esta página funciona como índice de las guías útiles para ese caso.',
    sections: [
      {
        heading: 'Un esquema de pocas paradas',
        paragraphs: [
          'Empieza por el Parque San Pío —sombra, senderos y arte público—, ajusta el paseo a 45–90 minutos como propuesta editorial y deja margen para descansos con agua y protección solar.',
          'Después, el entorno de Cabecera permite resolver la comida sin grandes desplazamientos; confirma horarios de cada local. Mantén la supervisión de los menores durante toda la salida.'
        ],
        bullets: [
          'Paseo corto y adaptable en el parque.',
          'Descansos con agua y protección solar.',
          'Comida en el sector, con horario verificado.',
          'Plan bajo techo si llueve.'
        ]
      },
      {
        heading: 'Lo que no se certifica',
        paragraphs: [
          'Esta guía no certifica el estado de juegos, mobiliario ni zonas específicas, y no garantiza seguridad. Comprobar el estado real al llegar forma parte del plan.',
          'Tampoco lista ni recomienda negocios concretos: restaurantes, cafés y alojamiento se verifican en sus canales oficiales.'
        ],
        callout: 'Contenido orientativo, no información oficial ni garantía de seguridad o disponibilidad.'
      },
      {
        heading: 'Guías para cada decisión',
        paragraphs: [
          'Para los detalles del paseo con menores, la guía de visita en familia; para el clima y la lluvia, las guías de visita cuando llueve y de clima por meses.',
          'Para alargar la salida, el plan de media jornada; para planes sin costo, la guía de cosas gratis en Bucaramanga; para el contexto del sector, Cabecera del Llano.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Qué llevo para una salida con niños?',
        a: 'Agua, protección solar, calzado cómodo y tiempo flexible; verifica el clima y los cierres antes de salir.'
      },
      {
        q: '¿Hay juegos infantiles garantizados?',
        a: 'No. Las publicaciones municipales documentan mejoras, pero no verificamos su estado actual.'
      },
      {
        q: '¿Qué hago si llueve?',
        a: 'Cambia a un plan bajo techo en Cabecera y retoma el paseo cuando mejore el tiempo.'
      }
    ],
    related: ['visita-en-familia', 'hoteles-cerca', 'cosas-gratis-bucaramanga', 'visita-cuando-llueve', 'que-hacer-alrededores'],
    sources: [0, 2, 3]
  },
  {
    slug: 'clima-por-meses',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'clima de bucaramanga por meses cuando visitar',
    intent: 'Entender el clima sin calendarios inventados',
    title: 'Clima de Bucaramanga: cuándo visitar el Parque San Pío',
    description: 'Cómo es el clima cálido de Bucaramanga a lo largo del año y qué revisar antes de visitar el Parque San Pío.',
    h1: 'Clima de Bucaramanga y cuándo ir a San Pío',
    lead: 'La ciudad es cálida durante todo el año; más que un mes ideal, conviene mirar el día concreto. Esta página explica por qué no publicamos tablas mensuales.',
    sections: [
      {
        heading: 'Por qué no hay tabla de temperaturas',
        paragraphs: [
          'Esta guía no publica temperaturas ni calendarios de lluvia por mes, porque varían cada año y preferimos no fijar datos que queden obsoletos o que no podamos contrastar.',
          'En general, el clima cálido hace recomendables la mañana y el final de la tarde para caminar, con agua y protección solar incluso bajo sombra.'
        ],
        callout: 'Para el día de la visita, consulta el pronóstico local y los avisos municipales.'
      },
      {
        heading: 'Lluvia y superficie',
        paragraphs: [
          'Las lluvias pueden hacer resbalosos los senderos de ladrillo y motivar cierres parciales. Si el tiempo cambia, reorganiza el plan con una parada bajo techo en Cabecera.',
          'Tras el aguacero, la luz suele resultar agradable para caminar; aun así, adapta el recorrido al estado real del suelo.'
        ],
        bullets: [
          'Pronóstico del mismo día, no promedios genéricos.',
          'Agua y protección solar.',
          'Calzado con buena sujeción si hay lluvia.',
          'Margen para cambiar a un plan bajo techo.'
        ]
      },
      {
        heading: 'Elegir franja horaria',
        paragraphs: [
          'La guía del mejor momento para visitar resume sombra, luz suave y precauciones según la hora; la del final de la tarde se centra en la transición hacia la noche.',
          'Si la visita nocturna entra en el plan, recuerda que la referencia de acceso publicada no garantiza iluminación ni apertura de cada zona.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuál es el mejor mes del año?',
        a: 'No verificamos una temporada óptima; elige según el pronóstico y tu disponibilidad.'
      },
      {
        q: '¿Publican temperaturas mensuales?',
        a: 'No. Preferimos no fijar datos climáticos que varían cada año; consulta el pronóstico del día.'
      },
      {
        q: '¿Llueve todo el año?',
        a: 'No publicamos calendarios de lluvia. Revisa el pronóstico local antes de salir.'
      }
    ],
    related: ['mejor-epoca-visitar', 'visita-cuando-llueve', 'guia-de-fotografia', 'horario'],
    sources: [3, 0, 5]
  },
  {
    slug: 'atardecer-parque-san-pio',
    group: 'ciudad',
    priority: 'P2',
    keyword: 'atardecer en el parque san pio',
    intent: 'Elegir el final de la tarde como franja de visita',
    title: 'Atardecer en el Parque San Pío, Bucaramanga',
    description: 'Cómo es el final de la tarde en el Parque San Pío: luz suave, sombra y paseo, con precauciones para el paso a la noche.',
    h1: 'El final de la tarde en el Parque San Pío',
    lead: 'Es el momento que más se recomienda para caminar con luz suave y menos sol intenso. Esta página explica cómo aprovecharlo sin fijar horas.',
    sections: [
      {
        heading: 'Luz y sombras largas',
        paragraphs: [
          'A medida que baja el sol, los árboles maduros y los senderos de ladrillo ofrecen sombras largas y un paseo más cómodo que al mediodía.',
          'Es una buena franja para observar la escultura de Botero con otra luz y alargar la visita hacia un café en Cabecera. Verifica el horario del local si decides añadir esa parada.'
        ]
      },
      {
        heading: 'No publicamos una hora fija',
        paragraphs: [
          'El horario exacto de luz cambia durante el año y esta guía no publica horas de puesta de sol: consulta el pronóstico y la hora del día en tu aplicación del clima.',
          'Si el cielo está nublado o llueve, la luz cambia por completo. Lleva agua si la visita empieza antes de que baje el sol: el clima cálido no desaparece de inmediato.'
        ],
        bullets: [
          'Consulta la hora de puesta de sol del día.',
          'Lleva agua si empiezas el paseo con sol.',
          'Confirma el café o la comida antes de caminar.',
          'Adapta el plan si llueve.'
        ]
      },
      {
        heading: 'El paso a la noche',
        paragraphs: [
          'Al caer la noche, mantente en zonas iluminadas, respeta cierres y aplica las precauciones urbanas habituales. La referencia de acceso publicada no garantiza que todas las luces funcionen.',
          'Para fotografía en esa franja, la guía de fotografía; para la visita nocturna completa y sus límites, la guía de visita nocturna.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿A qué hora es el atardecer?',
        a: 'Varía según la fecha; revísalo en tu aplicación del clima el mismo día.'
      },
      {
        q: '¿Es buen momento para fotografiar?',
        a: 'La luz de la tarde suele ser más suave que la del mediodía; consulta la guía de fotografía para motivos y precauciones.'
      },
      {
        q: '¿Puedo quedarme hasta la noche?',
        a: 'La referencia publicada es de acceso de 24 horas, pero confirma avisos locales y aplica las precauciones urbanas habituales.'
      }
    ],
    related: ['guia-de-fotografia', 'visita-nocturna', 'visita-en-pareja', 'mejor-epoca-visitar'],
    sources: [3, 1, 5]
  }
];
