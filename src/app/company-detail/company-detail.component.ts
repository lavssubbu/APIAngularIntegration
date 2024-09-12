import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Company } from '../Company';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
     
  company :Company | undefined
  constructor(private apiser:ApiService,private route:ActivatedRoute)
  {

  }
  ngOnInit():void{
    const id = +this.route.snapshot.params['id'];
    this.apiser.getbyid(id).subscribe(
        (response)=>{
          this.company = response
        }
     )
  }
}
