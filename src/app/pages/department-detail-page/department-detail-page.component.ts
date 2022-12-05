import {Component, HostBinding} from '@angular/core';
import {IDepartment} from "../../models/department";
import {IAdministration} from "../../models/administration";
import {ITeacher} from "../../models/teacher";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute} from "@angular/router";
import {TeacherService} from "../../services/teacher.service";
import {lastValueFrom} from "rxjs";
import {IInstituteFacultie} from "../../models/institute-facultie";

@Component({
  selector: 'app-department-detail-page',
  templateUrl: './department-detail-page.component.html',
  styleUrls: ['./department-detail-page.component.scss']
})
export class DepartmentDetailPageComponent {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.detail-page-container') nameBlock = true
  public instituteFacultie!: IInstituteFacultie
  public department!: IDepartment
  public administration: Array<IAdministration> = []
  public teacher_administration: Array<ITeacher> = []

  constructor(private IFService: InstituteFacultieService,
              private DService: DepartmentService,
              private activeRout: ActivatedRoute,
              private TService: TeacherService) {
  }

  async ngOnInit(): Promise<void> {
    this.department = await lastValueFrom(this.DService.get(this.activeRout.snapshot.paramMap.get('id')!))
    this.administration = this.department.administration
    this.instituteFacultie = await lastValueFrom(this.IFService.get(this.department.institute_faculties_id))
    // Если такую конструкцию увидят - меня скорее всего убьют, ну а че делать либо тут говнокодить, либо в базе.....
    for (let person of this.administration) {
      this.teacher_administration.push(await lastValueFrom(this.TService.get(person.teacher_id)))
    }
  }
}
