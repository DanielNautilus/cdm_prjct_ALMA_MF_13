import {Component, EventEmitter, Output} from '@angular/core';
import {ITeacher} from "../../models/teacher";
import {IInstituteFacultie} from "../../models/institute-facultie";
import {IDepartment} from "../../models/department";
import {FormControl, FormGroup} from "@angular/forms";
import {ModalService} from "../../services/modal.service";
import {ActivatedRoute} from "@angular/router";
import {TeacherService} from "../../services/teacher.service";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {DepartmentService} from "../../services/department.service";
import {lastValueFrom} from "rxjs";
import {StoryService} from "../../services/story.service";
import {IStory} from "../../models/story";

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.scss']
})
export class CreateStoryComponent {
  public teacher!: ITeacher

  form = new FormGroup({
    date_creation: new FormControl<Date>(new Date()),
    date_story: new FormControl<Date>(new Date()),
    topic: new FormControl<string>(''),
    // TODO: вот тут подумать мб хороший варик сделать дефолтный если есть
    discipline: new FormControl<string>(''),
    content: new FormControl<string>('')
  })
  // Спросить как сдалть так - я хз как обходить модалку и получать данные
  // @Input() user?: IUser
  // @Input() teacher?: ITeacher
  @Output() close = new EventEmitter<void>()

  constructor(private activeRout: ActivatedRoute,
              private TService: TeacherService,
              private SService: StoryService) {
  }

  async ngOnInit(): Promise<void> {
    this.teacher = await lastValueFrom(this.TService.get(this.activeRout.snapshot.paramMap.get('id')!))
  }

  submit() {
    const story: IStory = {
      author_id: `f08a1b96-545c-47f2-9e35-25ec647b0b33`,
      source_id: `${this.teacher?.id}` ,//это сурс где распологается данный элемент
      date_creation: `${this.form.value.date_creation}`, // это не строка а дата
      date_story: `${this.form.value.date_story!}`, // это не строка а дата
      topic: `${this.form.value.topic}`,
      discipline: `${this.form.value.discipline}`, //подумать улучшить - чекай телеф запись туду
      content: `${this.form.value.content}`, // подумать улучшить - мб тут будет аналог MD редактора....
      reputation: {
        plus: 0,
        minus: 0
      }
    }

    this.SService.post(story).subscribe(()=>this.close.emit())
  }
}
