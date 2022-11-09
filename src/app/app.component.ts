import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      urlImg: 'https://media.santosfc.com.br/wp-content/uploads/2022/04/cropped-Asset-2.png',
      descricaoImg: 'SFC 1'
    },
    {
      urlImg: 'https://media.santosfc.com.br/wp-content/uploads/2022/04/Asset-2.jpg',
      descricaoImg: 'SFC 2'
    }
  ];
}
