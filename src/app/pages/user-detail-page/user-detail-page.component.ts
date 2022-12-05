import {Component} from '@angular/core';
import {ITeacher} from "../../models/teacher";
import {IInstituteFacultie} from "../../models/institute-facultie";
import {IDepartment} from "../../models/department";
import {TeacherService} from "../../services/teacher.service";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {IUser} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent {
  public user?: IUser

  constructor(private UService: UserService,
              private activeRout: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.user = await lastValueFrom(this.UService.get(this.activeRout.snapshot.paramMap.get('id')!))
    // this.institutefacultie = await lastValueFrom(this.institutionalisesService.get(this.teacher.institute_faculties_id))
    // this.department = await lastValueFrom(this.departmentService.get(this.teacher.department_id))

  }
}
