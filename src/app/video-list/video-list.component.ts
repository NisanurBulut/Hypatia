import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Hypatia!';
  videoListesi = [
    {
      name: 'Video1',
      slug: 'item1',
      description:'Aynı düzlemdeki 3 çemberi teğet geçen doğruların kesişim noktaları daima doğrusaldır.',
      embed:'../../assets/Videos/dogruKesisim.webm'
    },
    {
      name: 'video2',
      slug: 'item2',
      description:'Dairenin alanı, üçgenin alanı üzerinden görsel olarak anlatılmış.',
      embed:'../../assets/Videos/daireAlan.webm'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
