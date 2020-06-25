import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {  
  title = 'Dynamic Title';
  number = 27;
  array = [1, 2, 3];

  img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png';

  // it must be after variable init
  constructor() {
    setTimeout(() => {
      this.img = 'https://w7.pngwing.com/pngs/669/188/png-transparent-react-javascript-vue-js-logo-science-experiments-logo-symmetry-business.png'
    }, 2000)
  }
}
