import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  error = false;
  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
  }
  navToRegister() {
    this.router.navigate(['register'])
  }
  login(username, password) {
    this.authService.login({ username: username, password: password }).subscribe((result) => {
      if (result.message == 'success') {
        sessionStorage.setItem("username", this.username);
        this.router.navigate(['/home']);
      }
      else {
        this.error = true;
      }
    });
  }
}
