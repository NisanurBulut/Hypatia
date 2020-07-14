import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  constructor(private router: Router) { }
  submitSearch(formData) {
    let query = formData.value['q'];
    console.log(query);
    if (query) {
      this.router.navigate(['/search', { q: query }]);
    }
  }
  ngOnInit() {
  }

}
