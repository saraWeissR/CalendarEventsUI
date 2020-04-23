export class Event {
  public imagePath: string;
  public imageAlt: string;
  public updateDate: Date;
  public title: string;
  public start: Date;

  constructor(
    imagePath: string, 
    imageAlt: string,
    updateDate: Date,
    title: string, 
    start: Date
  ) 
  {
    this.imagePath = imagePath;
    this.imageAlt = imageAlt;
    this.updateDate = updateDate;
    this.title = title;
    this.start = start;    
  }
}