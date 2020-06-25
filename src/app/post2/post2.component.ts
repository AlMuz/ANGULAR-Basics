import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  template: `
    <div class="post2">
      <h2>title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quod odit
        unde animi sapiente placeat incidunt eveniet laborum facere aliquid
        doloremque earum sit explicabo accusamus voluptas, adipisci nostrum.
        Enim, voluptatem.
      </p>
    </div>
  `,
  styles: [
    `
      .post2 {
        border: 10px solid gray;
        padding: 20px;
      }
    `,
  ],
})
export class Post2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
