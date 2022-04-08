import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  username = "";
  password = "";
  error = false;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}
  navToLogin() {
    this.router.navigate(["login"]);
  }
  register(username, password) {
    this.authService
      .register({ username: username, password: password })
      .subscribe((result) => {
        if (result.message == "success") {
          sessionStorage.setItem("username", this.username);
          this.router.navigate(["/login"]);
        }
        else {
          this.error = true;
        }
      });
  }
}
