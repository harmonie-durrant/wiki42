'use client';

import { ActionIcon, Anchor, Avatar, Button, Group, Stack, Text, Title } from '@mantine/core';
import { IconCoffee, IconHeartFilled, IconPlus } from '@tabler/icons-react';
import { sponsors } from './list';
import classes from './Sponsors.module.css';

/**
 * Sponsors wall — title, pitch, sponsor avatars and the "Become a sponsor" CTA.
 * Rendered on the home page below the ecosystem boxes; the navbar Sponsor button
 * scrolls/navigates to the `#sponsors` anchor.
 */
export const Sponsors = () => {
  return (
    <Stack gap="md" align="center" id="sponsors" className={classes.sponsorsSection} my={64}>
      <Title order={2} ta="center">
        Sponsors
      </Title>
      <Text fz={15} c="dimmed" ta="center" maw={560}>
        If work saves you from the black hole and you wish to thank me, consider buying me a coffee to say thanks !
      </Text>
      <Group justify="center" gap="xl">
        {sponsors.map((sponsor) => (
          <Anchor
            key={sponsor.key}
            href={sponsor.href ?? `https://github.com/${sponsor.github}`}
            target="_blank"
            rel="noopener noreferrer"
            underline="never"
          >
            <Stack gap={4} align="center">
              <Avatar
                // 96px for a 56px avatar at 2x: the default is the full 460px image (45 KB vs 3 KB)
                src={`https://github.com/${sponsor.github}.png?size=96`}
                alt=""
                size="lg"
                radius="xl"
              />
              <Text fz={12} c="dimmed">
                {sponsor.name}
              </Text>
            </Stack>
          </Anchor>
        ))}
      </Group>
      <Group gap="sm" justify="center">
        <Button
          component="a"
          href="https://github.com/sponsors/harmonie-durrant"
          target="_blank"
          rel="noopener noreferrer"
          color="red"
          leftSection={<IconHeartFilled size={16} />}
        >
          Become a sponsor
        </Button>
        <Button
          component="a"
          href="https://buymeacoffee.com/harmonie"
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          leftSection={<IconCoffee size={16} color="var(--mantine-color-orange-6)" />}
        >
          Buy me a coffee
        </Button>
      </Group>
    </Stack>
  );
};
