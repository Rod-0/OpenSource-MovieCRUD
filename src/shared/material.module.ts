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
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule} from '@angular/material/snack-bar';

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
      MatSelectModule,
      MatCardModule,
      MatSnackBarModule

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
      MatSelectModule,
      MatCardModule,
      MatSnackBarModule
    ]
  })
  export class MaterialModule { }
