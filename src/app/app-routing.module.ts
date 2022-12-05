import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DepartmentsSectionComponent} from "./pages/departments-section/departments-section.component";
import {InstitutesFacultiesComponent} from "./pages/institutes-faculties/institutes-faculties.component";
import {
  InstituteFacultieDetailPageComponent
} from "./pages/institute-facultie-detail-page/institute-facultie-detail-page.component";
import {RatingsComponent} from "./pages/ratings/ratings.component";
import {TeachersSectionComponent} from "./pages/teachers-section/teachers-section.component";
import {TeacherDetailPageComponent} from "./pages/teacher-detail-page/teacher-detail-page.component";
import {UserDetailPageComponent} from "./pages/user-detail-page/user-detail-page.component";
import {DepartmentDetailPageComponent} from "./pages/department-detail-page/department-detail-page.component";
import {EstimatesComponent} from "./components/teacher_estimates/estimates.component";
import {StoriesComponent} from "./components/teacher_stories/stories.component";
import {CommentsComponent} from "./components/teacher_comments/comments.component";

const routes: Routes = [
  //Todo: сделать гуарды, продумать как будет выглядеть стр конкретной сущности
  {
    path: '',
    component: MainPageComponent,
    pathMatch: "full"
  },
  {
    path: 'departments',
    component: DepartmentsSectionComponent,
    data: {title: 'ALMA MF 13 | Секция кафедр'},
  },
  {
    path: 'departments/:id',
    component: DepartmentDetailPageComponent,
    children: [
      {
        path: 'null',
        redirectTo: 'departments'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'institutes-faculties',
    component: InstitutesFacultiesComponent,
    data: {title: 'ALMA MF 13 | Секция институтов и факультетов'}
  },
  {
    path: 'institutes-faculties/:id',
    component: InstituteFacultieDetailPageComponent,
    children: [
      {
        path: 'null',
        redirectTo: 'institutes-faculties'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'rating',
    component: RatingsComponent,
    data: {title: 'ALMA MF 13 | Рейтинг'},
    children: [
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'teachers',
    component: TeachersSectionComponent,
    data: {title: 'ALMA MF 13 | Секция преподавателей'},
    children: [
      {
        path: '**',
        redirectTo: 'teachers'
      }
    ]
  },
  {
    path: 'teachers/:id',
    component: TeacherDetailPageComponent,
    children: [
      {
        path: 'estimates',
        component: EstimatesComponent
      },
      {
        path: 'stories',
        component: StoriesComponent
      },
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: '**',
        redirectTo: 'teachers'
      }
    ]
  },
  {
    path: 'user/:id',
    component: UserDetailPageComponent,
    children: [
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

//Todo: скролл из за конфига конеш лучше стал выглядить....но чёт он резкий, по ищи как еще можно поправить
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
