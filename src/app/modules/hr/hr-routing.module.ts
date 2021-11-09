import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DesignationComponent} from "./components/designation/designation.component";
import {DepartmentComponent} from "./components/department/department.component";
import {EmployeeComponent} from "./components/employee/employee.component";
import {IndexComponent} from "./components/index/index.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'emp', component: EmployeeComponent},
  {path: 'dept', component: DepartmentComponent},
  {path: 'desg', component: DesignationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
