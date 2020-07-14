import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoModel } from '../../model/VideoModel';
import { VideoService } from '../services/videos.service';
@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  private req: any;
  query: string;
  videoListesi: [VideoModel];
  constructor(private activatedRoute: ActivatedRoute, private vs: VideoService) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.query = params.q;
      this.req = this.vs.search(this.query).subscribe(data => {
        this.videoListesi = data as [VideoModel];
      });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
