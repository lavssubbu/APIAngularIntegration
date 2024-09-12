import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CompanyListComponent, CompanyDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consumingapi';
}
