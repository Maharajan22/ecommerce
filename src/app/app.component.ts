import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  UserData: any[] = [];
  SignUp: any = {
    Id: 0,
    Name: '',
    Email: '',
    Password: 'pas',
  };
  name: any = /^[a-zA-Z]{2,30}$/;
  email_pattern: any = /^[A-Za-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,6}$/;
  title = 'My Task';
  theam = 'red';
  pass = "pas";
  status = "weak";
  ngDoCheck() {
    if (this.pass.length == 0) {
      this.status = ''
      this.theam = ''
    }
    else if (this.pass.length < 5) {
      this.status = 'Weak'
      this.theam = 'red'
      console.log("weak");
    }
    else if (this.pass.length >= 5 && this.pass.length <= 7) {
      this.status = 'Normal'
      this.theam = 'blue'
      console.log("normal");
    }
    else if (this.pass.length > 7) {
      this.status = 'Strong'
      this.theam = 'green'
      console.log("strong");
    }
  }

  ngOnInit() {
    const data: any = JSON.parse(localStorage.getItem('SignUp_Data')!);
    for (let i = 0; i < data.length; i += 1) {
      this.UserData.push(data[i]);
    }
  }

  register() {

    if (this.SignUp.Name.match(this.name)) {

      if (this.SignUp.Email.match(this.email_pattern)) {

        this.SignUp.Id = this.UserData.length + 1;
        this.UserData.push(this.SignUp);
        // console.log(this.UserArr);
        localStorage.setItem('SignUp_Data', JSON.stringify(this.UserData));
        sessionStorage.setItem('SignUp_Data', JSON.stringify(this.UserData));
        alert("Register Successfully");

        this.SignUp = {
          Id: 0,
          Name: '',
          Email: '',
          Password: 'pas',
        };
      }
      else {
        alert("Please Enter Valid Email");
      }
    }
    else {
      alert("Please Enter Valid Name");
    }
  };
}

function register() {
  throw new Error('Function not implemented.');
}

