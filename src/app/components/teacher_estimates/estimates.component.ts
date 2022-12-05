import {Component} from '@angular/core';
import {IUser} from "../../models/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {lastValueFrom} from "rxjs";
import {IEstimate} from "../../models/estimate";
import {EstimateService} from "../../services/estimate.service";

export class EstimatesTeacherContainer {
  estimate?: IEstimate
  author?: IUser
  constructor(estimate: IEstimate,
              author: IUser) {
    this.author = author
    this.estimate = estimate
  }
}

@Component({
  selector: 'app-teacher_estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.scss']
})
export class EstimatesComponent {
  public url!: string

  public estimates: IEstimate[] = []

  public estimatesTeacherContainer: EstimatesTeacherContainer[] = new Array<EstimatesTeacherContainer>()

  public starsNumbers?: Array<number>

  constructor(private activeRout: ActivatedRoute,
              private EService: EstimateService,
              private UService: UserService) {

  }

  async ngOnInit(): Promise<void> {
    this.starsNumbers = Array(5).fill(0).map((x,i)=>i);
    // Тут хитрым но глупым способом вырезаем строку
    // @ts-ignore
    this.url = this.activeRout.snapshot['_routerState'].url.split('/')[2];
    this.estimates = await lastValueFrom(this.EService.getBySource(this.url))
    for (let estimate of this.estimates) {
      const author = await lastValueFrom(this.UService.get(estimate.author_id))
      this.estimatesTeacherContainer.push(await new EstimatesTeacherContainer(estimate, author))
    }
    console.log(this.starsNumbers)
    // @ts-ignore
    // console.log(this.commentsTeacherContainer[0].comments.reputation.minus)
  }
}
