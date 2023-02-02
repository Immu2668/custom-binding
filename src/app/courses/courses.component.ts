import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  
  courses = [
    {
      name: "Angular",
      author: "Imran",
      duration: "4 weeks",
      image: "../../assets/3910937.png",
      type: "Premium",
      price: 5000,
    },
    {
      name: "TypeeScript",
      author: "Ganesh",
      duration: "2 weeks",
      image: "../../assets/7990029.png",
      type: "Free",
      price: 0,
    },
    {
      name: "ReactNative",
      author: "Sagar",
      duration: "8 weeks",
      image: "../../assets/8108708.jpg",
      type: "Premium",
      price: 8000,
    },
    {
      name: "Java",
      author: "Vinay",
      duration: "5 weeks",
      image: "../../assets/383186.jpg",
      type: "Premium",
      price: 3000,
    },
    {
      name: "ReactJS",
      author: "Jeevan",
      duration: "6 weeks",
      image: "../../assets/3949086.png",
      type: "Premium",
      price: 4000,
    },
    {
      name: "Python",
      author: "Rajesh",
      duration: "7 weeks",
      image: "../../assets/2038920.jpg",
      type: "Free",
      price: 0,
    },
    {
      name: "HTML5 & CSS3",
      author: "Mansoor",
      duration: "3 weeks",
      image: "../../assets/8174686.jpg",
      type: "Free",
      price: 0,
    },
    {
      name: "C",
      author: "abc",
      duration: "4 weeks",
      image: "",
      type: "Free",
      price: 0,
    },
    {
      name: "C++",
      author: "def",
      duration: "5 weeks",
      image: "",
      type: "Premium",
      price: 4000,
    },
    {
      name: "Angular",
      author: "Imran",
      duration: "4 weeks",
      image: "../../assets/3910937.png",
      type: "Premium",
      price: 5000,
    },
    {
      name: "TypeeScript",
      author: "Ganesh",
      duration: "2 weeks",
      image: "../../assets/7990029.png",
      type: "Free",
      price: 0,
    },
    {
      name: "ReactNative",
      author: "Sagar",
      duration: "8 weeks",
      image: "../../assets/8108708.jpg",
      type: "Premium",
      price: 8000,
    },
    {
      name: "Java",
      author: "Vinay",
      duration: "5 weeks",
      image: "../../assets/383186.jpg",
      type: "Premium",
      price: 3000,
    },
    {
      name: "ReactJS",
      author: "Jeevan",
      duration: "6 weeks",
      image: "../../assets/3949086.png",
      type: "Premium",
      price: 4000,
    },
    {
      name: "Python",
      author: "Rajesh",
      duration: "7 weeks",
      image: "../../assets/2038920.jpg",
      type: "Free",
      price: 0,
    },
    {
      name: "HTML5 & CSS3",
      author: "Mansoor",
      duration: "3 weeks",
      image: "../../assets/8174686.jpg",
      type: "Free",
      price: 0,
    },
    {
      name: "C",
      author: "abc",
      duration: "4 weeks",
      image: "",
      type: "Free",
      price: 0,
    },
    {
      name: "C++",
      author: "def",
      duration: "5 weeks",
      image: "",
      type: "Premium",
      price: 4000,
    }
  ]

  public tempCourses :any[]=[];
  
  getAllCoursesCount(){
    return this.tempCourses.length;
  }

  getPremiumCoursesCount(){
    return this.tempCourses.filter(course => course.type === 'Premium').length;
  }

  getFreeCoursesCount(){
    return this.tempCourses.filter(course => course.type === 'Free').length;
  }

  selectedOpt: string = "all";

  inSearchValue: string = "";

  onSelectionChange(data:string){
    this.courses.length=0;
    this.selectedOpt = data;  
    if(data=='all'){
      Object.assign(this.courses, this.tempCourses);
    } 
   else Object.assign(this.courses, this.tempCourses.filter(x=>x.type.toLowerCase()==data));  
  }

  onSearch(searchValue: string){
    this.courses.length = 0;
    if(searchValue === ""){
      Object.assign(this.courses, this.tempCourses)
    }
    else{
    Object.assign(this.courses, this.tempCourses.filter(x=>x.name.includes(searchValue)));
    Object.assign(this.courses, this.tempCourses.filter(x=>x.author.includes(searchValue)));
    Object.assign(this.courses, this.tempCourses.filter(x=>x.duration.includes(searchValue)));
    Object.assign(this.courses, this.tempCourses.filter(x=>x.type.includes(searchValue)));
  }
  }

  ngOnInit(): void {
    Object.assign(this.tempCourses, this.courses);
  }

}
