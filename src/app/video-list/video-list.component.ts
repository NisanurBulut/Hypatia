import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  title = 'Hypatia!';
  private req: any;
  videoListesi: [any];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.req = this.http.get('assets/dataset/videos.json')
      .subscribe(resp => {
        this.videoListesi = resp as [any];
      });
  }
  ngOnDestroy() {
    this.req.unsubscribe();
  }
  getEmbedUrl() {

  }
}
