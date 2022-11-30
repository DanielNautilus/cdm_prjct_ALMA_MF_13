import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DepartmentsSectionComponent} from "./pages/departments-section/departments-section.component";
import {InstitutesFacultiesComponent} from "./pages/institutes-faculties/institutes-faculties.component";
import {InstituteFacultieDetailPageComponent} from "./pages/institute-facultie-detail-page/institute-facultie-detail-page.component";
import {RatingsComponent} from "./pages/ratings/ratings.component";
import {TeachersSectionComponent} from "./pages/teachers-section/teachers-section.component";
import {TeacherDetailPageComponent} from "./pages/teacher-detail-page/teacher-detail-page.component";
import {UserDetailPageComponent} from "./pages/user-detail-page/user-detail-page.component";
import {DepartmentDetailPageComponent} from "./pages/department-detail-page/department-detail-page.component";

const routes: Routes = [
  //Todo: сделать гуарды, продемать как будет выглядеть стр конкретной сущности
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'departments',
    component: DepartmentsSectionComponent
  },
  {
    path: 'department',
    component: DepartmentDetailPageComponent
  },
  {
    path: 'institutes-faculties',
    component: InstitutesFacultiesComponent
  },
  {
    path: 'institute-facultie',
    component: InstituteFacultieDetailPageComponent
  },
  {
    path: 'rating',
    component: RatingsComponent
  },
  {
    path: 'teachers',
    component: TeachersSectionComponent
  },
  {
    path: 'teacher',
    component: TeacherDetailPageComponent
  },
  {
    path: 'user',
    component: UserDetailPageComponent
  }
];
//Todo: каждая помеченная сущность является просто наследником от родителя выше
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
