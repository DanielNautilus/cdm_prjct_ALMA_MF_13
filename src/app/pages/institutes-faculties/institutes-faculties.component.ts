import {Component, HostBinding, OnInit} from '@angular/core';
import {IInstituteFacultie} from "../../models/institute-facultie";
import {ActivatedRoute} from "@angular/router";
import {InstituteFacultieService} from "../../services/institute-facultie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-institutes-faculties',
  templateUrl: './institutes-faculties.component.html',
  styleUrls: ['./institutes-faculties.component.scss']
})
export class InstitutesFacultiesComponent implements OnInit {
  @HostBinding('class.wrapper__content') nameElement = true
  @HostBinding('class.ins-faculties') nameBlock = true

  public institutes: Array<IInstituteFacultie> = []

  private subscription!: Subscription;

  constructor(private route: ActivatedRoute,
              private IFService: InstituteFacultieService) {
  }

  ngOnInit(): void {
    this.IFService.getAll()
      .subscribe((institutes: Array<IInstituteFacultie>) => {
        this.institutes = institutes
        // @ts-ignore
        // for (let institute of institutes) {
        //   this.institutes.push(institute)
        // }
      })
  }

}
