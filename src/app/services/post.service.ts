import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs-compat/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
    });
  }

  createNewPost(newpost: Post) {
    console.log(newpost);
    this.posts.push(newpost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(num: number) {

    this.posts.splice(num, 1);
    this.savePosts();
    this.emitPosts();
  }

  loveIt(index: number, num: number) {

    this.posts[index].loveIts = this.posts[index].loveIts + num;
    this.savePosts();
    this.emitPosts();
  }

}
