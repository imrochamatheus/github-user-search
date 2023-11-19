import { GithubUser } from './services/search-github-user.interfaces';

export const DEFAULT_GITHUB_USER_DATA: GithubUser = {
  name: 'The octocat',
  avatar_url: '/assets/img/Bitmap.svg',
  bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.  Quisque volutpat mattis eros.',
  created_at: '10/03/2020',
  public_repos: 8,
  followers: 3938,
  following: 9,
  location: 'San Francisco',
  blog: 'https://github.blog',
  company: '@github',
  twitter_username: 'Not Available',
  login: '@octocat',
} as GithubUser;
