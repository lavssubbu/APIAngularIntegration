import { Component } from '@angular/core';
import { Company } from '../Company';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent {
    company : Company = { compId: 0, compName: '' };

    constructor(private apiser:ApiService,private router:Router)
    { }

    onSubmit(): void {
      this.apiser.postcomp(this.company).subscribe(
        (response) => {
          console.log('Company added successfully!', response);
          this.router.navigate(['/']); 
        }
      );
    }
}
