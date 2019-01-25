import { Component, Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { BehaviorSubject, Observable, of as observableOf } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Folder Structure";
}
