export interface GithubUser {
  id: number;
  url: string;
  bio: string;
  type: string;
  name: string;
  blog: string;
  email: string;
  login: string;
  avatar_url: string;
  company?: string;
  location: string;
  hireable: string;
  repos_url: string;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  public_gists: number;
  public_repos: number;
  following_url: string;
  followers_url: string;
  twitter_username: string;
  organizations_url: string;
}
