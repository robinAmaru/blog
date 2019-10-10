import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  datetoday: number = Date.now();

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm( ) {
    this.postForm = this.formBuilder.group( {
      titre: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSavePost() {
    const titre = this.postForm.get('titre').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const created = this.datetoday;

    const newpost = new Post(titre, content, loveIts, created);
    this.postService.createNewPost(newpost);
    this.router.navigate(['']);

  }

}
