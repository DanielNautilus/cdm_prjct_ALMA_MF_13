import {Component, HostBinding} from '@angular/core';
import {ITeacher} from "../../models/teacher";
import {TeacherService} from "../../services/teacher.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-teachers-section',
  templateUrl: './teachers-section.component.html',
  styleUrls: ['./teachers-section.component.scss']
})
export class TeachersSectionComponent {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.teachers-container') nameBlock = true

  public teachers!: Array<ITeacher>


  constructor(private TService: TeacherService) {
  }

  async ngOnInit(): Promise<void> {
    this.teachers = await lastValueFrom(this.TService.getAll())
  }
}
