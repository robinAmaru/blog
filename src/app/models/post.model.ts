export class Post {
  photo: string;
  constructor(public titre: string,
              public content: string,
              public loveIts: number,
              public created: Date) {}
}
