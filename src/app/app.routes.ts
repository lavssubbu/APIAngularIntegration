import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { DeletecompanyComponent } from './deletecompany/deletecompany.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
export const routes: Routes = [
    { path: '', component: CompanyListComponent },
    { path: 'company/:id', component: CompanyDetailComponent },
    {path:'add-company',component:AddCompanyComponent},
    {path:'delete/:id',component:DeletecompanyComponent},
    {path:'update/:id',component:UpdateCompanyComponent}
];
