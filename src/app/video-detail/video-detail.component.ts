import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoModel } from '../../model/VideoModel';

import { VideoService } from '../services/videos.service';
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  private req: any;
  video: VideoModel={};
  slug: string;
  constructor(private route: ActivatedRoute, private vs: VideoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params.slug;
      this.req = this.vs.getVideoDetail(this.slug).subscribe(data => {
        this.video = data as VideoModel;
      });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
