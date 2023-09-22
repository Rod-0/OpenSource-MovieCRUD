import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
      BrowserModule,
      MatButtonModule,
      MatTableModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      MatSelectModule

    ],
    exports: [
      BrowserModule,
      MatButtonModule,
      MatTableModule,
      MatIconModule,
      MatInputModule,
      MatToolbarModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      MatSelectModule
    ]
  })
  export class MaterialModule { }