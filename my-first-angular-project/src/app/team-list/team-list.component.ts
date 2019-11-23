import { Component, OnInit } from "@angular/core";
import { Person } from "./person";

@Component({
  selector: "app-team-list",
  templateUrl: "./team-list.component.html",
  styleUrls: ["./team-list.component.css"]
})
export class TeamListComponent implements OnInit {
  // Create an array of objects
  personList: Person[] = [
    new Person("John", "Doe", "jdoe@gmail.com"),
    new Person("Tommy", "Ruto", "tru@gmail.com"),
    new Person("Utro", "Rewq", "reure@yahoo.com")
  ];
  constructor() {}

  ngOnInit() {}
}
