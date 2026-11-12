'use client';

import { BorderAnimate, type BorderAnimateProps } from '@gfazioli/mantine-border-animate';
import { IconArrowRight, IconFileText, IconFlag, IconPackages, IconSquare } from '@tabler/icons-react';
import { Group, SimpleGrid, Stack, Text, ThemeIcon, Title, UnstyledButton } from '@mantine/core';
import { Sponsors } from '../Sponsors/Sponsors';
import classes from './Content.module.css';

interface EcosystemBoxProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  beamProps?: Partial<BorderAnimateProps>;
}

const EcosystemBox = ({ href, icon, title, description, beamProps }: EcosystemBoxProps) => (
  <BorderAnimate radius="lg" h="100%" {...beamProps}>
    <UnstyledButton
      component="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      p="xl"
      className={classes.card}
    >
      <Stack gap="sm">
        <Group gap="sm" wrap="nowrap">
          <ThemeIcon
            variant="gradient"
            gradient={{
              from: (beamProps?.colorFrom as string) ?? 'blue',
              to: (beamProps?.colorTo as string) ?? 'cyan',
            }}
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
          Explore <IconArrowRight size={16} />
        </Group>
      </Stack>
    </UnstyledButton>
  </BorderAnimate>
);

export const Content = () => {
  return (
    <Stack align="center" my="2vh">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" maw={860} w="100%" mx="auto" my={32}>
        <EcosystemBox
          href="https://minesweeper.harmoniedurrant.com/"
          icon={<IconFlag size={20} />}
          title="Minesweeper"
          description="The docs are coming soon so for now take a look at one of my projects."
          beamProps={{
            beamMode: 'dot',
            colorFrom: 'cyan',
            colorTo: 'indigo',
            size: 'lg',
            duration: 6,
          }}
        />
        <EcosystemBox
          href="https://voxels.harmoniedurrant.com/"
          icon={<IconPackages size={20} />}
          title="Voxels"
          description="The docs are coming soon so for now take a look at one of my projects."
          beamProps={{
            beamMode: 'dot',
            colorFrom: 'cyan',
            colorTo: 'indigo',
            size: 'lg',
            duration: 6,
          }}
        />
      </SimpleGrid>

      <Sponsors />
    </Stack>
  );
};
