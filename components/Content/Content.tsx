'use client';

import { BorderAnimate, type BorderAnimateProps } from '@gfazioli/mantine-border-animate';
import { IconArrowRight, IconBook, IconVocabulary } from '@tabler/icons-react';
import { Group, SimpleGrid, Stack, Text, ThemeIcon, Title, UnstyledButton } from '@mantine/core';
import { Contributors } from '../Contributors/Contributors';
import { Sponsors } from '../Sponsors/Sponsors';
import classes from './Content.module.css';

interface WikiCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const beamProps: Partial<BorderAnimateProps> = {
  beamMode: 'dot',
  colorFrom: 'cyan',
  colorTo: 'indigo',
  size: 'lg',
  duration: 6,
};

const WikiCard = ({ href, icon, title, description }: WikiCardProps) => (
  <BorderAnimate radius="lg" h="100%" {...beamProps}>
    <UnstyledButton component="a" href={href} p="xl" className={classes.card}>
      <Stack gap="sm">
        <Group gap="sm" wrap="nowrap">
          <ThemeIcon
            variant="gradient"
            gradient={{ from: beamProps.colorFrom as string, to: beamProps.colorTo as string }}
            size="lg"
            radius="md"
          >
            {icon}
          </ThemeIcon>
          <Title order={3}>{title}</Title>
        </Group>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
        <Group gap={4} c="blue" fz="sm" fw={500}>
          Read <IconArrowRight size={16} />
        </Group>
      </Stack>
    </UnstyledButton>
  </BorderAnimate>
);

const wikiCards: WikiCardProps[] = [
  {
    href: '/wiki',
    icon: <IconBook size={20} />,
    title: 'Introduction',
    description:
      'What 42 is, how the journey works from admissions to the Common Core, and where to start.',
  },
  {
    href: '/wiki/glossary',
    icon: <IconVocabulary size={20} />,
    title: 'Glossary',
    description: 'Moulinette, Norminette, black hole, evaluation points: 42 vocabulary explained.',
  },
];

export const Content = () => {
  return (
    <Stack align="center" my="2vh">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" maw={860} w="100%" mx="auto" my={32}>
        {wikiCards.map((card) => (
          <WikiCard key={card.href} {...card} />
        ))}
      </SimpleGrid>

      <Contributors />
      <Sponsors />
    </Stack>
  );
};
