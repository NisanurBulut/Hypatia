import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private req: any;
  private slug: string;
  private video: {
    name:'',
    slug:'',
    description:'',
    embed:'',
    videoPath:'',
    imagePath:''
  };
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['slug'];
    });
  }

  ngOnInit() {
    this.req = this.http.get('assets/dataset/videos.json')
      .subscribe(resp => {
        (resp as [any]).filter(item => {
          if (item.slug === this.slug) {
            this.video = item;
          }
        });
      });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
