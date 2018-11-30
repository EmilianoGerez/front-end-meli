import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.searchForm = this.createForm();
  }

  ngOnInit() {}

  createForm() {
    return this.fb.group({
      searchTerm: ['', [Validators.required]]
    });
  }

  onSubmit({ value }) {
    const { searchTerm } = value;
    this.router.navigate(['/items'], { queryParams: { search: `${searchTerm}` } });
  }
}
