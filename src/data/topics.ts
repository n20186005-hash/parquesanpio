import { validateTopics, type Topic, type TopicGroupId } from './topic-types';
import { BASICOS_TOPICS } from './topic-content/basicos';
import { ENTORNO_TOPICS } from './topic-content/entorno';
import { PLANES_TOPICS } from './topic-content/planes';
import { CIUDAD_TOPICS } from './topic-content/ciudad';

/** Single source of truth for the 36 independent Spanish guides. */
export const TOPICS: Topic[] = validateTopics([
  ...BASICOS_TOPICS,
  ...ENTORNO_TOPICS,
  ...PLANES_TOPICS,
  ...CIUDAD_TOPICS
]);

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByGroup(groupId: TopicGroupId): Topic[] {
  return TOPICS.filter((t) => t.group === groupId);
}

export function topicPath(slug: string): string {
  return `/${slug}/`;
}

export { TOPIC_GROUPS, SOURCES, SITE_FACTS, BEFORE_YOU_GO, SOURCES_NOTE } from './topic-types';
export type { Topic, TopicGroupId, TopicSection, TopicFaq } from './topic-types';
