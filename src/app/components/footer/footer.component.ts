import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  categories = [];
  constructor() {}

  ngOnInit(): void {
    this.categories = [
      'Graphics',
      'Addons',
      'Buttons',
      'Inforgraphics',
      'PSDs',
      'Fonts',
      'Forms',
      'Graphs',
      'Icons',
      'Textures',
      'GUI',
      'Logos',
      'Templates',
      'Patterns',
      'Navigation',
      'Vectors',
      'Themes',
      'Backgrounds',
      'UI Kits',
      'Business Cards',
    ];
  }
}
