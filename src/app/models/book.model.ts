export default class BookModel {

  id: number;
  title: String;
  author: String;
  status: Book.StatusType;
  createAt: Date;

  constructor(
    title: String,
    author: String,
    status: Book.StatusType,
    id: number,
    createAt: Date = new Date
  ) {
    this.title = title;
    this.author = author;
    this.status = status;
    this.id = id;
    this.createAt = createAt;
  }
}

export namespace Book {
  export enum StatusType {
    available = 'Disponible',
    unavailable = 'Indisponible'
  }
}
