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
    new Person("John", "Doe", "jdoe@gmail.com", 809),
    new Person("Tommy", "Ruto", "tru@gmail.com", 915),
    new Person("Utro", "Nunes", "ununes@yahoo.com", 504),
    new Person("Rome", "Luqo", "romelu@yahoo.com", 918),
    new Person("Jay", "Aras", "araj@yahoo.com", 658)
  ];
  constructor() {}

  ngOnInit() {}
}
