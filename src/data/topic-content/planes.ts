import type { Topic } from '../topic-types';

/** P1 · Rutas, tipos de visita y precauciones (17–26). */
export const PLANES_TOPICS: Topic[] = [
  {
    slug: 'ruta-a-pie-cabecera',
    group: 'planes',
    priority: 'P1',
    keyword: 'ruta a pie cabecera del llano parque san pio',
    intent: 'Organizar una caminata corta por el sector',
    title: 'Ruta a pie por Cabecera del Llano desde el Parque San Pío',
    description: 'Propuesta de caminata por Cabecera tomando el Parque San Pío como punto de partida, con recomendaciones de ritmo y verificación.',
    h1: 'Caminata por Cabecera desde el Parque San Pío',
    lead: 'Una ruta sencilla, pensada para hacerse a pie y ajustada al ritmo de cada visitante. Es una propuesta editorial de recorrido, no una ruta oficial señalizada.',
    sections: [
      {
        heading: 'El parque como punto de anclaje',
        paragraphs: [
          'Empieza por los senderos de ladrillo y la zona del arte público: es la parte que no depende de horarios de terceros y permite decidir sobre la marcha cuánto tiempo quedarse.',
          'Después, sal hacia las cuadras comerciales de Cabecera. El contraste entre el arbolado y las calles activas es justamente lo que hace cómodo este recorrido corto.'
        ],
        bullets: [
          'Inicio: senderos, árboles maduros y la escultura de Botero.',
          'Continuación: calles comerciales del sector.',
          'Cierre: una parada de café o comida, previa verificación del local.'
        ]
      },
      {
        heading: 'Ritmo, clima y superficie',
        paragraphs: [
          'Adapta el paso al sol y a tu movilidad; lleva agua y calzado cómodo. En clima cálido, la mañana y el final de la tarde suelen resultar más agradables que el mediodía.',
          'Esta guía no mide la distancia ni fija una duración oficial del recorrido. Como orientación, el paseo por el parque suele plantearse en 45–90 minutos, y el resto depende de cuántas paradas añadas.'
        ],
        callout: 'Confirma el estado de andenes y accesos, y respeta cualquier cierre por mantenimiento o eventos.'
      },
      {
        heading: 'Variantes según el día',
        paragraphs: [
          'Si llueve, acorta la caminata y busca una parada bajo techo; el ladrillo mojado puede ser resbaloso. Si vas con niños, reduce el número de paradas y deja margen para descansos.',
          'Si prefieres un esquema con tiempos, la guía de media jornada ordena paseo, comida y café; si lo que buscas es entender el sector, la guía de Cabecera del Llano ofrece el contexto.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Cuánto dura la caminata?',
        a: 'No fijamos una duración oficial; como orientación, el paseo por el parque suele plantearse en 45–90 minutos.'
      },
      {
        q: '¿La ruta está señalizada?',
        a: 'No. Es una propuesta editorial de recorrido; orientarte con el mapa y respeta la señalización del lugar.'
      },
      {
        q: '¿Es adecuada para silla de ruedas?',
        a: 'No verificamos pendientes ni anchos de los senderos. Consulta la guía de accesibilidad y valora las condiciones reales al llegar.'
      }
    ],
    related: ['cabecera-del-llano', 'que-hacer-alrededores', 'como-llegar', 'plan-media-jornada'],
    sources: [0, 2, 5],
    map: true
  },
  {
    slug: 'plan-media-jornada',
    group: 'planes',
    priority: 'P1',
    keyword: 'plan media jornada parque san pio cabecera',
    intent: 'Convertir una visita corta en una salida de media jornada',
    title: 'Plan de media jornada en el Parque San Pío y Cabecera',
    description: 'Itinerario orientativo de media jornada: paseo por el Parque San Pío, almuerzo y café en Cabecera del Llano.',
    h1: 'Media jornada alrededor del Parque San Pío',
    lead: 'Un esquema flexible para convertir una visita corta en una salida completa. Los tiempos son propuestas editoriales, no duraciones oficiales ni reservas.',
    sections: [
      {
        heading: 'Tres pasos en un orden flexible',
        paragraphs: [
          'Primero, 45–90 minutos de paseo pausado entre árboles, senderos y la escultura de Botero. Segundo, el almuerzo en el sector, eligiendo el restaurante y confirmando sucursal, servicio y horario antes de caminar.',
          'Tercero, un café o una vuelta por las calles comerciales. El orden puede invertirse según el clima: si el sol aprieta al mediodía, anticipa el paseo a la mañana.'
        ],
        bullets: [
          'Parque: paseo sin prisa y arte público.',
          'Comida: verifica el local concreto antes de desplazarte.',
          'Cierre: café o calles comerciales de Cabecera.'
        ]
      },
      {
        heading: 'Lo que este plan no garantiza',
        paragraphs: [
          'No hay reservas ni horarios garantizados por esta guía, y no verificamos que cada zona del parque esté abierta. Mantenimiento, eventos y cierres pueden alterar el recorrido.',
          'Verifica cada paso el mismo día: el estado del espacio público, el horario del restaurante y el pronóstico. Un plan con pocas gestiones sigue necesitando esa comprobación mínima.'
        ],
        callout: 'Confirmar el mismo día evita depender de datos que cambian con frecuencia.'
      },
      {
        heading: 'Adaptaciones',
        paragraphs: [
          'Con niños, acorta el paseo y añade descansos; la guía de visita en familia recoge agua, protección solar y supervisión. Si llueve, cambia a una opción bajo techo y retoma el parque cuando mejore.',
          'Si te alojas en Cabecera, este esquema puede repartirse entre la mañana y la tarde; la guía de alojamiento explica qué verificar antes de reservar.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Sirve para ir con niños?',
        a: 'Sí, ajustando tiempos y descansos; consulta la guía de visita en familia.'
      },
      {
        q: '¿Hay que reservar el almuerzo?',
        a: 'Depende del establecimiento. Confírmalo directamente con el local; esta guía no gestiona reservas.'
      },
      {
        q: '¿Cuántas horas son media jornada?',
        a: 'No fijamos una duración oficial; el esquema admite desde un paseo de 90 minutos hasta una salida más larga según las paradas.'
      }
    ],
    related: ['restaurantes-cercanos', 'cafes-cercanos', 'ruta-a-pie-cabecera', 'visita-en-familia', 'que-hacer-alrededores'],
    sources: [3, 0, 5]
  },
  {
    slug: 'visita-en-pareja',
    group: 'planes',
    priority: 'P1',
    keyword: 'parque san pio en pareja',
    intent: 'Plantear una salida tranquila de dos personas',
    title: 'Visitar el Parque San Pío en pareja, Bucaramanga',
    description: 'Cómo plantear una visita tranquila al Parque San Pío en pareja: paseo, luz de tarde y una parada en Cabecera.',
    h1: 'Una visita en pareja al Parque San Pío',
    lead: 'Es un plan sencillo, sin entradas ni reservas verificadas, que se acomoda al ritmo de cada quien. Esta página propone una forma de organizarlo sin prometer un ambiente determinado.',
    sections: [
      {
        heading: 'Un plan de pocas gestiones',
        paragraphs: [
          'Un paseo sin prisa bajo los árboles, detenerse ante la escultura de Botero y caminar hasta un café de Cabecera forman una salida que no exige reservas del espacio público.',
          'La ventaja es que casi todo se decide sobre la marcha. Si el día cambia, se acorta el paseo o se adelanta la parada sin reorganizar traslados complicados.'
        ]
      },
      {
        heading: 'Luz de tarde y clima',
        paragraphs: [
          'El final de la tarde suele ofrecer luz más suave y menos sol intenso, según el clima cálido de la ciudad. Es también una franja cómoda para alargar la visita hacia un café.',
          'Evitamos prometer un ambiente determinado: la experiencia depende del día, del mantenimiento de las zonas y de la afluencia. De noche, aplica las precauciones habituales de un espacio público urbano.'
        ],
        bullets: [
          'Paseo corto por senderos y arbolado.',
          'Parada ante el arte público.',
          'Café o comida en Cabecera, con horario verificado.',
          'Agua y protección solar si la salida es de día.'
        ]
      },
      {
        heading: 'Si quieres alargar la salida',
        paragraphs: [
          'Para un esquema con tres pasos, la guía de media jornada ordena paseo, almuerzo y café. Para centrar la salida en la luz, la guía del final de la tarde describe esa franja.',
          'Si el plan se mueve a la noche, revisa la guía de visita nocturna: la referencia de acceso publicada no garantiza iluminación ni apertura de cada zona.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Es un plan que requiere reserva?',
        a: 'No se verificó un sistema de reservas para el parque; si añades un restaurante, consulta ese negocio.'
      },
      {
        q: '¿Cuál es la mejor hora?',
        a: 'El final de la tarde suele ser agradable por la luz suave, pero depende del clima del día; consulta el pronóstico.'
      },
      {
        q: '¿Es recomendable ir de noche?',
        a: 'No lo garantizamos. Aplica las precauciones urbanas habituales y revisa la guía de visita nocturna.'
      }
    ],
    related: ['visita-nocturna', 'cafes-cercanos', 'atardecer-parque-san-pio', 'que-hacer-alrededores'],
    sources: [3, 5, 1]
  },
  {
    slug: 'visita-en-familia',
    group: 'planes',
    priority: 'P1',
    keyword: 'parque san pio en familia con ninos',
    intent: 'Preparar una salida con menores sin prometer instalaciones',
    title: 'Parque San Pío en familia y con niños, Bucaramanga',
    description: 'Consejos para visitar el Parque San Pío con niños: sombra, agua, precauciones y cómo combinar la salida con comida en Cabecera.',
    h1: 'Visitar el Parque San Pío en familia',
    lead: 'Un parque urbano sombreado puede ser una pausa cómoda para una salida familiar. Esta página se centra en lo que sí depende de quien organiza la visita.',
    sections: [
      {
        heading: 'Un paseo corto y adaptable',
        paragraphs: [
          'El arbolado maduro y los senderos permiten un recorrido breve que se ajusta con facilidad: se puede acortar, repetir o interrumpir para descansar.',
          'Lleva agua, protección solar y prevé pausas, porque Bucaramanga es cálida incluso a la sombra. Mantén la supervisión de los menores en todo momento y respeta cierres, obras y señalización.'
        ],
        bullets: [
          'Agua y protección solar para todos.',
          'Calzado cómodo para senderos de ladrillo.',
          'Descansos previstos y horarios flexibles.',
          'Supervisión constante de los menores.'
        ]
      },
      {
        heading: 'Lo que esta guía no certifica',
        paragraphs: [
          'Las publicaciones municipales documentan mobiliario y mejoras en senderos e iluminación, pero no verificamos el estado actual de juegos, bancas ni zonas específicas. Tampoco emitimos garantías de seguridad.',
          'Si una zona está cerrada por conservación o mantenimiento, simplemente se omite. Comprobar el estado real al llegar forma parte del plan con niños.'
        ],
        callout: 'Confirma en sitio el estado de juegos y mobiliario antes de dar por hecho que estarán disponibles.'
      },
      {
        heading: 'Completar la salida',
        paragraphs: [
          'El entorno de Cabecera ofrece opciones de comida; confirma horarios y condiciones de cada local antes de ir. Un plan con pocos traslados funciona mejor que encadenar demasiadas paradas.',
          'La guía de Bucaramanga en familia amplía este esquema con lluvia, alojamiento y planes sin costo; la de precauciones resume las recomendaciones generales de un espacio público urbano.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay juegos infantiles en buen estado?',
        a: 'Las publicaciones municipales documentan mobiliario y mejoras, pero no verificamos su estado actual: confírmalo en sitio.'
      },
      {
        q: '¿Es un plan seguro para niños?',
        a: 'No ofrecemos garantías de seguridad. Aplica supervisión constante y las precauciones habituales de un espacio público.'
      },
      {
        q: '¿Qué hago si llueve?',
        a: 'Busca un plan bajo techo en Cabecera y retoma el paseo cuando mejore; el ladrillo mojado puede ser resbaloso.'
      }
    ],
    related: ['restaurantes-cercanos', 'seguridad-y-precauciones', 'guia-bucaramanga-familiar', 'que-ver'],
    sources: [0, 2, 3]
  },
  {
    slug: 'guia-de-fotografia',
    group: 'planes',
    priority: 'P1',
    keyword: 'fotografia parque san pio botero',
    intent: 'Elegir motivos, luz y precauciones para fotografiar',
    title: 'Guía de fotografía del Parque San Pío, Bucaramanga',
    description: 'Dónde y cuándo fotografiar el Parque San Pío: la escultura de Botero, los senderos de ladrillo, los árboles y la luz de la tarde.',
    h1: 'Fotografiar el Parque San Pío',
    lead: 'Es un parque de luz filtrada, líneas de ladrillo y una pieza de bronce muy reconocible. Esta página propone motivos y criterios de luz, no resultados garantizados.',
    sections: [
      {
        heading: 'Tres motivos habituales',
        paragraphs: [
          'La escultura «Mujer de pie, desnuda» —instalada en 2010 y bien de interés cultural municipal desde 2013 según el IMCT—, los senderos de ladrillo entre árboles maduros y el ambiente cotidiano de Cabecera.',
          'Alternar planos generales del arbolado con detalles de la pieza ayuda a contar el lugar sin depender de un único encuadre. Si hay obras de conservación, la señalización manda sobre la foto.'
        ],
        bullets: [
          'Arte público: la escultura y su entorno.',
          'Senderos de ladrillo y sombras de los árboles.',
          'Vida del sector: calles comerciales cercanas.'
        ]
      },
      {
        heading: 'Luz y hora',
        paragraphs: [
          'La mañana y el final de la tarde suelen dar una luz más suave que el mediodía. La hora exacta de la puesta de sol cambia durante el año, así que conviene consultar el pronóstico y la hora del día en una aplicación del clima.',
          'Tras la lluvia, la luz puede resultar agradable, pero el ladrillo mojado exige cuidado al caminar con equipo. Lleva agua y protección solar si la sesión es de día.'
        ]
      },
      {
        heading: 'Privacidad, permisos y equipo',
        paragraphs: [
          'Si vas a fotografiar personas, respeta su privacidad. Si hay intervenciones de conservación en curso, no invadas las zonas señalizadas.',
          'Esta guía no verifica permisos para trípodes, drones ni equipo especial: consulta la normativa local y la señalización antes de usarlo. Las imágenes propias de esta guía son ilustraciones originales (CC0), no fotografías del lugar.'
        ],
        callout: 'Consulta la normativa vigente y la señalización antes de usar trípodes, drones u otro equipo especial.'
      }
    ],
    faqs: [
      {
        q: '¿Se pueden usar trípodes o drones?',
        a: 'Esta guía no verifica permisos; consulta la normativa local y la señalización antes de usar equipo especial.'
      },
      {
        q: '¿A qué hora hay mejor luz?',
        a: 'La mañana y el final de la tarde suelen ser más suaves; la hora exacta varía según la fecha, revísala el mismo día.'
      },
      {
        q: '¿Las fotos de esta guía son del parque?',
        a: 'La portada abre con una fotografía del parque. La ilustración geométrica es original y no es una fotografía; aparece en las galerías de las guías temáticas. Las vistas del parque y de la escultura se publican con sus pies de imagen.'
      }
    ],
    related: ['escultura-botero', 'fotos', 'atardecer-parque-san-pio', 'flora-y-arboles'],
    sources: [1, 0, 3]
  },
  {
    slug: 'accesibilidad',
    group: 'planes',
    priority: 'P1',
    keyword: 'accesibilidad parque san pio silla de ruedas',
    intent: 'Conocer los límites de la información sobre movilidad reducida',
    title: 'Accesibilidad en el Parque San Pío, Bucaramanga',
    description: 'Qué tener en cuenta para visitar el Parque San Pío con movilidad reducida o silla de ruedas, sin afirmar certificaciones.',
    h1: 'Accesibilidad en el Parque San Pío',
    lead: 'Es un parque urbano con senderos de ladrillo; conviene revisar las condiciones reales antes de ir. Esta página dice con claridad qué no hemos verificado.',
    sections: [
      {
        heading: 'Qué se documenta y qué no',
        paragraphs: [
          'Las publicaciones municipales documentan intervenciones en senderos, iluminación y mobiliario. Esos registros son antecedentes de mantenimiento, no una descripción de pendientes, anchos o desniveles.',
          'Esta guía no verifica rampas, sardineles de los andenes, anchos de sendero ni el estado actual de cada tramo. Por eso no afirmamos que el recorrido sea accesible en su totalidad ni que cuente con alguna certificación.'
        ],
        bullets: [
          'No verificamos pendientes ni desniveles.',
          'No verificamos anchos de senderos ni sardineles.',
          'No verificamos rampas ni baños adaptados.',
          'No verificamos el estado actual del mobiliario.'
        ],
        callout: 'Sin una verificación en sitio, no presentamos el parque como «totalmente accesible».'
      },
      {
        heading: 'Recomendaciones prácticas',
        paragraphs: [
          'Consulta avisos y señalización local antes de salir, llega por el punto de acceso que mejor se adapte a tu movilidad y valora ir acompañado si el suelo está húmedo.',
          'Para necesidades específicas, pregunta directamente a las autoridades del espacio público. Ellas pueden informar sobre cierres u obras vigentes, que cambian con más frecuencia que cualquier guía.'
        ]
      },
      {
        heading: 'Cómo encaja con el resto del plan',
        paragraphs: [
          'Si la visita incluye calles comerciales de Cabecera, conviene comprobar también el estado de andenes y accesos de ese recorrido, no solo el interior del parque.',
          'Para una propuesta de paseo con tiempos flexibles, revisa la ruta a pie por Cabecera; para dudas sobre horarios y cierres, la guía de horario y acceso.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay rampas verificadas?',
        a: 'No las verificamos; confirma en sitio o con la administración del espacio público.'
      },
      {
        q: '¿El parque es totalmente accesible?',
        a: 'No lo afirmamos. No verificamos pendientes, anchos, rampas ni estado actual de cada tramo.'
      },
      {
        q: '¿A quién consulto por cierres u obras?',
        a: 'A los canales oficiales de la Alcaldía o a la señalización del lugar el mismo día de la visita.'
      }
    ],
    related: ['ubicacion', 'horario', 'ruta-a-pie-cabecera', 'como-llegar'],
    sources: [2, 0, 5],
    map: true
  },
  {
    slug: 'visita-cuando-llueve',
    group: 'planes',
    priority: 'P1',
    keyword: 'parque san pio con lluvia que hacer',
    intent: 'Reorganizar el plan cuando llueve',
    title: 'Visitar el Parque San Pío con lluvia: alternativas',
    description: 'Qué hacer si llueve durante tu visita al Parque San Pío y cómo reorganizar el plan con opciones bajo techo en Cabecera.',
    h1: 'Si llueve en tu visita a San Pío',
    lead: 'En clima cálido, un aguacero cambia el plan sin arruinarlo. Esta página propone una alternativa sencilla y señala los límites de lo que se puede afirmar.',
    sections: [
      {
        heading: 'Antes de salir',
        paragraphs: [
          'Los periodos de lluvia varían cada año; revisa el pronóstico antes de salir. Esta guía no publica calendarios de lluvia por mes ni temperaturas mensuales.',
          'Si el pronóstico es incierto, adelanta el paseo a la mañana y deja margen para cambiar de plan. Lleva calzado con buena sujeción: los senderos de ladrillo pueden quedar resbalosos.'
        ]
      },
      {
        heading: 'Si el agua llega durante el paseo',
        paragraphs: [
          'Camina con cuidado, busca resguardo y reduce el recorrido. No hay garantía de que todas las zonas permanezcan abiertas bajo lluvia o durante trabajos de mantenimiento.',
          'Como plan de respaldo, el entorno de Cabecera cuenta con cafés y centros comerciales; confirma horarios y acceso de cada local. Retoma el parque cuando mejore el tiempo.'
        ],
        bullets: [
          'Prioriza superficies firmes y evita el ladrillo mojado.',
          'Busca una parada bajo techo y verifica que esté abierta.',
          'Protege el equipo electrónico y la cámara.',
          'Vuelve al paseo cuando el suelo se haya secado.'
        ],
        callout: 'No verificamos una regla de cierre por lluvia; respeta los avisos y cierres que encuentres en sitio.'
      },
      {
        heading: 'Después de la lluvia',
        paragraphs: [
          'La luz tras un aguacero suele ser agradable para caminar y para fotografiar los senderos, siempre que el suelo no suponga un riesgo. La guía de fotografía recoge motivos y precauciones.',
          'Si viajas con niños, valora acortar la salida y consultar la guía de Bucaramanga en familia, que incluye el cambio a planes bajo techo.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Se cierra el parque cuando llueve?',
        a: 'No verificamos una regla de cierre por lluvia; respeta los avisos y cierres que encuentres en sitio.'
      },
      {
        q: '¿Qué alternativas hay bajo techo?',
        a: 'El entorno de Cabecera cuenta con cafés y centros comerciales; confirma horarios y acceso de cada local el mismo día.'
      },
      {
        q: '¿Los senderos son peligrosos mojados?',
        a: 'El ladrillo puede quedar resbaloso; camina con cuidado y adapta el recorrido a las condiciones reales.'
      }
    ],
    related: ['mejor-epoca-visitar', 'cafes-cercanos', 'clima-por-meses', 'que-hacer-alrededores'],
    sources: [0, 3, 5]
  },
  {
    slug: 'seguridad-y-precauciones',
    group: 'planes',
    priority: 'P1',
    keyword: 'seguridad parque san pio precauciones',
    intent: 'Aplicar precauciones urbanas sin recibir garantías falsas',
    title: 'Seguridad y precauciones al visitar el Parque San Pío',
    description: 'Recomendaciones generales para una visita tranquila al Parque San Pío, sin prometer garantías de seguridad.',
    h1: 'Precauciones al visitar el Parque San Pío',
    lead: 'Se aplican las mismas precauciones de cualquier espacio público urbano. Esta guía no evalúa la vigilancia del lugar ni ofrece garantías.',
    sections: [
      {
        heading: 'Precauciones generales',
        paragraphs: [
          'Cuida tus pertenencias, no dejes objetos visibles dentro del vehículo, mantente en zonas iluminadas y concurridas si vas de noche y respeta cierres, obras y señalización.',
          'Si vas con menores, refuerza la supervisión. Si el suelo está húmedo, camina con cuidado por los senderos de ladrillo.'
        ],
        bullets: [
          'Pertenencias a la vista y siempre contigo.',
          'Objetos fuera de la vista dentro del carro.',
          'Zonas iluminadas y con movimiento de noche.',
          'Respeto a cierres, obras y señalización.',
          'Supervisión de menores durante toda la visita.'
        ]
      },
      {
        heading: 'Qué no puede afirmar esta guía',
        paragraphs: [
          'Esta guía no ofrece garantías de seguridad, no evalúa la vigilancia del lugar y no publica estadísticas. Las condiciones cambian según la hora y el día.',
          'Ante cualquier situación, sigue las indicaciones de las autoridades locales y consulta avisos municipales antes de salir. Para información oficial, acude a los canales de la Alcaldía o de la Policía Nacional.'
        ],
        callout: 'Contenido orientativo, no información oficial ni garantía de seguridad.'
      },
      {
        heading: 'Relación con otras guías',
        paragraphs: [
          'La visita nocturna tiene consideraciones propias de iluminación y cierres; la guía correspondiente las desarrolla. La llegada y el parqueadero también tienen recomendaciones específicas.',
          'Si el plan es familiar, combina estas precauciones con la guía de visita en familia, que añade descansos, agua y protección solar.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Es seguro ir de noche?',
        a: 'No lo garantizamos; aplica precauciones urbanas habituales y consulta la guía de visita nocturna.'
      },
      {
        q: '¿Hay vigilancia en el parque?',
        a: 'Esta guía no evalúa la vigilancia del lugar. Ante cualquier situación, sigue las indicaciones de las autoridades.'
      },
      {
        q: '¿Dónde consulto avisos oficiales?',
        a: 'En los canales de la Alcaldía de Bucaramanga y en la señalización del lugar el mismo día.'
      }
    ],
    related: ['visita-nocturna', 'visita-en-familia', 'como-llegar', 'parqueadero'],
    sources: [5, 2, 3]
  },
  {
    slug: 'visita-nocturna',
    group: 'planes',
    priority: 'P1',
    keyword: 'parque san pio de noche iluminacion',
    intent: 'Saber qué esperar de una visita después del atardecer',
    title: 'Visitar el Parque San Pío de noche, Bucaramanga',
    description: 'Qué se publica sobre el acceso nocturno al Parque San Pío, la iluminación y las precauciones para una visita después del atardecer.',
    h1: 'El Parque San Pío de noche',
    lead: 'La referencia de acceso es amplia, pero la experiencia nocturna depende de las condiciones del día. Esta página separa los datos publicados de las garantías.',
    sections: [
      {
        heading: 'Acceso publicado y sus límites',
        paragraphs: [
          'Google Maps y Santander Travel publicaban acceso de 24 horas el 29 de octubre de 2026. Esa referencia describe el espacio público y no garantiza la apertura de cada zona ni el funcionamiento de todas las luces.',
          'Mantenimiento, eventos y obras pueden imponer cierres parciales. Confirma avisos locales el mismo día si tu plan es específicamente nocturno.'
        ]
      },
      {
        heading: 'Iluminación: antecedentes, no certificación',
        paragraphs: [
          'Las publicaciones municipales documentan intervenciones de iluminación como antecedente de mantenimiento. No son una certificación del estado actual de cada luminaria ni de cada sendero.',
          'Para una visita nocturna, prioriza las zonas iluminadas y con movimiento, ve acompañado si te resulta más cómodo y respeta la señalización.'
        ],
        bullets: [
          'Referencia de 24 horas consultada el 29 de octubre de 2026.',
          'Iluminación: intervenciones documentadas, estado actual no verificado.',
          'Cierres por eventos u obras: confirmar el mismo día.',
          'Precauciones urbanas habituales durante toda la visita.'
        ]
      },
      {
        heading: 'Del atardecer a la noche',
        paragraphs: [
          'El final de la tarde suele ser la transición más cómoda: luz suave y menos sol intenso. La guía del atardecer describe esa franja y la hora de puesta de sol, que varía según la fecha.',
          'Si decides quedarte después, revisa también las precauciones generales y la guía del mejor momento para visitar, que resume clima y franjas horarias.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Todas las zonas están iluminadas?',
        a: 'No lo verificamos; atento a la señalización y a las condiciones reales al llegar.'
      },
      {
        q: '¿Se puede entrar de noche?',
        a: 'La referencia publicada es de acceso de 24 horas, pero no sustituye avisos locales de cierre ni garantiza cada zona.'
      },
      {
        q: '¿Es recomendable ir solo?',
        a: 'No emitimos recomendaciones de seguridad; aplica las precauciones urbanas habituales y decide según las condiciones del día.'
      }
    ],
    related: ['horario', 'seguridad-y-precauciones', 'mejor-epoca-visitar', 'atardecer-parque-san-pio'],
    sources: [3, 2, 5],
    article: true
  },
  {
    slug: 'eventos-y-ferias',
    group: 'planes',
    priority: 'P1',
    keyword: 'eventos ferias parque san pio feria al parque',
    intent: 'Saber si hay programación sin inventar un calendario',
    title: 'Eventos y ferias en el Parque San Pío, Bucaramanga',
    description: 'Qué se ha publicado sobre ferias y actividades en el Parque San Pío y por qué las fechas deben confirmarse con fuentes oficiales.',
    h1: 'Eventos y ferias en el Parque San Pío',
    lead: 'El parque ha sido escenario de actividades culturales y ferias ciudadanas. Esta página explica qué se documentó y por qué no publicamos un calendario.',
    sections: [
      {
        heading: 'Antecedentes documentados',
        paragraphs: [
          'El Área Metropolitana de Bucaramanga ha difundido iniciativas como la «Feria al Parque», con propuestas de arte y creatividad a partir del reciclaje.',
          'Son antecedentes informativos, no un calendario vigente. Una convocatoria pasada no permite afirmar que la actividad se repita en una fecha concreta.'
        ]
      },
      {
        heading: 'Por qué no hay fechas aquí',
        paragraphs: [
          'Esta guía no publica fechas, horarios, programación ni condiciones de ingreso de eventos: cambian con cada convocatoria y dependen de los organizadores.',
          'Antes de asistir, consulta los canales oficiales de la Alcaldía, el IMCT o el Área Metropolitana de Bucaramanga y confirma si habrá cierres parciales del espacio público ese día.'
        ],
        bullets: [
          'Consulta la convocatoria vigente en canales oficiales.',
          'Confirma fecha, hora y lugar exactos.',
          'Pregunta por condiciones de ingreso, si las hay.',
          'Verifica posibles cierres parciales del parque.'
        ],
        callout: 'Un evento puede modificar el acceso habitual: revisa avisos locales el mismo día.'
      },
      {
        heading: 'Si el evento coincide con tu visita',
        paragraphs: [
          'Un evento puede añadir actividad al parque, pero también limitar el paso a determinadas zonas. Respeta la señalización y adapta el paseo a las áreas abiertas.',
          'Para el contexto histórico del espacio y de sus obras, la guía de historia reúne las intervenciones documentadas; para la referencia de horarios, la guía de horario y acceso.'
        ]
      }
    ],
    faqs: [
      {
        q: '¿Hay eventos este fin de semana?',
        a: 'No verificamos programación vigente; revisa los canales oficiales el mismo día.'
      },
      {
        q: '¿La Feria al Parque se celebra cada año?',
        a: 'No lo afirmamos. Solo documentamos que el AMB ha difundido esa iniciativa como antecedente informativo.'
      },
      {
        q: '¿Los eventos tienen costo?',
        a: 'No publicamos condiciones de ingreso; confírmalas con el organizador antes de asistir.'
      }
    ],
    related: ['historia', 'cabecera-del-llano', 'horario', 'ubicacion'],
    sources: [4, 2, 3],
    article: true
  }
];
