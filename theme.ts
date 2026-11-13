'use client';

import { Anchor, createTheme } from '@mantine/core';

export const theme = createTheme({
  // Body text keeps Mantine's default system stack; headings use Outfit, as on mantine.dev.
  headings: {
    fontFamily: 'var(--font-outfit), sans-serif',
    fontWeight: '600',
  },
  // Shade 8 for filled buttons and light-mode links: white on blue.8 is 5.0:1 and on red.8
  // 4.5:1, where Mantine's default shade 6 gives 3.6:1 and 3.3:1, under the WCAG AA minimum.
  // Dark-mode links stay on blue.4 (6.3:1 on the dark page), which Mantine sets on its own.
  primaryShade: { light: 8, dark: 8 },
  components: {
    // Links inside text are underlined, so they don't rely on colour alone to stand out.
    // Avatar links and similar pass `underline="never"` explicitly.
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'always',
      },
    }),
  },
});
