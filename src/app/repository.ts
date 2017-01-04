export class Repository {
  public description: string;
  public forks: number;
  public watchers: number;
  public stargazers_count: number;
  public git_url: string;
  public full_name: string;
  public name: string;
  public language: string;
  public repoUrl: string;

  constructor( json : any ) {
    this.description = json.description;
    this.forks = json.forks;
    this.watchers = json.watchers;
    this.stargazers_count = json.stargazers_count;
    this.git_url = json.git_url;
    this.full_name = json.full_name;
    this.language = json.language;
    this.name = json.name;
    this.repoUrl = json.html_url;
  }
}
