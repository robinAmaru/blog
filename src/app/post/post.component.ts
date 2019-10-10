import { Component, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  // définition des input attendus
  @Input() postTitre: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated: string;
  @Input() postId: number;


  constructor(private postService: PostService) { }


  onLove(num: number)  {
    this.postService.loveIt(this.postId, num);
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

  onDelete() {
    this.postService.removePost(this.postId);
  }
}
