import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = [
    {
      "id": 20,
      "name": "Henson Whitney",
      "age": 40,
      "course": 4,
      "email": "hensonwhitney@neteria.com",
      "phone": "+7 (853) 564-3424"
   },
   {
      "id": 3,
      "name": "Esperanza Moran",
      "age": 38,
      "course": 1,
      "email": "esperanzamoran@neteria.com",
      "phone": "+7 (886) 516-3566"
   },
   {
      "id": 5,
      "name": "Fields Whitehead",
      "age": 37,
      "course": 3,
      "email": "fieldswhitehead@neteria.com",
      "phone": "+7 (868) 455-2852"
   },
   {
      "id": 6,
      "name": "Willa Lewis",
      "age": 38,
      "course": 1,
      "email": "willalewis@neteria.com",
      "phone": "+7 (815) 488-3005"
   },
   {
      "id": 4,
      "name": "Kara Pena",
      "age": 37,
      "course": 5,
      "email": "karapena@neteria.com",
      "phone": "+7 (978) 414-2575"
   },
   {
    "id": 16,
    "name": "Dianne Galloway",
    "age": 20,
    "course": 1,
    "email": "diannegalloway@neteria.com",
    "phone": "+7 (866) 549-2320"
 },
 {
    "id": 15,
    "name": "Leonard Stout",
    "age": 39,
    "course": 1,
    "email": "leonardstout@neteria.com",
    "phone": "+7 (879) 418-2955"
 },
 {
    "id": 37,
    "name": "Burgess Trujillo",
    "age": 29,
    "course": 4,
    "email": "burgesstrujillo@neteria.com",
    "phone": "+7 (875) 582-3699"
 },
 {
    "id": 11,
    "name": "Winters Knowles",
    "age": 23,
    "course": 2,
    "email": "wintersknowles@neteria.com",
    "phone": "+7 (978) 424-3273"
 },
 {
    "id": 18,
    "name": "Katy Avila",
    "age": 29,
    "course": 1,
    "email": "katyavila@neteria.com",
    "phone": "+7 (995) 460-2520"
 },
 {
    "id": 5,
    "name": "Lara Fisher",
    "age": 36,
    "course": 3,
    "email": "larafisher@neteria.com",
    "phone": "+7 (865) 488-3240"
 }
  ];

  constructor() { }

  getStudents() {
    return this.students;
  }
}