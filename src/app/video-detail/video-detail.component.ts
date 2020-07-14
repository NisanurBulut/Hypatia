import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { VideoService } from '../services/videos.service';
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private req: any;
  private slug: string;
  private video: any;
  // private video: {
  //   name: '',
  //   slug: '',
  //   description: '',
  //   embed: '',
  //   videoPath: '',
  //   imagePath: ''
  // };
  constructor(private route: ActivatedRoute, private vs: VideoService) { }

  ngOnInit() {
    // this.req = this.http.get('assets/dataset/videos.json')
    //   .subscribe(resp => {
    //     (resp as [any]).filter(item => {
    //       if (item.slug === this.slug) {
    //         this.video = item;
    //       }
    //     });
    //   });

    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.vs.getVideoDetail(this.slug).subscribe(data => {
        this.video = data;
      });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    // this.req.unsubscribe();
  }
}
