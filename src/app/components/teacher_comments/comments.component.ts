import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../models/comment";
import {IUser} from "../../models/user";
import {lastValueFrom} from "rxjs";
import {CommentService} from "../../services/comment.service";
import {UserService} from "../../services/user.service";

export class CommentsTeacherContainer {
  comment?: IComment
  author?: IUser

  constructor(comments: IComment,
              author: IUser) {
    this.author = author
    this.comment = comments
  }
}

@Component({
  selector: 'app-teacher_comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  public url!: string

  public comments: IComment[] = []

  public commentsTeacherContainer: CommentsTeacherContainer[] = new Array<CommentsTeacherContainer>()


  constructor(private activeRout: ActivatedRoute,
              private CService: CommentService,
              private UService: UserService) {

  }

  async ngOnInit(): Promise<void> {

    // Если тебе нужно взять какие-либо данные с урла, есть способ проще
    // https://angular.io/guide/router
    // Тут хитрым но глупым способом вырезаем строку
    // @ts-ignore
    this.url = this.activeRout.snapshot['_routerState'].url.split('/')[2];

    this.comments = await lastValueFrom(this.CService.getBySource(this.url))
    for (let comment of this.comments) {
      const author = await lastValueFrom(this.UService.get(comment.author_id))
      this.commentsTeacherContainer.push(await new CommentsTeacherContainer(comment, author))
    }
    // @ts-ignore
    // console.log(this.commentsTeacherContainer[0].comments.reputation.minus)
  }
}
