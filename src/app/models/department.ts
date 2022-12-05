import {IAdministration} from "./administration";

export interface IDepartment {
  id?: string
  name: string
  abbreviation: string
  orientation: string
  image_url:string
  institute_faculties_id: string
  administration: IAdministration[]
}
