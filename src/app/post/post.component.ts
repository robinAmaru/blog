import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

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


  constructor(private postService: PostService,
              private router: Router) { }

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
    onSave() {
      const titre = this.postTitre;
      const content = this.postContent;
      const loveIts = this.postLoveIts;
      const created = this.postCreated;

      const newpost = new Post(titre, content, loveIts, created);
      console.log('enregistrement');
      this.postService.createNewPost(newpost);
      this.router.navigate(['']);

    }
}
