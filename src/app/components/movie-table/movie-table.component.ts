import { Movie } from '../../models/movie.model';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { HttpDataService } from '../../services/http-data.service';
import { Router } from '@angular/router';
import * as _ from "lodash";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

  movieData!: Movie;
  @ViewChild('movieForm',{static:false})
  movieForm!: NgForm;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'photo', 'duration', 'genre', 'actions'];
  isEditMode = false;

  constructor(private httpDataService: HttpDataService,private router: Router, private _snackBar: MatSnackBar){
    this.movieData = {} as Movie;
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllMovies();
  }

  getAllMovies(){
    this.httpDataService.getListMovie().subscribe((response: any) =>{
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    })
  }

  onSubmit() {
    if(this.movieForm.form.valid){
      console.log('valid');
      if(this.isEditMode){
        this.updateMovie()
      }else{
        console.log("create")
        this.addMovie();
      }
      this.cancelEdit();

    }else{
      console.log('invalid');
    }
  }

  cancelEdit(){
    this.isEditMode = false;
    this.movieForm.resetForm();
  }
  //delete
  deleteItem(id:any){
    this.httpDataService.deleteItem(id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter((o:any)=>{
        return o.id !== id ? o: false;
      })
    })
    this._snackBar.open('Movie Deleted', 'Close', {
      duration: 2000,

    });

  }

  //add
  addMovie(){
    this.httpDataService.createItem(this.movieData).subscribe((response:any)=>{
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o:any)=>{
        return o;
      })
    })
  }

  editItem(element: any){
    this.movieData = _.cloneDeep(element);
    this.isEditMode = true;

  }

  //update
  updateMovie(){
    this.httpDataService.updateItem(this.movieData.id,this.movieData).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.map((o:any)=>{
        if(o.id === response.id){
          o = response;
        }
        return o;
      })
    })
  }

  new(){
    this.router.navigateByUrl('/newMovie');
  }



}
