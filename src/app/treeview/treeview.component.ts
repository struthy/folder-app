import { NestedTreeControl } from "@angular/cdk/tree";
import { Component, Injectable } from "@angular/core";
import { DataService } from "../data.service";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { BehaviorSubject, Observable, of as observableOf } from "rxjs";
import AppJson from "../../assets/app.json";

export class FileNode {
  children: FileNode[];
  filename: string;
  date: string;
  type: any;
}

@Component({
  selector: "TreeviewComponent",
  templateUrl: "./treeview.component.html",
  styleUrls: ["./treeview.component.scss"]
})
export class TreeviewComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => (this.nestedDataSource.data = data));

    this.dataChange.next([
      {
        filename: "Expenses",
        date: "2015-05-02",
        type: "",
        children: [
          {
            filename: "Expenses claim form",
            date: "2017-05-02",
            type: "doc",
            children: []
          },
          {
            filename: "Fuel allowances",
            date: "2017-05-03",
            type: "doc",
            children: []
          }
        ]
      },

      {
        filename: "Misc",
        date: "2017-05-03",
        type: "",
        children: [
          {
            filename: "Christmass party",
            date: "2017-12-01",
            type: "doc",
            children: []
          },
          {
            filename: "Welcome to the company",
            date: "2015-04-24",
            type: "mov",
            children: []
          }
        ]
      },

      {
        filename: "Employee handbook",
        date: "2017-01-06",
        type: "pdf",
        children: []
      },
      {
        filename: "Public Holidays policy",
        date: "2016-12-06",
        type: "pdf",
        children: []
      },
      {
        filename: "Cost centers",
        date: "2016-08-12",
        type: "csv",
        children: []
      }
    ]);
  }

  private _getChildren = (node: FileNode) => {
    return observableOf(node.children);
  };

  hasNestedChild = (_: number, nodeData: FileNode) => {
    return !nodeData.type;
  };
}
