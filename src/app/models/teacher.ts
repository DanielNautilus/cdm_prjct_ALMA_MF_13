export interface ITeacher {
  id?: string
  firstName: string
  lastName: string
  surName?: string
  institute_faculties_id: string //not correct
  department_id: string
  image_url: string
  role?: string //должность в сущнисти
  degrees: string //научная степень
}
