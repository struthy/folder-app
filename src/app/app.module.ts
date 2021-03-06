import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { DatePicker } from "./date-picker/date-picker.component";
import { TreeviewComponent } from "./treeview/treeview.component";
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatTreeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { AppReadingJsonFilesComponent } from "./app-reading-json-files/app-reading-json-files.component";
import { FilterFormComponent } from "./filter-form/filter-form.component";

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    TreeviewComponent,
    AppReadingJsonFilesComponent,
    DatePicker,
    FilterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatTreeModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
