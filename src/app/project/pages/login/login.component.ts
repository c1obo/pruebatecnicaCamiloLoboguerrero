import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogged=this.authService.logout()
  constructor(private authService: AuthService,private route: Router) {}
  usuario={
    email:'',
    password:''
  }

  ngOnInit(): void {
  }
  ingresar() {
    console.log(this.usuario);
    const{email,password} = this.usuario;
    this.authService.login(email,password).then((result) => {
      console.log("se logeo :",result);
      if(result != undefined) {
        console.log("entre a el router");

        this.route.navigate(['/tabla']);
      }else{
        console.log("El usuario esta mal");

      }
    })
  }

  logout() {
    this.route.navigate(['/login']);
    this.authService.logout();


  }

}
