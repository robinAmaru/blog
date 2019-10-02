import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // définition des input attendus
  @Input() postTitre: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated: Date;

  constructor() { }

  ngOnInit() {
  }

  onLove(num: number)  {
    this.postLoveIts =  this.postLoveIts + num;
   }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
     } else if (this.postLoveIts === 0) {
      return 'black';
     }
    }

}
