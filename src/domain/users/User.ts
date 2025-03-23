export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}   