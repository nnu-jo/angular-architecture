import { NgModule } from "@angular/core";
import {StudentsListComponent} from './students-list/students-list.component'
import { StudentRoutingModule } from "./sutdents-routing.modeule";
@NgModule({
    declarations:[
        StudentsListComponent
    ],
    imports: [
        StudentRoutingModule
    ]
    
})
export class StudentModule{}