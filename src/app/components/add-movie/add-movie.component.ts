import { Component,ViewChild } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { HttpDataService } from '../../services/http-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  movieData!: Movie;
  dataSource = new MatTableDataSource();
  @ViewChild('movieForm',{static:false})
  movieForm!: NgForm;

  constructor(private httpDataService: HttpDataService,private router: Router){
    this.movieData = {} as Movie;
  }

  onSubmit() {
    if(this.movieForm.form.valid){
      console.log('valid');
      console.log("create")
      this.addMovie();
    }else{
      console.log('invalid');
    }
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


}
