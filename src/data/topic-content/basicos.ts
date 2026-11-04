import type { Topic } from '../topic-types';

/** P0-A · Ubicación, llegada y visita (01–08). */
export const BASICOS_TOPICS: Topic[] = [
  {
    slug: 'ubicacion',
    group: 'basicos',
    priority: 'P0',
    keyword: 'parque san pio bucaramanga direccion',
    intent: 'Encontrar la dirección exacta y abrir el mapa antes de salir',
    title: 'Ubicación y dirección del Parque San Pío, Bucaramanga',
    description: 'Dónde queda el Parque San Pío en Cabecera del Llano: referencia de dirección, coordenadas y mapa para llegar sin confusiones.',
    h1: 'Dónde queda el Parque San Pío en Bucaramanga',
    lead: 'El Parque San Pío está en Cabecera del Llano, un sector céntrico y comercial de Bucaramanga, Santander. Esta página reúne los datos de ubicación que sí se pueden verificar y explica qué hacer con ellos antes de salir.',
    sections: [
      {
        heading: 'La referencia de dirección y sus límites',
        paragraphs: [
          'Google Maps lista Cra. 33 #45 como referencia del sector. Se trata de una referencia de zona, no de un número de puerta ni de una entrada exacta verificada por esta guía. Un parque urbano puede tener varios accesos y la señalización cambia con obras, eventos o mantenimiento.',
          'Por eso conviene abrir el mapa, observar las calles alrededor del punto y confirmar el acceso antes de salir. Si vas en taxi o con una aplicación de transporte, indica «Parque San Pío» y acuerda con el conductor el punto de llegada en lugar de dar por buena una puerta concreta.'
        ],
        callout: 'Esta guía no verifica portones, cierres perimetrales ni puntos de entrada específicos.'
      },
      {
        heading: 'Coordenadas, código Plus Code y mapa',
        paragraphs: [
          'El punto de referencia cartográfico es 7.1185637, −73.1104339, con código Plus Code 4V9Q+CR. Estos datos sirven para situar el parque en una aplicación de mapas y para distinguirlo de otros destinos con nombre parecido en la ciudad.',
          'Úsalos como punto de orientación, no como garantía de una entrada determinada. El mapa de esta guía corresponde al espacio público de Cabecera del Llano; no verifica la ubicación de la parroquia San Pío X ni de ningún comercio del sector.'
        ],
        bullets: [
          'Sector: Cabecera del Llano, Bucaramanga, Santander, Colombia.',
          'Referencia listada en Google Maps: Cra. 33 #45.',
          'Coordenadas de referencia: 7.1185637, −73.1104339.',
          'Código Plus Code: 4V9Q+CR.'
        ]
      },
      {
        heading: 'Un parque con varios nombres',
        paragraphs: [
          'El Área Metropolitana de Bucaramanga identifica este espacio como Parque Guillermo Sorzano González, mientras que el nombre de uso corriente es Parque San Pío. En algunas fuentes en inglés aparece como Saint Pío Park.',
          'Todos esos nombres apuntan al mismo espacio público de Cabecera. Si una búsqueda te lleva a horarios de misas, a un templo o a un establecimiento comercial, probablemente estás ante otro destino: conviene comprobar el mapa antes de desplazarte.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Es la misma dirección de la parroquia San Pío X?',
        a: 'No. El parque y la parroquia son destinos distintos; consulta cada uno por separado y no uses el mapa de esta guía para ubicar servicios religiosos.'
      },
      {
        q: '¿Cuál es la entrada exacta del parque?',
        a: 'Esta guía no verifica una entrada exacta. Cra. 33 #45 es una referencia de zona listada en Google Maps; confirma el acceso en el mapa y en la señalización del lugar el mismo día.'
      },
      {
        q: '¿Por qué aparece también como Parque Guillermo Sorzano González?',
        a: 'Es la denominación difundida por el Área Metropolitana de Bucaramanga. San Pío es el nombre popular; ambos se refieren al parque de Cabecera del Llano.'
      }
    ],
    related: ['como-llegar', 'cabecera-del-llano', 'parque-vs-parroquia', 'parqueadero'],
    sources: [5, 4, 3],
    map: true
  },
  {
    slug: 'como-llegar',
    group: 'basicos',
    priority: 'P0',
    keyword: 'como llegar al parque san pio',
    intent: 'Elegir entre caminar, taxi, bus urbano o bicicleta',
    title: 'Cómo llegar al Parque San Pío en Bucaramanga',
    description: 'Opciones para llegar al Parque San Pío: a pie, taxi o aplicación, bus urbano y bicicleta, con recomendaciones para confirmar el punto de llegada.',
    h1: 'Cómo llegar al Parque San Pío',
    lead: 'Cabecera del Llano está bien conectada dentro de Bucaramanga; la mejor opción depende de dónde empieces y de la hora. Aquí comparamos las cuatro formas habituales de acercarse sin publicar rutas que puedan quedar obsoletas.',
    sections: [
      {
        heading: 'A pie, la opción más sencilla dentro del sector',
        paragraphs: [
          'Si ya estás en Cabecera, caminar es normalmente lo más cómodo: las cuadras cercanas concentran comercio, restaurantes y cafés, y el parque funciona bien como pausa dentro de un recorrido a pie por el sector.',
          'Consulta el estado de andenes y sardineles si vas con movilidad reducida o con niños, y adapta el paso al clima cálido de la ciudad. Lleva agua y protección solar incluso si el recorrido es corto.'
        ]
      },
      {
        heading: 'Taxi, aplicación de transporte y bus urbano',
        paragraphs: [
          'En taxi o con una aplicación, busca «Parque San Pío» y confirma con el conductor el punto de llegada. Usa Cra. 33 #45 solo como referencia de zona: esta guía no verifica que corresponda a un acceso concreto.',
          'El sector cuenta con transporte público, pero las rutas, frecuencias y paraderos pueden cambiar. Lo más fiable es consultar una aplicación de transporte local el mismo día con el destino escrito, en lugar de memorizar un número de ruta.'
        ],
        bullets: [
          'Taxi o aplicación: acuerda el punto de llegada antes de bajar.',
          'Bus urbano: verifica la ruta vigente el mismo día; no publicamos números de línea.',
          'Bicicleta: circula con precaución por vías urbanas y asegura la bici únicamente en un punto permitido.',
          'Desde fuera del centro: llega primero a un punto céntrico y resuelve el último tramo con el mapa.'
        ]
      },
      {
        heading: 'Al llegar: qué conviene comprobar',
        paragraphs: [
          'Antes de iniciar el paseo, revisa la señalización del lugar y posibles cierres por mantenimiento o eventos. El mapa sitúa el parque, pero no certifica que cada zona, juego o servicio esté abierto.',
          'Si tu plan depende de un punto concreto —por ejemplo ver la escultura de Botero o encontrar un parqueadero—, resuelve esa verificación al llegar. Esta guía mantiene los datos operativos sin fijar para no dar información que pueda quedar desactualizada.'
        ],
        callout: 'Las tarifas, frecuencias y tiempos de trayecto no se publican aquí: dependen del tráfico, del día y de cada operador.'
      }
    ],
    faqs: [
      {
        q: '¿Hay una parada de bus justo en el parque?',
        a: 'Esta guía no verifica paradas específicas; consulta la ruta vigente en una aplicación local antes de salir.'
      },
      {
        q: '¿Cuánto cuesta llegar en taxi?',
        a: 'No publicamos tarifas. El valor depende del punto de partida, del tráfico y de la aplicación que uses; consúltalo en la propia aplicación.'
      },
      {
        q: '¿Se puede ir caminando desde el centro?',
        a: 'Depende de tu punto de partida y del clima. Mide la distancia en tu aplicación de mapas el mismo día y decide según las condiciones.'
      }
    ],
    related: ['transporte-publico', 'desde-centro-bucaramanga', 'desde-aeropuerto-palonegro', 'ubicacion'],
    sources: [5, 3, 4],
    map: true
  },
  {
    slug: 'parqueadero',
    group: 'basicos',
    priority: 'P0',
    keyword: 'parqueadero san pio',
    intent: 'Saber dónde estacionar y qué datos confirmar antes de entregar el carro',
    title: 'Parqueadero cerca del Parque San Pío, Bucaramanga',
    description: 'Dónde estacionar cerca del Parque San Pío: el parque no tiene parqueadero propio y conviene verificar tarifa, horario y cupo antes de llegar.',
    h1: 'Parqueadero cerca del Parque San Pío',
    lead: 'El parque es un espacio peatonal: no dispone de estacionamiento propio verificado por esta guía. Esta página explica cómo organizar la llegada en carro sin inventar operadores ni precios.',
    sections: [
      {
        heading: 'El parque no es un estacionamiento',
        paragraphs: [
          'San Pío se describe como un parque urbano de paseo, con senderos y zonas verdes. Las fuentes consultadas no documentan un parqueadero propio ni una relación con un operador concreto, por lo que esta guía no afirma que exista.',
          'Busca un estacionamiento autorizado en el entorno de Cabecera. El sector es comercial y cuenta con servicios, pero la disponibilidad, las entradas y las condiciones de cada operador cambian con frecuencia.'
        ]
      },
      {
        heading: 'Tres datos que conviene confirmar antes de entregar el carro',
        paragraphs: [
          'La verificación es sencilla y evita contratiempos: dirección de entrada, tarifa vigente y horario de atención. Añade el cupo disponible si llegas en una hora concurrida.',
          'Esta guía no confirma operadores, cupos ni precios. Tampoco publica una lista de parqueaderos «recomendados», porque no verifica establecimientos concretos y no quiere inducir a error con datos que pueden cambiar.'
        ],
        bullets: [
          'Dirección de entrada y sentido de acceso.',
          'Tarifa vigente y forma de pago.',
          'Horario de atención y hora de cierre.',
          'Cupo disponible y restricciones de estacionamiento en vía.'
        ],
        callout: 'Confirma precio, horario y cupo directamente con el operador el mismo día de la visita.'
      },
      {
        heading: 'Alternativas si prefieres no estacionar',
        paragraphs: [
          'Llegar en taxi o con una aplicación de transporte elimina por completo esta gestión y suele simplificar una visita corta. El bus urbano y la caminata son otras opciones dentro del sector.',
          'Evita dejar objetos visibles dentro del carro y respeta las restricciones de estacionamiento en vía. Si vas en bicicleta, asegúrala únicamente en un punto permitido.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto cuesta el parqueadero?',
        a: 'No publicamos tarifas: confírmalas directamente con el operador el mismo día, junto con el horario y el cupo.'
      },
      {
        q: '¿El Parque San Pío tiene parqueadero propio?',
        a: 'Esta guía no verifica parqueadero propio ni operadores cercanos. Busca un estacionamiento autorizado en el entorno de Cabecera.'
      },
      {
        q: '¿Puedo dejar el carro en la vía?',
        a: 'No lo damos por hecho. Revisa la señalización y las restricciones vigentes antes de estacionar; las condiciones pueden cambiar por obras o eventos.'
      }
    ],
    related: ['como-llegar', 'horario', 'ubicacion', 'seguridad-y-precauciones'],
    sources: [5, 3, 0],
    map: true
  },
  {
    slug: 'fotos',
    group: 'basicos',
    priority: 'P0',
    keyword: 'fotos de parque san pio',
    intent: 'Ver imágenes del parque y saber qué son y de dónde vienen',
    title: 'Fotos e ilustraciones del Parque San Pío, Bucaramanga',
    description: 'Imágenes publicadas en esta guía sobre el Parque San Pío: árboles, senderos y arte público, con indicación clara de qué es ilustración y qué no.',
    h1: 'Imágenes del Parque San Pío',
    lead: 'Esta página reúne las imágenes que la guía publica y explica de forma explícita qué representan. Incluye una ilustración geométrica original y vistas del parque y de la escultura ya presentes en el sitio.',
    sections: [
      {
        heading: 'Ilustración original de la guía',
        paragraphs: [
          'La composición geométrica de hojas y senderos que aparece en las galerías de las guías temáticas es una ilustración creada para esta guía y ofrecida bajo CC0. No es una fotografía, ni un plano del parque, ni una representación de las esculturas o de las instalaciones reales.',
          'Se usa como recurso gráfico ligero dentro de esas galerías; la portada, en cambio, abre con una fotografía de los senderos y el arbolado del parque. Su carácter abstracto se indica también en el texto alternativo y en el pie de imagen.'
        ]
      },
      {
        heading: 'Vistas del parque y de la escultura publicadas en la guía',
        paragraphs: [
          'La portada abre con una fotografía de los senderos de ladrillo y el arbolado del parque, y su galería muestra imágenes del Parque San Pío y de la escultura «Mujer de pie, desnuda», incluidas vistas de la zona verde, de la iluminación y de la pieza desde distintos ángulos. Se reproducen aquí con sus pies de imagen para que puedas identificar cada motivo.',
          'Los pies de imagen describen el contenido de forma general y no certifican el estado actual de las zonas fotografiadas. Un mantenimiento posterior, una intervención de conservación o un cierre pueden hacer que una vista no coincida con lo que encuentres el día de la visita.'
        ],
        callout: 'Esta guía no otorga ni verifica licencias sobre las fotografías; cada imagen externa está sujeta a las condiciones de su fuente.'
      },
      {
        heading: 'Si buscas fotografías actuales del lugar',
        paragraphs: [
          'Para imágenes recientes, lo más fiable es consultar las fotos de la ficha de Google Maps y las publicaciones de la Alcaldía de Bucaramanga y del IMCT. Cada fuente tiene sus propias condiciones de uso y sus propios tiempos de actualización.',
          'Si lo que buscas es tomar tus propias fotografías, la guía de fotografía reúne los motivos habituales del parque, las franjas de luz más agradables y las precauciones básicas al fotografiar obras de arte público.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Puedo usar la ilustración geométrica de la guía?',
        a: 'Es original de esta guía y se ofrece bajo CC0. Las demás imágenes del sitio no se rigen por esa cesión: revisa las condiciones de cada fuente por separado.'
      },
      {
        q: '¿Las fotos muestran el estado actual del parque?',
        a: 'No lo garantizan. Son imágenes publicadas en la guía; obras, conservación y cierres pueden cambiar lo que encuentres el día de la visita.'
      },
      {
        q: '¿Dónde veo fotos recientes del lugar?',
        a: 'En la ficha de Google Maps y en las publicaciones de la Alcaldía de Bucaramanga y del IMCT. Confirma la fecha de cada publicación.'
      }
    ],
    related: ['escultura-botero', 'guia-de-fotografia', 'atardecer-parque-san-pio', 'que-ver'],
    sources: [5, 1, 0, 2],
    gallery: true
  },
  {
    slug: 'horario',
    group: 'basicos',
    priority: 'P0',
    keyword: 'horario parque san pio abre 24 horas',
    intent: 'Saber si el parque está abierto y por qué hay que verificarlo',
    title: 'Horario y acceso al Parque San Pío, Bucaramanga',
    description: 'Qué se publica sobre el horario del Parque San Pío y por qué conviene verificar el acceso el mismo día antes de ir.',
    h1: 'Horario y acceso al Parque San Pío',
    lead: 'Al ser un parque público urbano, no funciona como un recinto con taquilla ni con horario de boletería. Esta página explica qué significa la referencia de 24 horas y qué límites tiene.',
    sections: [
      {
        heading: 'Qué publican las fuentes consultadas',
        paragraphs: [
          'Google Maps y Santander Travel publicaban acceso de 24 horas el 29 de octubre de 2026. Es una referencia del espacio público recogida en fuentes de terceros, no una declaración oficial de esta guía ni un compromiso de apertura permanente.',
          'El dato se cita con su fecha de consulta porque los horarios publicados por terceros pueden actualizarse. Si necesitas una confirmación oficial, consulta los canales de la Alcaldía de Bucaramanga o la señalización del lugar.'
        ]
      },
      {
        heading: 'Por qué «24 horas» no garantiza cada zona',
        paragraphs: [
          'Un parque abierto no implica que cada sendero, juego, mobiliario o servicio esté disponible a cualquier hora. El mantenimiento, las obras de conservación, los eventos y los cierres parciales por seguridad pueden limitar el paso a determinadas áreas.',
          'Las publicaciones municipales documentan intervenciones en senderos, iluminación y mobiliario. Son antecedentes de mantenimiento, no una certificación del estado actual de cada instalación.'
        ],
        bullets: [
          'Referencia publicada: acceso de 24 horas (consultada el 29 de octubre de 2026).',
          'No sustituye avisos municipales ni señalización en sitio.',
          'No garantiza juegos, servicios, iluminación ni zonas concretas.',
          'Eventos y obras pueden imponer cierres parciales.'
        ],
        callout: 'Confirma avisos y cierres locales el mismo día de tu visita, sobre todo si el plan depende de una zona concreta.'
      },
      {
        heading: 'Cómo organizar la visita según la hora',
        paragraphs: [
          'La mañana y el final de la tarde suelen ser más agradables por la sombra y la luz suave en el clima cálido de Bucaramanga. De noche, aplica las precauciones habituales de cualquier espacio público urbano.',
          'Si tu visita es nocturna o coincide con lluvia, conviene revisar también las guías específicas de esos escenarios, porque las condiciones de iluminación y de los senderos de ladrillo cambian la experiencia.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Abre todos los días?',
        a: 'La referencia publicada es de acceso de 24 horas, pero no sustituye los avisos locales de cierre. Confirma el mismo día.'
      },
      {
        q: '¿Hay horario de taquilla o de entrada?',
        a: 'Las fuentes describen un parque público, no un recinto con boletería. No se verificó una tarifa municipal vigente para el ingreso.'
      },
      {
        q: '¿Todas las zonas permanecen abiertas de noche?',
        a: 'No lo verificamos. Mantenimiento, eventos y señalización pueden limitar el paso; revisa las condiciones reales al llegar.'
      }
    ],
    related: ['visita-nocturna', 'accesibilidad', 'parqueadero', 'entrada-precio'],
    sources: [3, 5, 2],
    article: true
  },
  {
    slug: 'entrada-precio',
    group: 'basicos',
    priority: 'P0',
    keyword: 'entrada parque san pio tiene costo',
    intent: 'Saber si hay que pagar o reservar para entrar',
    title: 'Entrada al Parque San Pío: ¿tiene costo?',
    description: 'El Parque San Pío es un parque público; qué se sabe sobre la entrada y qué cobros conviene confirmar antes de pagar.',
    h1: 'Entrada y costo del Parque San Pío',
    lead: 'Las fuentes describen un parque público de libre acceso, no un recinto con boletería. Aquí se explica qué implica eso y qué cobros sí pueden aparecer durante una visita.',
    sections: [
      {
        heading: 'Qué se sabe — y qué no — sobre la entrada',
        paragraphs: [
          'Esta guía no verificó una tarifa municipal vigente para el ingreso, ni para actividades o servicios dentro del parque. Tampoco verificó un sistema de reservas para el espacio público.',
          'Caminar por el parque y ver el arte público no requiere reserva según la información disponible. Eso no significa que cualquier actividad que se organice en el lugar sea gratuita: un evento, un servicio o una actividad con cobro anunciado depende de quien lo realiza.'
        ]
      },
      {
        heading: 'Cobros que conviene confirmar por separado',
        paragraphs: [
          'Si encuentras un cobro anunciado, pregunta quién lo realiza, qué incluye y en qué condiciones antes de pagar. Lo mismo vale para los planes de pago en el entorno: comida, café, alojamiento y transporte son servicios de terceros.',
          'Esta guía no publica cartas, precios ni horarios de comercios, porque cambian con frecuencia y no han sido verificados aquí.'
        ],
        bullets: [
          'Actividades, ferias o servicios organizados dentro del parque.',
          'Restaurantes, cafés y dulcerías de Cabecera.',
          'Alojamiento, transporte y parqueaderos del sector.',
          'Cualquier evento con inscripción o boleta anunciada.'
        ],
        callout: 'Ante un cobro, confirma organizador, alcance y condiciones el mismo día; no lo des por oficial de la guía.'
      },
      {
        heading: 'Planes sin costo en el entorno',
        paragraphs: [
          'El paseo bajo los árboles, los senderos de ladrillo y la observación del arte público son el núcleo de una visita que no requiere entrada según las fuentes disponibles.',
          'Añadir una caminata por las calles de Cabecera permite alargar el plan sin gestiones. Aun así, no afirmamos que todos los servicios o actividades del entorno sean gratuitos.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay que reservar para entrar?',
        a: 'No se verificó un sistema de reservas para el espacio público; confirma cualquier evento o actividad por separado.'
      },
      {
        q: '¿La escultura de Botero se visita con boleta?',
        a: 'No se verificó un cobro específico para ver el arte público del parque. Si hay una intervención de conservación en curso, respeta la señalización.'
      },
      {
        q: '¿Todo alrededor del parque es gratis?',
        a: 'No. Comida, café, alojamiento, transporte y eventos pueden tener costo; consulta cada servicio directamente.'
      }
    ],
    related: ['cosas-gratis-bucaramanga', 'horario', 'restaurantes-cercanos', 'eventos-y-ferias'],
    sources: [5, 3, 0]
  },
  {
    slug: 'escultura-botero',
    group: 'basicos',
    priority: 'P0',
    keyword: 'botero san pio mujer de pie desnuda',
    intent: 'Identificar la obra de Botero, su historia y cómo ubicarla',
    title: 'La escultura de Botero en el Parque San Pío, Bucaramanga',
    description: '«Mujer de pie, desnuda» de Fernando Botero en el Parque San Pío: instalación en 2010, declaratoria cultural y cómo ubicarla.',
    h1: 'La escultura de Botero en el Parque San Pío',
    lead: 'La pieza de arte público más reconocible del parque es «Mujer de pie, desnuda», de Fernando Botero. Esta página recoge los datos documentados sobre la obra y explica cómo visitarla sin asumir que su entorno estará siempre igual.',
    sections: [
      {
        heading: 'La obra y su título',
        paragraphs: [
          'El título documentado es «Mujer de pie, desnuda». En algunas publicaciones locales aparece con denominaciones coloquiales; esta guía usa el título difundido por el Instituto Municipal de Cultura y Turismo (IMCT) y evita apodos que puedan llevar a confusión.',
          'Se trata de una pieza de arte público instalada en un parque urbano, no de una sala de exposición: se observa dentro del recorrido cotidiano del espacio, junto a los senderos y el arbolado.'
        ]
      },
      {
        heading: 'Instalación, declaratoria y conservación',
        paragraphs: [
          'Según el IMCT, la escultura fue instalada en 2010 y declarada bien de interés cultural municipal en 2013. Desde entonces es un punto de referencia visual del sector de Cabecera del Llano.',
          'La misma fuente documenta intervenciones de conservación patrimonial. Una restauración puede implicar cierres parciales, andamiaje o señalización: si la encuentras en obras, respeta las indicaciones y no intervengas la pieza.'
        ],
        bullets: [
          '2010: instalación de la escultura, según el IMCT.',
          '2013: declaratoria como bien de interés cultural municipal, según el IMCT.',
          'Conservación: intervenciones documentadas; el estado actual no se verifica aquí.',
          'Ubicación: entorno del Parque San Pío, en Cabecera del Llano, según Santander Travel.'
        ],
        callout: 'Esta guía no verifica si hay una intervención de conservación en curso el día de tu visita.'
      },
      {
        heading: 'Cómo ubicarla dentro del paseo',
        paragraphs: [
          'Sitúa el parque en el mapa y recorre el espacio con calma: la pieza se reconoce dentro del conjunto de árboles maduros y senderos de ladrillo. No hace falta un recorrido obligatorio ni una entrada especial.',
          'Si tu objetivo es fotografiarla, la mañana y el final de la tarde suelen ofrecer una luz más suave. Respeta la privacidad de los demás visitantes y la señalización si hay trabajos en curso.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Es la única obra de Botero en Bucaramanga?',
        a: 'Esta guía solo documenta la pieza de San Pío; consulta fuentes culturales locales para otras obras.'
      },
      {
        q: '¿Cuándo se instaló y qué declaratoria tiene?',
        a: 'El IMCT documenta la instalación en 2010 y la declaratoria como bien de interés cultural municipal en 2013.'
      },
      {
        q: '¿La mariposa del parque también es de Botero?',
        a: 'No. Las publicaciones municipales vinculan la escultura de la mariposa a una donación de Mario Hernández; la pieza de Botero es «Mujer de pie, desnuda».'
      }
    ],
    related: ['historia', 'guia-de-fotografia', 'escultura-mariposa', 'fotos'],
    sources: [1, 3, 0, 4],
    article: true
  },
  {
    slug: 'que-ver',
    group: 'basicos',
    priority: 'P0',
    keyword: 'que ver en el parque san pio',
    intent: 'Conocer los elementos del parque antes de decidir el paseo',
    title: 'Qué ver en el Parque San Pío, Bucaramanga',
    description: 'Qué encontrar al visitar el Parque San Pío: árboles maduros, senderos de ladrillo, arte público y la vida cotidiana de Cabecera.',
    h1: 'Qué ver en el Parque San Pío',
    lead: 'Es un parque para caminar despacio, más que una atracción con un recorrido obligatorio. Esta página describe los elementos que lo caracterizan y distingue los antecedentes documentados del estado actual.',
    sections: [
      {
        heading: 'Arbolado y senderos de ladrillo',
        paragraphs: [
          'El arbolado maduro y los senderos de ladrillo definen el paseo y aportan la sombra que hace agradable la visita en una ciudad de clima cálido. Son también el motivo principal de las fotografías del lugar.',
          'Las publicaciones municipales documentan intervenciones de paisajismo con más de 3.000 plantas ornamentales, además de mejoras en senderos, iluminación y mobiliario. Son antecedentes de mantenimiento, no una certificación del estado actual de cada elemento.'
        ]
      },
      {
        heading: 'Arte público',
        paragraphs: [
          'La escultura «Mujer de pie, desnuda», de Fernando Botero, es la pieza más reconocible. El IMCT documenta su instalación en 2010 y su declaratoria como bien de interés cultural municipal en 2013.',
          'La Alcaldía también reportó el mejoramiento del entorno de la escultura de la mariposa donada por Mario Hernández. Esta guía no verifica especies vegetales, ni el estado de las piezas, ni la disponibilidad de cada zona.'
        ],
        bullets: [
          'Senderos de ladrillo entre árboles maduros.',
          'Escultura de Botero y su declaratoria cultural.',
          'Escultura de la mariposa citada en publicaciones municipales.',
          'Comercio, restaurantes y cafés en las cuadras cercanas de Cabecera.'
        ]
      },
      {
        heading: 'Un parque dentro de un sector activo',
        paragraphs: [
          'Parte del interés de San Pío está en su contexto: es una pausa verde dentro de un sector comercial y caminable, no un destino aislado. Por eso funciona bien combinado con una comida, un café o una vuelta por las calles cercanas.',
          'Como propuesta editorial, 45–90 minutos bastan para un paseo pausado; adapta el tiempo a las zonas abiertas, al clima y a tu movilidad. No es una duración oficial ni una garantía de disponibilidad de obras o servicios.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo alcanza para verlo?',
        a: 'Como propuesta editorial, 45–90 minutos para un paseo pausado; no es una duración oficial.'
      },
      {
        q: '¿Hay un recorrido obligatorio o señalizado?',
        a: 'Esta guía no documenta un itinerario oficial. Puedes recorrer el parque con libertad respetando cierres y señalización.'
      },
      {
        q: '¿Los juegos y el mobiliario están en buen estado?',
        a: 'Las publicaciones municipales documentan mejoras, pero no verificamos el estado actual de cada elemento: confírmalo en sitio.'
      }
    ],
    related: ['flora-y-arboles', 'escultura-mariposa', 'escultura-botero', 'fotos', 'visita-en-familia'],
    sources: [0, 1, 2, 3]
  }
];
