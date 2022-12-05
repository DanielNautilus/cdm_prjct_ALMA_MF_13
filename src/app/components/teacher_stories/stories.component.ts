import {Component} from '@angular/core';
import {IUser} from "../../models/user";
import {IStory} from "../../models/story";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {lastValueFrom} from "rxjs";
import {StoryService} from "../../services/story.service";

export class StoriesTeacherContainer {
  story?: IStory
  author?: IUser

  constructor(stories: IStory,
              author: IUser) {
    this.author = author
    this.story = stories
  }
}

@Component({
  selector: 'app-teacher_stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  public url!: string

  public stories: IStory[] = []

  public commentsTeacherContainer: StoriesTeacherContainer[] = new Array<StoriesTeacherContainer>()


  constructor(private activeRout: ActivatedRoute,
              private SService: StoryService,
              private UService: UserService) {

  }

  async ngOnInit(): Promise<void> {
    // Тут хитрым но глупым способом вырезаем строку
    // @ts-ignore
    this.url = this.activeRout.snapshot['_routerState'].url.split('/')[2];

    this.stories = await lastValueFrom(this.SService.getBySource(this.url))
    for (let story of this.stories) {
      const author = await lastValueFrom(this.UService.get(story.author_id))
      this.commentsTeacherContainer.push(await new StoriesTeacherContainer(story, author))
    }
    console.log(this.commentsTeacherContainer)
    // @ts-ignore
    // console.log(this.commentsTeacherContainer[0].comments.reputation.minus)
  }
}
