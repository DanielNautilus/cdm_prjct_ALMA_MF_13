import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {IInstituteFacultie} from "../../models/institute-facultie";
import {IDepartment} from "../../models/department";
import {DepartmentService} from "../../services/department.service";
import {IAdministration} from "../../models/administration";
import {delay, lastValueFrom} from "rxjs";
import {ITeacher} from "../../models/teacher";
import {TeacherService} from "../../services/teacher.service";

@Component({
  selector: 'app-institute-facultie-detail-page',
  templateUrl: './institute-facultie-detail-page.component.html',
  styleUrls: ['./institute-facultie-detail-page.component.scss']
})
export class InstituteFacultieDetailPageComponent implements OnInit {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.detail-page-container') nameBlock = true

  public instituteFacultie!: IInstituteFacultie
  public departments: Array<IDepartment> = []
  public administration: Array<IAdministration> = []
  public teacher_administration: Array<ITeacher> = []

  constructor(private IFService: InstituteFacultieService,
              private DService: DepartmentService,
              private activeRout: ActivatedRoute,
              private TService: TeacherService) {
  }

  async ngOnInit(): Promise<void> {
    this.instituteFacultie = await lastValueFrom(this.IFService.get(this.activeRout.snapshot.paramMap.get('id')!))
    this.departments = await lastValueFrom(this.DService.getAllByInstituteFacultie(`${this.instituteFacultie.id!}`))
    this.administration = this.instituteFacultie.administration

    // Если такую конструкцию увидят - меня скорее всего убьют, ну а че делать либо тут говнокодить, либо в базе.....
    for (let person of this.administration) {
      this.teacher_administration.push(await lastValueFrom(this.TService.get(person.teacher_id)))
    }
  }

}
