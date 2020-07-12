import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  private slug: string;
  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['slug'];
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
