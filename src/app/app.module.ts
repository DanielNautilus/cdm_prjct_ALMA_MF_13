import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DepartmentDetailPageComponent} from './pages/department-detail-page/department-detail-page.component';
import {DepartmentsSectionComponent} from './pages/departments-section/departments-section.component';
import {InstitutesFacultiesComponent} from './pages/institutes-faculties/institutes-faculties.component';
import {
  InstituteFacultieDetailPageComponent
} from './pages/institute-facultie-detail-page/institute-facultie-detail-page.component';
import {RatingsComponent} from './pages/ratings/ratings.component';
import {TeachersSectionComponent} from './pages/teachers-section/teachers-section.component';
import {TeacherDetailPageComponent} from './pages/teacher-detail-page/teacher-detail-page.component';
import {UserDetailPageComponent} from './pages/user-detail-page/user-detail-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import {HttpClientModule} from "@angular/common/http";
import { EstimatesComponent } from './components/teacher_estimates/estimates.component';
import { StoriesComponent } from './components/teacher_stories/stories.component';
import { CommentsComponent } from './components/teacher_comments/comments.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateEstimateComponent } from './components/create-estimate/create-estimate.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentDetailPageComponent,
    DepartmentsSectionComponent,
    InstitutesFacultiesComponent,
    InstituteFacultieDetailPageComponent,
    RatingsComponent,
    TeachersSectionComponent,
    TeacherDetailPageComponent,
    UserDetailPageComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FilterComponent,
    EstimatesComponent,
    StoriesComponent,
    CommentsComponent,
    ModalComponent,
    CreateEstimateComponent,
    AuthentificationComponent,
    CreateStoryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
