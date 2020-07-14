import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
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

    if (query) {
      formData.reset();
      this.router.navigate(['/search', { q: query }]);
    }
  }
  ngOnInit() {
  }
}
