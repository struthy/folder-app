import { Component, OnInit } from "@angular/core";
import AppJson from "../../assets/app.json";

@Component({
  selector: "app-app-reading-json-files",
  templateUrl: "./app-reading-json-files.component.html",
  styleUrls: ["./app-reading-json-files.component.scss"]
})
export class AppReadingJsonFilesComponent implements OnInit {
  constructor() {
    console.log("Reading local json files");
    console.log(AppJson);
  }

  ngOnInit() {}
}
