'use client';

import { Navbar } from 'nextra-theme-docs';
import { DiscordIcon } from 'nextra/icons';
import { Group, Text } from '@mantine/core';
import { IconCoffee, IconHeartFilled } from '@tabler/icons-react';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { HeaderControl } from '../ColorSchemeControl/HeaderControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

export const MantineNavBar = () => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={4}>
            <Logo />
            <Text size="xl" fw={600} ff="heading" visibleFrom="xl">
              Wiki
              <Text span inherit c="blue">
                42
              </Text>
            </Text>
          </Group>
        }
        projectLink="https://github.com/harmonie-durrant/wiki42"
      >
        <Group gap="sm" wrap="nowrap">
          <ColorSchemeControl />
          <HeaderControl component="a" href="/#sponsors" tooltip="Sponsor">
            <IconHeartFilled size={18} color="var(--mantine-color-red-6)" />
          </HeaderControl>
          <HeaderControl
            component="a"
            href="https://buymeacoffee.com/harmonie"
            target="_blank"
            rel="noopener noreferrer"
            tooltip="Buy me a coffee"
          >
            <IconCoffee size={18} stroke={1.8} color="var(--mantine-color-orange-6)" />
          </HeaderControl>
        </Group>
      </Navbar>
    </>
  );
};
