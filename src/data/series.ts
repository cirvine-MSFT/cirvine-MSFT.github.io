export const seriesMetadata = {
  overcut: {
    title: 'Building Overcut',
    description:
      'A development journal about building a collisionless team racing game with Unreal Engine, AI agents, and a lot of learning in public.',
    href: '/series/overcut',
  },
} as const;

export type SeriesSlug = keyof typeof seriesMetadata;
