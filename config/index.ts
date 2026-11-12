export default {
  /**
   * Nextra metadata configuration
   * @see https://nextra.vercel.app/docs/metadata
   */
  metadata: {
    title: {
      default: 'Wiki42',
      template: '%s | Wiki42',
    },
    description:
      'The unofficial 42 wiki, made for current and future 42 students, by the 42 community.',
    metadataBase: new URL('https://wiki42.harmoniedurrant.com/'),
    keywords: ['Wiki42', '42', '42 school', 'wiki'],
    generator: 'Next.js',
    applicationName: 'Wiki42',
    appleWebApp: {
      title: 'Wiki42',
    },
    openGraph: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      url: './',
      siteName: 'Wiki42',
      locale: 'en_US',
      type: 'website',
    },
    other: {
      'msapplication-TileColor': '#fff',
    },
    twitter: {
      site: 'https://wiki42.harmoniedurrant.com/',
    },
    alternates: {
      // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
      canonical: './',
    },
  },
  /**
   * Nextra Layout component configuration
   */
  nextraLayout: {
    docsRepositoryBase: 'https://github.com/harmonie-durrant/wiki42/tree/main',
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
    // Keep in step with `head.mantine.defaultColorScheme`: Nextra (next-themes) and Mantine
    // each fall back to their own default on a first visit, and nothing reconciles them on load.
    nextThemes: {
      defaultTheme: 'light',
    },
  },
  /**
   * Main Layout head configuration
   */
  head: {
    mantine: {
      defaultColorScheme: 'light',
      nonce: '8IBTHwOdqNKAWeKl7plt8g==',
    },
  },
  /**
   * GitHub API configuration
   * @see https://docs.github.com/en/rest/reference/repos#releases
   *
   * The GitHub API token is optional for rate limiting.
   * If you want to use it, create a read-only token: a fine-grained token with
   * public repositories (read-only), or a classic token with no scopes.
   *
   * This information is used to fetch the releases from the GitHub API.
   */
  gitHub: {
    repo: 'harmonie-durrant/wiki42',
    apiUrl: 'https://api.github.com',
    releasesUrl: 'https://api.github.com/repos/harmonie-durrant/wiki42/releases',
  },

  /**
   * Release notes configuration
   * This is used to link the release notes in the app.
   */
  releaseNotes: {
    url: 'https://github.com/harmonie-durrant/wiki42/releases',
    maxReleases: 10,
  },

  /**
   * Search configuration (for pagefind)
   * This is used to configure the search engine API.
   * @see /app/api/search/route.ts
   */
  search: {
    queryKeyword: 'q',
    minQueryLength: 3,
    limitKeyword: 'limit',
    defaultMaxResults: 5,
    excerptLengthKeyword: 'excerptLength',
    defaultExcerptLength: 30,
    defaultLanguage: 'en',
  },
} as const;
