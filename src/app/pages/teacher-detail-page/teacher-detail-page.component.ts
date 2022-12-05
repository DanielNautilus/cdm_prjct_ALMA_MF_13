import {Component, HostBinding} from '@angular/core';
import {IInstituteFacultie} from "../../models/institute-facultie";
import {IDepartment} from "../../models/department";
import {ITeacher} from "../../models/teacher";
import {TeacherService} from "../../services/teacher.service";
import {lastValueFrom} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {DepartmentService} from "../../services/department.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-teacher-detail-page',
  templateUrl: './teacher-detail-page.component.html',
  styleUrls: ['./teacher-detail-page.component.scss']
})
export class TeacherDetailPageComponent {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.detail-page-container') nameBlock = true

  public teacher!: ITeacher
  public institutefacultie?: IInstituteFacultie
  public department?: IDepartment
  public modal_creation_estimate:boolean = false
  public modal_creation_story:boolean = false
  public modal_creation_comment:boolean = false

  constructor(private TService: TeacherService,
              private institutionalisesService: InstituteFacultieService,
              private departmentService: DepartmentService,
              private activeRout: ActivatedRoute,
              public MService: ModalService) {
  }

  async ngOnInit(): Promise<void> {
    this.teacher = await lastValueFrom(this.TService.get(this.activeRout.snapshot.paramMap.get('id')!))
    this.institutefacultie = await lastValueFrom(this.institutionalisesService.get(this.teacher.institute_faculties_id))
    this.department = await lastValueFrom(this.departmentService.get(this.teacher.department_id))

  }
}
