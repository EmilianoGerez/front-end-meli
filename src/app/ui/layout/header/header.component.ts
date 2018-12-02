import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.searchForm = this.createForm();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(({ search }) => {
      this.searchForm.patchValue({
        searchTerm: search
      });
    });
  }

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
