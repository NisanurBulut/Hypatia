import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Hypatia!';
  videoListesi = [{ name: 'Video1', slug: 'item1' },
  { name: 'video2', slug: 'item2' }];
  constructor() { }

  ngOnInit() {
  }

}
