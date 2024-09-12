import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Company } from '../Company';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
   // data :any;
     companies: Company[] = [];

     constructor(private apiser:ApiService,private router:Router)
     {

     }

   /*ngOnInit():void{
        this.apiser.get().subscribe(
          (response) => {
            this.data=response;
            console.log()
          }
        );
     }*/
        ngOnInit(): void {
          this.loadCompanies();
        }
      
        loadCompanies(): void {
          this.apiser.get().subscribe(
            (data) => this.companies = data,
            (error) => console.error('Error loading companies', error)
          );
        }
      

        viewDetails(id: number): void {
          this.router.navigate(['/company', id]);
        }
      
        updateCompany(id: number): void {
          this.router.navigate(['/update', id]);
        }
        addCompany(): void {
          this.router.navigate(['/add-company']);
        }
        deleteCompany(id: number): void {
          if (confirm('Are you sure you want to delete this company?')) {
            this.apiser.deletecomp(id).subscribe(
              () => {
                console.log('Company deleted successfully');
                this.loadCompanies(); 
              },
              (error) => console.error('Error deleting company', error)
            );
          }
        }
}
