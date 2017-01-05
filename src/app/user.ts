export class User {
  public name: string;
  public avatar_url: string;
  public email: string;
  public followers: number;
  public following: number;
  public location: string;
  public profileUrl: string;
  public memberSince: string
  public readonly UNKNOWN: string = 'Unknown';

  constructor( json: any ) {
    this.name = json.name || this.UNKNOWN;
    this.avatar_url = json.avatar_url;
    this.email = json.email || this.UNKNOWN;;
    this.followers = json.followers;
    this.following = json.following;
    this.location = json.location || this.UNKNOWN;;
    this.profileUrl = json.html_url;
    this.memberSince = json.created_at;
  }
}
