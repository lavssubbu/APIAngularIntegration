import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../Company';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-company',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-company.component.html',
  styleUrl: './update-company.component.css'
})
export class UpdateCompanyComponent {
  company: Company = { compId: 0, compName: '' };

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCompany();
  }

  loadCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getbyid(id).subscribe(
      (company) => this.company = company,
      (error) => console.error('Error loading company', error)
    );
  }

  onUpdate(): void {
    const id = this.company.compId;
    this.apiService.updateComp(id,this.company).subscribe(
      (response) => {
        console.log('Company updated successfully!', response);
        this.router.navigate(['/']); // Redirect to the list component
      },
      (error) => console.error('Error updating company', error)
    );
  }
}
