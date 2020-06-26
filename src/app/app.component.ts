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

  react = false;
  inputValue = '';

  newTitle = '';

  styleToggle = false;
  backgroundToggle = false;
  toggle = false;
  switchToggle = false;

  fibArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  now: Date = new Date();

  // contstructor always must be after the variables initialization
  constructor() {
    this.timeoutFunction();
  }

  private timeoutFunction() {
    setTimeout(() => {
      this.react = !this.react;
      this.img = this.react
      ? 'https://w7.pngwing.com/pngs/669/188/png-transparent-react-javascript-vue-js-logo-science-experiments-logo-symmetry-business.png'
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png';
      this.timeoutFunction();
    }, 2000);
  }
  
  // after contstuctor goes functions which are available from template
  onInput(event: KeyboardEvent) {
    console.log('event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onBlur(value: string) {
    console.log(value);
    this.inputValue = value;
  }

  onClick() {
    alert('click');
  }

  onInputTitle(event: any) {
    this.newTitle = event.target.value;
  }
}
