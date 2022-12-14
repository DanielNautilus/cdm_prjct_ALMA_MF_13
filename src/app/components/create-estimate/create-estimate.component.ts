import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IEstimate} from "../../models/estimate";
import {ModalService} from "../../services/modal.service";
import {IUser} from "../../models/user";
import {ITeacher} from "../../models/teacher";
import {ActivatedRoute} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {IInstituteFacultie} from "../../models/institute-facultie";
import {IDepartment} from "../../models/department";
import {TeacherService} from "../../services/teacher.service";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {DepartmentService} from "../../services/department.service";
import {EstimateService} from "../../services/estimate.service";

@Component({
  selector: 'app-create-estimate',
  templateUrl: './create-estimate.component.html',
  styleUrls: ['./create-estimate.component.scss']
})
export class CreateEstimateComponent implements OnInit {
  public teacher!: ITeacher
  public institutefacultie?: IInstituteFacultie
  public department?: IDepartment

  // Не стоит так называть поля формы, сам потом запутаешься, что каждое из низ делает. Юзай нормальные имена
  // Так же советую явно типизировать форму, чтоб IDE подсказывала в случае чего
  form = new FormGroup({
    value1: new FormControl<number>(0),
    value2: new FormControl<number>(0),
    value3: new FormControl<number>(0),
    value4: new FormControl<number>(0),
    value5: new FormControl<number>(0)
  })
  // Спросить как сдалть так - я хз как обходить модалку и получать данные
  // @Input() user?: IUser
  // @Input() teacher?: ITeacher
  @Output() close = new EventEmitter<void>()

  constructor(public MService: ModalService,
              private activeRout: ActivatedRoute,
              private TService: TeacherService,
              private institutionalisesService: InstituteFacultieService,
              private departmentService: DepartmentService,
              private EService: EstimateService) {
  }

  async ngOnInit(): Promise<void> {
    // Ни в коем случае. Функции из lifeCycle не должны ничего возвращать и не должны быть ассинхронными, это может привести к неправильно инициализации компонента и тестировать будет тяжелее
    // Зачем переводить observable в промис? Observable очень мощная концепция и основная для rxjs, соответственно очень важна для ангуляра.
    // Правильнее было бы изучить хотя бы базу rxjs, без этого никак
    this.teacher = await lastValueFrom(this.TService.get(this.activeRout.snapshot.paramMap.get('id')!))
    this.institutefacultie = await lastValueFrom(this.institutionalisesService.get(this.teacher.institute_faculties_id))
    this.department = await lastValueFrom(this.departmentService.get(this.teacher.department_id))
  }

  submit() {
    const estimate: IEstimate = {
      author_id: "f08a1b96-545c-47f2-9e35-25ec647b0b33",
      date_creation: `${new Date().toLocaleDateString()}`,
      // Если использовать formArray вместо formGroup это могло выглядеть так
      // points: form.value
      // Не нужно явно приводить к числу, ибо у тебя и так контрол имеет тип number. Еще один плюс в пользу типизированных форм
      points: [+this.form.value.value1!,
        +this.form.value.value2!,
        +this.form.value.value3!,
        +this.form.value.value5!,
        +this.form.value.value5!],
      source_id: `${this.teacher?.id}`,
      summary_result:
        (+this.form.value.value1!
          + +this.form.value.value2!
          + +this.form.value.value3!
          + +this.form.value.value4!
          + +this.form.value.value5!) / 5
    }

      // Правильная идея
     this.EService.post(estimate).subscribe(()=>this.close.emit())
  }
}
