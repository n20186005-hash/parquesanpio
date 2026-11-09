import type { Topic } from '../topic-types';

/** P0-B · Cabecera del Llano, alrededores y cultura (09–16). */
export const ENTORNO_TOPICS: Topic[] = [
  {
    slug: 'restaurantes-cercanos',
    group: 'entorno',
    priority: 'P0',
    keyword: 'restaurantes cerca del parque san pio cabecera',
    intent: 'Decidir dónde comer alrededor del parque sin datos inventados',
    title: 'Restaurantes cerca del Parque San Pío, Cabecera',
    description: 'Dónde comer cerca del Parque San Pío en Cabecera del Llano y cómo confirmar la sucursal, el horario y el servicio antes de caminar.',
    h1: 'Comer cerca del Parque San Pío',
    lead: 'Cabecera del Llano concentra una oferta amplia de restaurantes a pocas cuadras del parque. Esta guía no recomienda negocios concretos: explica cómo elegir y qué verificar antes de salir.',
    sections: [
      {
        heading: 'La oferta está en el entorno, no dentro del parque',
        paragraphs: [
          'El portal Santander Travel menciona restaurantes y centros comerciales en el entorno del sector. El parque se describe como un espacio público de paseo; esta guía no verifica locales de comida dentro de él.',
          'Eso hace que la visita funcione bien en dos tiempos: un paseo por el parque y, después, una comida en las cuadras comerciales de Cabecera. La distancia concreta depende del punto del sector en el que te encuentres.'
        ]
      },
      {
        heading: 'Cómo elegir sin asumir sucursales',
        paragraphs: [
          'No des por hecho que una marca determinada tenga un local junto al parque. Busca el negocio en su página oficial o en su ficha pública y comprueba la dirección de la sucursal, el servicio ofrecido y el horario del día.',
          'Esta guía no publica cartas, precios, nombres de establecimientos ni horarios de terceros, porque cambian con frecuencia y no han sido verificados aquí. Si un dato es decisivo para tu plan, confírmalo directamente con el establecimiento.'
        ],
        bullets: [
          'Confirma que la sucursal existe en Cabecera y su dirección exacta.',
          'Verifica el horario de atención, en especial si es domingo o festivo.',
          'Consulta si requiere reserva o si ofrece el servicio que buscas.',
          'Contrasta precios y carta en el canal oficial del negocio.'
        ],
        callout: 'Confirma la sucursal, el servicio y el horario el mismo día antes de caminar hasta el local.'
      },
      {
        heading: 'Combinar comida y paseo',
        paragraphs: [
          'Una forma cómoda de organizar la salida es caminar por el parque a media mañana y almorzar después en el sector. Si el sol aprieta al mediodía, anticipa el paseo y deja la comida para más tarde.',
          'Para un esquema por tiempos, la guía de media jornada propone un orden flexible; para una alternativa más ligera, los cafés y dulcerías de Cabecera suelen resolver una parada corta.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay restaurantes dentro del parque?',
        a: 'Esta guía no verifica locales de comida dentro del espacio público; la oferta documentada está en el entorno de Cabecera.'
      },
      {
        q: '¿Recomiendan algún restaurante en particular?',
        a: 'No. Como guía independiente, no listamos ni verificamos establecimientos concretos, cartas ni precios.'
      },
      {
        q: '¿Abren los restaurantes los domingos?',
        a: 'Depende de cada local; confírmalo directamente con el establecimiento el mismo día.'
      }
    ],
    related: ['plan-media-jornada', 'que-hacer-alrededores', 'cafes-cercanos', 'ubicacion'],
    sources: [3, 5, 4]
  },
  {
    slug: 'cafes-cercanos',
    group: 'entorno',
    priority: 'P0',
    keyword: 'cafes cerca del parque san pio',
    intent: 'Encontrar una parada corta de café o dulce tras el paseo',
    title: 'Cafés cerca del Parque San Pío, Bucaramanga',
    description: 'Cafés y dulcerías en Cabecera del Llano para completar una visita al Parque San Pío, con recomendaciones para verificar horarios.',
    h1: 'Cafés en Cabecera, cerca del Parque San Pío',
    lead: 'Una pausa con café es la extensión natural de un paseo por San Pío. Esta página se centra en cómo organizar esa parada sin publicar listados de locales no verificados.',
    sections: [
      {
        heading: 'Qué ofrece el sector',
        paragraphs: [
          'Las cuadras comerciales de Cabecera reúnen cafés y dulcerías a distancia caminable del parque. La ventaja práctica es que la parada se resuelve sin grandes desplazamientos dentro del mismo recorrido.',
          'Elige el local en su canal oficial y confirma dirección y horario el mismo día. Esta guía no verifica establecimientos concretos, disponibilidad de mesas, cartas ni precios.'
        ]
      },
      {
        heading: 'Cuándo suele encajar una parada',
        paragraphs: [
          'El final de la tarde suele ser el momento más agradable para combinar sombra, luz suave y una parada corta. En una ciudad cálida, una pausa bajo techo también sirve para esperar a que baje el sol.',
          'Si llueve, el café funciona bien como plan de respaldo: revisa el pronóstico, busca resguardo y retoma el paseo cuando mejore el tiempo. Los senderos de ladrillo pueden quedar resbalosos.'
        ],
        bullets: [
          'Verifica el horario del local antes de caminar.',
          'Si llueve, prioriza una opción bajo techo y confirma que esté abierta.',
          'Lleva agua: el clima cálido no desaparece bajo la sombra.',
          'Combina la parada con el paseo por las calles comerciales del sector.'
        ]
      },
      {
        heading: 'Café, comida y otros planes del entorno',
        paragraphs: [
          'Una parada corta no sustituye una comida completa: si buscas almuerzo, la guía de restaurantes cercanos explica cómo confirmar la sucursal y el servicio antes de salir.',
          'Para planes más largos, la guía de qué hacer en los alrededores propone tres ritmos de visita; la de media jornada ordena paseo, comida y café en un esquema flexible.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Abren los domingos?',
        a: 'Depende de cada local; confírmalo directamente con el establecimiento.'
      },
      {
        q: '¿Hay cafés dentro del parque?',
        a: 'Esta guía no verifica locales dentro del espacio público; la oferta se describe en el entorno de Cabecera.'
      },
      {
        q: '¿Qué hago si llueve durante la visita?',
        a: 'Busca una opción bajo techo en el sector y retoma el paseo cuando mejore; confirma horarios y camina con cuidado por el ladrillo mojado.'
      }
    ],
    related: ['plan-media-jornada', 'atardecer-parque-san-pio', 'visita-cuando-llueve', 'restaurantes-cercanos'],
    sources: [3, 5, 4]
  },
  {
    slug: 'cabecera-del-llano',
    group: 'entorno',
    priority: 'P0',
    keyword: 'cabecera del llano bucaramanga',
    intent: 'Entender el sector donde está el parque',
    title: 'Cabecera del Llano, Bucaramanga: el sector del Parque San Pío',
    description: 'Qué es Cabecera del Llano y por qué es el entorno del Parque San Pío: comercio, calles caminables y servicios en Bucaramanga.',
    h1: 'Cabecera del Llano, Bucaramanga',
    lead: 'Cabecera del Llano es el sector donde se encuentra el Parque San Pío. Entender cómo es esa zona ayuda a planear la visita con realismo.',
    sections: [
      {
        heading: 'Un sector céntrico y activo',
        paragraphs: [
          'Es una zona céntrica y activa de Bucaramanga, con calles comerciales, restaurantes, cafés y servicios. Esa mezcla explica por qué el parque funciona bien como pausa dentro de un recorrido más amplio, y no como un destino aislado.',
          'El nombre se usa como referencia de sector de la ciudad. Para usos administrativos o catastrales, conviene consultar la división oficial vigente: esta guía no la determina.'
        ]
      },
      {
        heading: 'Qué resuelve caminando',
        paragraphs: [
          'Para el visitante, la ventaja práctica es que casi todo se resuelve a pie: llegar al parque, comer, tomar algo y volver. También por eso las búsquedas sobre dirección y cómo llegar suelen concentrarse en esta zona.',
          'Aun así, confirma horarios de cada negocio, el estado de los espacios públicos y cualquier cierre por obras o eventos el mismo día. Un sector bien conectado no garantiza que cada servicio esté disponible.'
        ],
        bullets: [
          'Paseo por el parque y arte público.',
          'Comida, café y comercio en las cuadras cercanas.',
          'Opciones de transporte urbano y aplicaciones de mapas.',
          'Alojamiento y servicios, sujetos a verificación individual.'
        ]
      },
      {
        heading: 'Punto de partida para otras guías',
        paragraphs: [
          'Esta página funciona como índice del entorno: desde aquí puedes pasar a las guías de restaurantes, cafés, caminata por Cabecera o alojamiento cercano.',
          'Si lo que necesitas es únicamente la referencia de dirección y el mapa, la guía de ubicación concentra esos datos; si vienes de otra zona de la ciudad, las guías de llegada explican cómo plantear el trayecto.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cabecera es un barrio o una comuna?',
        a: 'Se usa como nombre de sector de la ciudad; para usos administrativos, consulta la división oficial vigente.'
      },
      {
        q: '¿Todo se puede hacer a pie?',
        a: 'Dentro de Cabecera, sí es razonable; para otros puntos de la ciudad, consulta las opciones de transporte.'
      },
      {
        q: '¿El parque queda lejos del comercio?',
        a: 'El parque está dentro del sector comercial. No publicamos distancias exactas porque dependen del punto de partida; mídela en tu aplicación de mapas.'
      }
    ],
    related: ['ubicacion', 'restaurantes-cercanos', 'que-hacer-alrededores', 'ruta-a-pie-cabecera', 'hoteles-cerca'],
    sources: [4, 3, 5]
  },
  {
    slug: 'que-hacer-alrededores',
    group: 'entorno',
    priority: 'P0',
    keyword: 'que hacer cerca del parque san pio',
    intent: 'Elegir un plan de duración distinta alrededor del parque',
    title: 'Qué hacer cerca del Parque San Pío, Bucaramanga',
    description: 'Planes en los alrededores del Parque San Pío: combinar el paseo con comida, café, compras y una caminata por Cabecera.',
    h1: 'Qué hacer en los alrededores del Parque San Pío',
    lead: 'El parque es un buen punto de partida para una tarde completa en Cabecera. Esta página propone ritmos de visita, no itinerarios oficiales.',
    sections: [
      {
        heading: 'Tres ritmos para la misma visita',
        paragraphs: [
          'Con 30 minutos, alcanza para el paseo y la escultura. Con 90 minutos, puedes añadir un café. Con media jornada, el esquema admite parque, almuerzo y una vuelta por las calles comerciales.',
          'Son propuestas editoriales de organización, no mediciones de distancia ni garantía de disponibilidad. El orden puede invertirse según el clima y los horarios de los locales.'
        ],
        bullets: [
          '30 minutos: senderos, arbolado y arte público.',
          '90 minutos: lo anterior más una parada corta de café.',
          'Media jornada: paseo, comida y calles comerciales.',
          'Con lluvia: prioriza planes bajo techo y retoma el paseo después.'
        ]
      },
      {
        heading: 'Ajusta el plan al día',
        paragraphs: [
          'Bucaramanga tiene clima cálido; lleva agua y protección solar y evita el sol más intenso del mediodía si puedes elegir hora. Verifica horarios de cada comercio y cualquier cierre del espacio público el mismo día.',
          'Si vas con niños o con movilidad reducida, reduce el número de paradas y deja margen para descansos. Las guías específicas de familia y accesibilidad recogen esas consideraciones.'
        ]
      },
      {
        heading: 'Cómo seguir desde aquí',
        paragraphs: [
          'Para aterrizar el plan, la guía de ruta a pie por Cabecera describe un recorrido sencillo con el parque como ancla, y la de media jornada ordena las tres paradas en un esquema flexible.',
          'Si prefieres decidir primero qué comer o dónde tomar algo, las guías de restaurantes y cafés cercanos explican cómo verificar cada establecimiento sin asumir datos.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Se puede hacer todo a pie?',
        a: 'Dentro de Cabecera, sí es razonable; para otros puntos de la ciudad, consulta las opciones de transporte.'
      },
      {
        q: '¿Cuánto tiempo conviene reservar?',
        a: 'Como propuesta editorial, de 30 minutos a media jornada según cuántas paradas añadas; no es un itinerario oficial.'
      },
      {
        q: '¿Hay que reservar alguna actividad?',
        a: 'No se verificó un sistema de reservas para el espacio público; los comercios y eventos se confirman por separado.'
      }
    ],
    related: ['ruta-a-pie-cabecera', 'plan-media-jornada', 'restaurantes-cercanos', 'cafes-cercanos', 'cabecera-del-llano'],
    sources: [3, 5, 4],
    map: true
  },
  {
    slug: 'parque-vs-parroquia',
    group: 'entorno',
    priority: 'P0',
    keyword: 'parque san pio o parroquia san pio x',
    intent: 'Distinguir el parque de la parroquia del mismo nombre',
    title: 'Parque San Pío y parroquia San Pío X: no son lo mismo',
    description: 'Diferencia entre el Parque San Pío (Guillermo Sorzano González) y la parroquia San Pío X en Bucaramanga para evitar confusiones al buscar la dirección.',
    h1: 'Parque San Pío y parroquia San Pío X: destinos distintos',
    lead: 'Comparten el nombre, pero son dos lugares diferentes y se buscan por motivos distintos. Esta aclaración evita llegar al sitio equivocado.',
    sections: [
      {
        heading: 'Qué es el Parque San Pío',
        paragraphs: [
          'Esta guía trata del Parque San Pío, espacio público de Cabecera del Llano también identificado por el Área Metropolitana de Bucaramanga como Parque Guillermo Sorzano González: un parque urbano con árboles maduros, senderos de ladrillo y arte público.',
          'Su ficha en Google Maps se usa aquí como referencia de ubicación del espacio público. En ella se apoya el mapa de esta guía y las páginas sobre llegada, horarios y obras de arte.'
        ]
      },
      {
        heading: 'Qué es la parroquia San Pío X',
        paragraphs: [
          'La parroquia San Pío X es un templo y un destino religioso con su propia dirección y agenda de servicios. Se trata con respeto, pero no es el objeto de esta guía.',
          'El mapa de esta guía corresponde al parque: no verifica misas, horarios parroquiales, atención pastoral ni la ubicación del templo. Si buscas la iglesia, confirma sus datos directamente con la parroquia o con sus canales oficiales.'
        ],
        callout: 'Ante una búsqueda con «San Pío», comprueba si el resultado habla de un parque con senderos o de un templo con horarios de misa.'
      },
      {
        heading: 'Por qué aparecen mezclados en las búsquedas',
        paragraphs: [
          'La coincidencia de nombres y la cercanía de los términos «parque» y «parroquia» hacen que los resultados se mezclen con facilidad. Añadir «Bucaramanga», «Cabecera» o «Botero» a la búsqueda suele inclinar los resultados hacia el espacio público.',
          'Si un resultado menciona horarios de misas, sacramentos o atención parroquial, no es el destino que documentamos. Si menciona la escultura de Botero o los senderos de ladrillo, sí.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿El mapa de esta guía sirve para ir a misa?',
        a: 'No. Corresponde al parque; consulta por separado la ubicación y la agenda de la parroquia.'
      },
      {
        q: '¿Cuál es el nombre oficial del parque?',
        a: 'El Área Metropolitana de Bucaramanga lo identifica como Parque Guillermo Sorzano González, conocido como San Pío.'
      },
      {
        q: '¿La parroquia está dentro del parque?',
        a: 'Esta guía no verifica esa relación. Son destinos distintos y cada uno debe consultarse por separado.'
      }
    ],
    related: ['ubicacion', 'historia', 'cabecera-del-llano'],
    sources: [4, 5, 1],
    article: true
  },
  {
    slug: 'historia',
    group: 'entorno',
    priority: 'P0',
    keyword: 'historia del parque san pio guillermo sorzano',
    intent: 'Conocer el origen del nombre y las intervenciones documentadas',
    title: 'Historia del Parque San Pío (Guillermo Sorzano González), Bucaramanga',
    description: 'Origen del nombre, la llegada de la escultura de Botero en 2010, la declaratoria cultural de 2013 y las mejoras de paisajismo.',
    h1: 'Historia del Parque San Pío',
    lead: 'Detrás del nombre popular hay una denominación oficial y varias intervenciones documentadas por fuentes públicas. Esta página las ordena sin presentarlas como un estado actual garantizado.',
    sections: [
      {
        heading: 'El nombre oficial y el nombre popular',
        paragraphs: [
          'María Carolina González Páez, subdirectora de Turismo del IMCT de Bucaramanga, confirmó en su respuesta del 3 de noviembre de 2026 que el nombre oficial es Parque Guillermo Sorzano González y que Parque San Pío es la denominación de uso común.',
          'En algunas fuentes en inglés se usa Saint Pío Park. Esta guía utiliza el nombre popular junto a la denominación oficial para identificar el mismo parque.'
        ]
      },
      {
        heading: 'El parque y la expansión de Cabecera',
        paragraphs: [
          'La publicación Bucaramanga Histórica y Cultural (2012), recomendada por el IMCT, sitúa el parque en la expansión residencial de Cabecera a mediados del siglo XX. Según esa obra, Urbanas S.A. cedió los terrenos al municipio en 1951 y el parque se inauguró en 1964 en memoria del médico y exalcalde Guillermo Sorzano González.',
          'La obra vincula el nombre popular con la cercanía de la iglesia San Pío X y describe la transformación del parque por la apertura de la carrera 35 a finales de los años ochenta. Son antecedentes históricos, no una descripción garantizada de las instalaciones actuales.'
        ]
      },
      {
        heading: '2010 y 2013: la escultura y su declaratoria',
        paragraphs: [
          'En 2010 el municipio incorporó la escultura «Mujer de pie, desnuda», de Fernando Botero, según el Instituto Municipal de Cultura y Turismo (IMCT). La pieza fue declarada bien de interés cultural municipal en 2013 de acuerdo con la misma fuente.',
          'Desde entonces es un punto de referencia visual del sector y ha recibido intervenciones de conservación patrimonial documentadas por el IMCT. Esa declaratoria describe un valor cultural; no implica que la pieza esté siempre accesible sin cierres por restauración.'
        ]
      },
      {
        heading: 'Paisajismo y mejoras del espacio público',
        paragraphs: [
          'La Alcaldía de Bucaramanga reportó una intervención de paisajismo con más de 3.000 plantas ornamentales y el mejoramiento del entorno de la escultura de la mariposa donada por Mario Hernández. También documentó trabajos en senderos, iluminación y mobiliario.',
          'Son antecedentes de mantenimiento, no una certificación del estado actual de cada instalación ni un inventario de especies. Para el visitante, la lectura práctica es sencilla: el parque que se ve hoy es resultado de cuidados sucesivos y puede seguir cambiando.'
        ],
        bullets: [
          'Nombre oficial confirmado por el IMCT: Parque Guillermo Sorzano González.',
          '2010: instalación de la escultura de Botero (IMCT).',
          '2013: declaratoria de bien de interés cultural municipal (IMCT).',
          'Paisajismo: más de 3.000 plantas ornamentales y mejoras de senderos (Alcaldía).'
        ],
        callout: 'Esta guía no afilia a las entidades citadas ni presenta estos datos como un comunicado oficial.'
      }
    ],
    faqs: [
      {
        q: '¿Por qué tiene dos nombres?',
        a: 'El IMCT confirmó que el nombre oficial es Parque Guillermo Sorzano González y que Parque San Pío es el nombre de uso común.'
      },
      {
        q: '¿Cuándo llegó la escultura de Botero?',
        a: 'El IMCT documenta su instalación en 2010 y su declaratoria como bien de interés cultural municipal en 2013.'
      },
      {
        q: '¿Las 3.000 plantas siguen allí?',
        a: 'No lo verificamos. La cifra corresponde a una intervención de paisajismo reportada por la Alcaldía, no a un inventario vigente.'
      }
    ],
    related: ['escultura-botero', 'flora-y-arboles', 'escultura-mariposa', 'parque-vs-parroquia', 'eventos-y-ferias'],
    sources: [4, 1, 0, 2, 6],
    article: true
  },
  {
    slug: 'mejor-epoca-visitar',
    group: 'entorno',
    priority: 'P1',
    keyword: 'mejor hora para visitar el parque san pio',
    intent: 'Elegir la franja horaria más cómoda para la visita',
    title: 'Mejor momento para visitar el Parque San Pío',
    description: 'Cuándo conviene ir al Parque San Pío en Bucaramanga: sombra, luz suave, clima cálido y precauciones según la hora.',
    h1: 'Mejor momento para visitar el Parque San Pío',
    lead: 'Bucaramanga tiene clima cálido; la hora cambia bastante la experiencia. Esta página se centra en criterios para elegir franja horaria, no en prometer un ambiente determinado.',
    sections: [
      {
        heading: 'Mañana y final de la tarde',
        paragraphs: [
          'La mañana y el final de la tarde suelen ser más agradables por la sombra de los árboles maduros, la luz suave y el movimiento del sector, evitando el sol más intenso del mediodía.',
          'Lleva agua y protección solar aunque el parque sea sombreado. La sombra reduce la exposición directa, pero no cambia el clima cálido de la ciudad.'
        ]
      },
      {
        heading: 'El día concreto importa más que el mes',
        paragraphs: [
          'Los periodos de lluvia varían cada año y esta guía no publica temperaturas ni calendarios mensuales. Antes de salir, consulta el pronóstico local: un aguacero puede hacer resbalosos los senderos de ladrillo y motivar cierres parciales.',
          'Tampoco verificamos niveles de afluencia por día de la semana. Elige según tu disponibilidad, el clima y las condiciones del espacio público que encuentres al llegar.'
        ],
        bullets: [
          'Agua y protección solar, incluso bajo sombra.',
          'Pronóstico del día antes de salir.',
          'Calzado cómodo para senderos de ladrillo.',
          'Margen para cambiar el plan si llueve.'
        ]
      },
      {
        heading: 'Después del atardecer',
        paragraphs: [
          'De noche, aplica las precauciones habituales de cualquier espacio público urbano y respeta cierres o señalización. La referencia de acceso publicada no garantiza que todas las zonas estén iluminadas.',
          'Si te interesa esa franja, las guías de visita nocturna y del final de la tarde desarrollan la iluminación, la luz de la tarde y el paso a la noche con más detalle.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Es mejor ir entre semana?',
        a: 'No verificamos niveles de afluencia; elige según tu disponibilidad y las condiciones del día.'
      },
      {
        q: '¿Cuál es el mejor mes del año?',
        a: 'No verificamos una temporada óptima. Consulta el pronóstico y elige la franja horaria que te resulte más cómoda.'
      },
      {
        q: '¿Conviene ir al mediodía?',
        a: 'Es la franja de sol más intenso en un clima cálido. Si puedes elegir, anticipa el paseo a la mañana o déjalo para el final de la tarde.'
      }
    ],
    related: ['visita-cuando-llueve', 'clima-por-meses', 'visita-nocturna', 'seguridad-y-precauciones'],
    sources: [3, 5, 0]
  },
  {
    slug: 'transporte-publico',
    group: 'entorno',
    priority: 'P1',
    keyword: 'transporte publico para llegar al parque san pio',
    intent: 'Entender el contexto del transporte urbano sin rutas fijas',
    title: 'Transporte público en Bucaramanga para llegar a Cabecera',
    description: 'Contexto del transporte urbano de Bucaramanga y cómo usarlo para acercarse al Parque San Pío sin depender de rutas fijas.',
    h1: 'Moverse en Bucaramanga para llegar a San Pío',
    lead: 'El parque está en un sector bien conectado, pero los recorridos cambian. Esta página explica cómo usar el transporte de la ciudad sin publicar rutas, frecuencias ni tarifas.',
    sections: [
      {
        heading: 'Qué opciones existen',
        paragraphs: [
          'La ciudad cuenta con bus urbano, taxis y aplicaciones de transporte. A ellas se suma la caminata dentro de Cabecera, que suele resolver el último tramo una vez estás en el sector.',
          'Para un visitante, lo más fiable es introducir «Parque San Pío» en una aplicación de mapas o de transporte el mismo día, en lugar de memorizar una ruta o un número de parada.'
        ]
      },
      {
        heading: 'Por qué no publicamos rutas ni frecuencias',
        paragraphs: [
          'Los recorridos, las frecuencias y los paraderos pueden modificarse. Una ruta correcta el mes pasado puede no serlo hoy, y una guía independiente no tiene forma de verificar cada cambio.',
          'Tampoco publicamos tarifas: dependen del operador, del servicio y de la aplicación. Confirma cualquier precio en el canal que vayas a usar.'
        ],
        bullets: [
          'Consulta una aplicación local el día de la visita.',
          'Escribe el destino completo: «Parque San Pío».',
          'Confirma el punto de bajada con el conductor o en el mapa.',
          'No fijes el plan a una línea de bus concreta.'
        ],
        callout: 'Esta guía no publica tarifas, frecuencias ni números de ruta que puedan quedar obsoletos.'
      },
      {
        heading: 'Si vienes de fuera del centro',
        paragraphs: [
          'Desde el aeropuerto o desde otras zonas de la ciudad, suele convenir llegar primero a un punto céntrico y desde allí resolver el último tramo hacia Cabecera con una aplicación de mapas.',
          'Las guías de llegada desde el centro y desde el aeropuerto Palonegro desarrollan ese esquema; la de cómo llegar compara las cuatro formas habituales de acercarse al parque.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Qué bus debo tomar?',
        a: 'Consulta una aplicación local el día de la visita; no fijamos rutas que puedan quedar obsoletas.'
      },
      {
        q: '¿Cuánto cuesta el pasaje?',
        a: 'No publicamos tarifas; consúltalas en la aplicación o con el operador el mismo día.'
      },
      {
        q: '¿Hay una parada frente al parque?',
        a: 'Esta guía no verifica paradas específicas. Confirma el punto de bajada en el mapa antes de salir.'
      }
    ],
    related: ['como-llegar', 'desde-centro-bucaramanga', 'desde-aeropuerto-palonegro', 'ubicacion'],
    sources: [5, 3, 4],
    map: true
  }
];
