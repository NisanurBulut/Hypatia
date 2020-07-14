import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { VideoModel } from '../../model/VideoModel';
import { VideoService } from '../services/videos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeImageList: [VideoModel] = ([] as unknown as [VideoModel]);
  private req: any;
  constructor(private router: Router, private vs: VideoService) { }

  ngOnInit() {
    this.req = this.vs.getDataset()
      .subscribe(resp => {
        (resp as [VideoModel]).filter(d => {
          if (d.featured === true) {
            let item = d;
            this.homeImageList.push(item);
          }
        });
      });
  }
  ngOnDestroy() {
    this.req.unsubscribe();
  }
  preventNormal(event: MouseEvent, image: any) {
    if (!image.prevented) {
      event.preventDefault();
      this.router.navigate(['./videos']);
    }
  }
}
