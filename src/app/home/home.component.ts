import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeImageList = [
    {
      imagePath: '../../assets/images/dogru.PNG',
      title: 'Doğru Kesişim Gösterimi',
      description: 'Aynı düzlemdeki 3 çemberi teğet geçen doğruların kesişim noktaları daima doğrusaldır.',
      videoPath: '../../assets/videos/dogru.webm',
      videoLink: '/videos/item1'
    },
    {
      imagePath: '../../assets/images/dogru.PNG',
      title: 'Doğru Kesişim Gösterimi',
      description: 'Aynı düzlemdeki 3 çemberi teğet geçen doğruların kesişim noktaları daima doğrusaldır.',
      videoPath: '../../assets/videos/dogru.webm',
      videoLink: '/videos/item1'
    },
    {
      imagePath: '../../assets/images/dogru.PNG',
      title: 'Doğru Kesişim Gösterimi',
      description: 'Aynı düzlemdeki 3 çemberi teğet geçen doğruların kesişim noktaları daima doğrusaldır.',
      videoPath: '../../assets/videos/dogru.webm',
      videoLink: '/videos/item1'
    },
    {
      imagePath: '../../assets/images/dogru.PNG',
      title: 'Doğru Kesişim Gösterimi',
      description: 'Aynı düzlemdeki 3 çemberi teğet geçen doğruların kesişim noktaları daima doğrusaldır.',
      videoPath: '../../assets/videos/dogru.webm',
      videoLink: '/videos/item1'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      this.router.navigate(['./videos']);
    }
  }
}
