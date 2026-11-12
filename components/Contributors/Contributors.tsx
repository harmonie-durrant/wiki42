'use client';

import { IconGitFork, IconGitPullRequest } from '@tabler/icons-react';
import { Anchor, Avatar, Button, Group, Stack, Text, Title } from '@mantine/core';
import config from '@/config';
import { contributors } from './list';
import classes from './Contributors.module.css';

const repoUrl = `https://github.com/${config.gitHub.repo}`;

/**
 * Contributors wall — title, pitch, contributor avatars and the "Fork" / "Pull request" CTAs.
 * Rendered on the home page above the sponsors wall, at the `#contributors` anchor.
 */
export const Contributors = () => {
  return (
    <Stack
      gap="md"
      align="center"
      id="contributors"
      className={classes.contributorsSection}
      my={64}
    >
      <Title order={2} ta="center">
        Contributors
      </Title>
      <Text fz={15} c="dimmed" ta="center" maw={560}>
        Wiki42 is written by the 42 community. Spotted a mistake, or know something that would help
        other students? Fork the repository, make your change and open a pull request. The{' '}
        <Anchor
          inherit
          href={`${repoUrl}/blob/main/CONTRIBUTING.md`}
          target="_blank"
          rel="noopener noreferrer"
        >
          contributing guide
        </Anchor>{' '}
        walks you through it.
      </Text>
      <Group justify="center" gap="xl">
        {contributors.map((contributor) => (
          <Anchor
            key={contributor.github}
            href={`https://github.com/${contributor.github}`}
            target="_blank"
            rel="noopener noreferrer"
            underline="never"
          >
            <Stack gap={4} align="center">
              <Avatar
                // 96px for a 56px avatar at 2x: the default is the full 460px image (45 KB vs 3 KB)
                src={`https://github.com/${contributor.github}.png?size=96`}
                alt=""
                size="lg"
                radius="xl"
              />
              <Text fz={12} c="dimmed">
                {contributor.github}
              </Text>
            </Stack>
          </Anchor>
        ))}
      </Group>
      <Group gap="sm" justify="center">
        <Button
          component="a"
          href={`${repoUrl}/fork`}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconGitFork size={16} />}
        >
          Fork the repository
        </Button>
        <Button
          component="a"
          href={`${repoUrl}/compare`}
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          leftSection={<IconGitPullRequest size={16} />}
        >
          Open a pull request
        </Button>
      </Group>
    </Stack>
  );
};
