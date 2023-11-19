export interface GithubUser {
  id: number;
  url: string;
  bio: string;
  name: string;
  blog: string;
  email: string;
  login: string;
  avatar_url: string;
  company?: string;
  location: string;
  followers: number;
  following: number;
  created_at: string;
  public_repos: number;
  twitter_username: string;
}
