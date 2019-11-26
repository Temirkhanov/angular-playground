import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      {
        id: 1,
        title: "First todo",
        completed: false
      },
      {
        id: 2,
        title: "Second todo",
        completed: false
      },
      {
        id: 3,
        title: "Third todo",
        completed: false
      }
    ];
  }
}
