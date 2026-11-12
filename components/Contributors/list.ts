export interface Contributor {
  /** GitHub username — the avatar is resolved as https://github.com/<github>.png */
  github: string;
}

/**
 * People who have contributed to the wiki, shown in the home-page contributors wall.
 * Add yourself at the end of the list in your first pull request.
 */
export const contributors: Contributor[] = [{ github: 'harmonie-durrant' }];
