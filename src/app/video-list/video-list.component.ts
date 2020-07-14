import { Component, OnInit, OnDestroy } from '@angular/core';
import {VideoModel} from '../../model/VideoModel';
import { VideoService } from '../services/videos.service';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  title = 'Hypatia!';
  private req: any;
  videoListesi: [VideoModel];
  constructor(private vs: VideoService) { }

  ngOnInit() {
    this.req = this.vs.getDataset()
      .subscribe(resp => {
        this.videoListesi = resp as [VideoModel];
      });
  }
  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
