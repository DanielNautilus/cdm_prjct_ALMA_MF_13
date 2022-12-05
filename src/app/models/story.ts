import {IReputation} from "./reputation";

export interface IStory {
  id?: number
  author_id: string
  source_id: string //это сурс где распологается данный элемент
  date_creation: string // это не строка а дата
  date_story: string // это не строка а дата
  topic: string
  discipline: string //подумать улучшить - чекай телеф запись туду
  content: string // подумать улучшить - мб тут будет аналог MD редактора....
  reputation: IReputation
}
