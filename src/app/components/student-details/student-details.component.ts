import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/students';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  students: any[];
  student: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  ngOnInit() {
    const studentId =+ this.route.snapshot.paramMap.get('id')!;
    this.student = this.students.find(student => student.id === studentId);
  }
}
