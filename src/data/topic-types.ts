/**
 * Shared types and site-wide constants for the independent topic guides.
 * All visible copy is Spanish (es-CO). No operating data is invented here.
 */

export type TopicGroupId = 'basicos' | 'entorno' | 'planes' | 'ciudad';

export interface TopicSection {
  /** H2 heading, unique within the page. */
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Short highlighted note rendered as a callout. */
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  group: TopicGroupId;
  priority: 'P0' | 'P1' | 'P2';
  /** Primary search term this page answers. Used for the editorial index. */
  keyword: string;
  /** Search intent in plain language, for the editorial index. */
  intent: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  /** Slugs of related published guides. */
  related: string[];
  /** Indexes into SOURCES. */
  sources: number[];
  /** Emit Article structured data for historical / cultural explainers. */
  article?: boolean;
  /** Include the map and arrival data block. */
  map?: boolean;
  /** Include the existing image gallery (only on /fotos/). */
  gallery?: boolean;
}

export const SITE_FACTS = {
  domain: 'https://parquesanpio.com',
  mapsUrl: 'https://maps.app.goo.gl/3t2apWjTJbkW2L4x5',
  addressReference: 'Cra. 33 #45, Cabecera del Llano, Bucaramanga, Santander',
  coordinates: '7.1185637, −73.1104339',
  plusCode: '4V9Q+CR',
  officialName: 'Parque Guillermo Sorzano González',
  alternateName: 'Saint Pío Park',
  rating: '4,5/5',
  reviewCount: '16.003',
  ratingChecked: '29 de octubre de 2026',
  updated: '4 de noviembre de 2026',
  updatedIso: '2026-11-04',
  language: 'es-CO',
  ogLocale: 'es_CO'
} as const;

export const TOPIC_GROUPS: { id: TopicGroupId; label: string; intro: string }[] = [
  {
    id: 'basicos',
    label: 'Ubicación, llegada y visita',
    intro: 'Dónde queda el parque, cómo llegar, horarios de referencia, entrada y obras de arte público.'
  },
  {
    id: 'entorno',
    label: 'Cabecera del Llano y alrededores',
    intro: 'Comer, tomar café y entender el sector que rodea al Parque San Pío.'
  },
  {
    id: 'planes',
    label: 'Rutas y formas de visitarlo',
    intro: 'Caminatas, planes por tiempo, fotografía, accesibilidad y precauciones según el día.'
  },
  {
    id: 'ciudad',
    label: 'Más planes en Bucaramanga',
    intro: 'Llegadas desde otras zonas, alojamiento, clima y otros paseos de la ciudad.'
  }
];

export const SOURCES: { name: string; url: string }[] = [
  {
    name: 'Alcaldía de Bucaramanga · paisajismo y recuperación del Parque San Pío',
    url: 'https://www.bucaramanga.gov.co/noticias/parque-san-pio-respira-un-nuevo-aire/'
  },
  {
    name: 'Instituto Municipal de Cultura y Turismo (IMCT) · conservación de «Mujer de pie, desnuda»',
    url: 'https://imct.gov.co/se-inicia-la-restauracion-de-la-escultura-mujer-de-pie-desnuda-en-el-parque-san-pio/'
  },
  {
    name: 'Alcaldía de Bucaramanga · senderos, iluminación y reapertura',
    url: 'https://www.bucaramanga.gov.co/noticias/el-parque-san-pio-se-reabre-por-completo-asi-lo-disfrutan-de-nuevo-los-bumangueses/'
  },
  {
    name: 'Santander Travel · ficha de la escultura y horario publicado',
    url: 'https://www.santander.travel/planes-13-m/15-escultura-la-mujer-de-pie-desnuda-o-gorda-de-botero.htm'
  },
  {
    name: 'Área Metropolitana de Bucaramanga · nombre Parque Guillermo Sorzano González',
    url: 'https://www.amb.gov.co/arte-y-creatividad-del-reciclaje-podran-apreciarse-este-viernes-en-primera-feria-al-parque/'
  },
  {
    name: 'Google Maps · ficha pública del Parque San Pío',
    url: SITE_FACTS.mapsUrl
  },
  {
    name: 'Bucaramanga Histórica y Cultural (2012) · historia del parque, pp. 272–273',
    url: 'https://es.scribd.com/document/432762152/Diseno-Producto-Historico-Cultural'
  }
];

/** Shared editorial modules. Kept identical on every guide on purpose. */
export const BEFORE_YOU_GO =
  'Los datos operativos pueden cambiar. Confirma avisos municipales, accesos, horarios, tarifas y disponibilidad el mismo día de tu visita. Esta es una guía independiente y sin ánimo de lucro: no es el sitio oficial del parque, de la Alcaldía de Bucaramanga ni de ningún comercio mencionado.';

export const SOURCES_NOTE =
  'Las fuentes se contrastaron con publicaciones de la Alcaldía de Bucaramanga, del Instituto Municipal de Cultura y Turismo (IMCT), del Área Metropolitana de Bucaramanga y de Santander Travel. Google Maps mostraba 4,5/5 con 16.003 reseñas el 29 de octubre de 2026; son opiniones de terceros, no reseñas recopiladas por esta guía. Última revisión editorial: 4 de noviembre de 2026. Los enlaces externos están sujetos a sus propias condiciones.';

/** Fails loud at build time if a guide is malformed or links to a missing page. */
export function validateTopics(topics: Topic[]): Topic[] {
  const slugs = new Set<string>();
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const topic of topics) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(topic.slug)) {
      throw new Error(`Invalid slug: ${topic.slug}`);
    }
    if (slugs.has(topic.slug)) throw new Error(`Duplicate slug: ${topic.slug}`);
    if (titles.has(topic.title)) throw new Error(`Duplicate title: ${topic.title}`);
    if (descriptions.has(topic.description)) throw new Error(`Duplicate description for ${topic.slug}`);
    slugs.add(topic.slug);
    titles.add(topic.title);
    descriptions.add(topic.description);
    if (topic.title.length > 70) throw new Error(`Title too long (${topic.title.length}): ${topic.slug}`);
    if (topic.description.length > 170) throw new Error(`Description too long (${topic.description.length}): ${topic.slug}`);
    if (topic.sections.length < 2) throw new Error(`Too few sections: ${topic.slug}`);
    if (topic.faqs.length < 2) throw new Error(`Too few FAQs: ${topic.slug}`);
    if (topic.related.length < 3) throw new Error(`Too few related links: ${topic.slug}`);
    if (topic.related.includes(topic.slug)) throw new Error(`Self link: ${topic.slug}`);
    if (topic.sources.length < 2) throw new Error(`Too few sources: ${topic.slug}`);
  }
  for (const topic of topics) {
    for (const slug of topic.related) {
      if (!slugs.has(slug)) throw new Error(`Broken related link in ${topic.slug}: ${slug}`);
    }
  }
  return topics;
}

