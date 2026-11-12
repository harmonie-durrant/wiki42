export interface Sponsor {
  key: string;
  name: string;
  /** GitHub username — the avatar is resolved as https://github.com/<github>.png */
  github: string;
  /** Optional website to link instead of the GitHub profile */
  href?: string;
}

/**
 * Current GitHub sponsors, shown in the home-page sponsors wall. Add new sponsors here.
 */
export const sponsors: Sponsor[] = [];
