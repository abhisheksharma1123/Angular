import { Component } from '@angular/core';
interface Hero{
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfo = {
    email: '',
    password: '',
  };
  title = 'angular-tour-of-heroes';
  selectedName ?: Hero;
  TITLES:Hero[] = [{"name": "a"}, {"name":"b"}, {"name": "c"}]
  onSelectTitle(title:Hero):void{
    this.selectedName = title;
  } 
  login(userInfo:any){
    if(userInfo){
      alert(JSON.stringify(userInfo))
    }
  }
}