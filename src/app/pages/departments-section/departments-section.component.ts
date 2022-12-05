import {Component, HostBinding, OnInit} from '@angular/core';
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute} from "@angular/router";
import {TeacherService} from "../../services/teacher.service";
import {IDepartment} from "../../models/department";

@Component({
  selector: 'app-departments-section',
  templateUrl: './departments-section.component.html',
  styleUrls: ['./departments-section.component.scss']
})
export class DepartmentsSectionComponent implements OnInit {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.department-container') nameBlock = true

  public departments: IDepartment[] = []
  constructor(private DService: DepartmentService,
              private activeRout: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.DService.getAll()
      .subscribe(departments => {
        // @ts-ignore
        for (let department of departments) {
          this.departments.push(department)
        }
      })
  }
}
