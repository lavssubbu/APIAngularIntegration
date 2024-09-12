import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletecompany',
  standalone: true,
  imports: [],
  templateUrl: './deletecompany.component.html',
  styleUrl: './deletecompany.component.css'
})
export class DeletecompanyComponent {

      constructor(private apiser:ApiService,private router:Router,private route:ActivatedRoute)
      {

      }
      ngOnInit():void{
        const id = +this.route.snapshot.params['id'];
           this.apiser.deletecomp(id).subscribe(
            (response)=>
            {
              console.log("Company Removwd");
              this.router.navigate(['/'])
            }
           )
      }
}
