import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent {

  constructor(private postService: PostService) { }

  // initialisation de la date
  datetoday = new Date();

// création du tableau posts
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. ',
      loveIts: 0,
      dateCreated: this.datetoday
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
      loveIts: 0,
      dateCreated: this.datetoday
        },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit a digni, adipisci, dolor. Cis arcu massa, scelerisque vitae, consequat in, pretium a, enim. ',
      loveIts: 0,
      dateCreated: this.datetoday
    }
];



}
