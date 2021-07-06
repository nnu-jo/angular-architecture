import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: ()=> import('./feature/students/student.module').then((m) => m.StudentModule)
  },
  // {
  //   path: 'teachers',
  //   loadChildren: ()=> import('./feature/teachers/teacher.module').then(m => m.TeacherModule)
  // },
  // {
  //   path: 'courses',
  //   loadChildren: ()=> import('./feature/courses/course.module').then(m => m.CourseModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
