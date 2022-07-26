import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clone';
  items =[
  {
    img:'https://www.w3schools.com/w3images/mountains.jpg',
    name:'Lorem Ipsum',
    des:'Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  }, 
  {
    img:'https://www.w3schools.com/w3images/lights.jpg',
    name:'Lorem Ipsum',
    des:'Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  },
  {
    img:'https://www.w3schools.com/w3images/nature.jpg',
    name:'Lorem Ipsum',
    des:'Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  },
  {
    img:'https://www.w3schools.com/w3images/p1.jpg',
    name:'Lorem Ipsum',
    des:'Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  },{
    img:'https://www.w3schools.com/w3images/p2.jpg',
    name:'Lorem Ipsum',
    des:'Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  },{
    img:'https://www.w3schools.com/w3images/p3.jpg',
    name:'Lorem Ipsum',
    des:'Praesent tincidunt sed tellus ut rutrum.Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.'
  },
  
  ]
  data=[
  {
    img:'https://www.w3schools.com/w3images/avatar_g.jpg',
  },{
    img:'https://www.w3schools.com/w3images/me2.jpg',
  }
  ]
}
