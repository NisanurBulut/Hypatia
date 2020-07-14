import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const endPoint = 'assets/dataset/videos.json';

@Injectable()
export class VideoService {

  constructor(private http: HttpClient) { }
  getDataset() {
    return this.http.get(endPoint)
      .pipe(map(data => (data as [any])))
      .pipe(catchError(this.handleError));
  }
  getVideoDetail(slug: any) {
    return this.http.get(endPoint)
      .pipe(
        map(resp => {
          let data = (resp as [any]).filter(item => {
            if (item.slug === slug) {
              return item;
            }
          });
          if (data.length === 1) {
            return data[0];
          }
          return {};
        }))
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any, caught: any): any {

  }
}
