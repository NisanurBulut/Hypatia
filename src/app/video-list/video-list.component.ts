import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from '../services/videos.service';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  title = 'Hypatia!';
  private req: any;
  videoListesi: [any];
  constructor(private vs: VideoService) { }

  ngOnInit() {
    this.req = this.vs.getDataset()
      .subscribe(resp => {
        this.videoListesi = resp as [any];
      });
  }
  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
