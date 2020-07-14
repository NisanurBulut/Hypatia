import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  homeImageList: [any];
  private req: any;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.req = this.http.get('assets/dataset/videos.json')
      .subscribe(resp => {
        this.homeImageList = resp as [any];
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
