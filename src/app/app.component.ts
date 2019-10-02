import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
