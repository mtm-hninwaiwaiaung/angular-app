import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-assignment-day23',
  templateUrl: './assignment-day23.component.html',
  styleUrls: ['./assignment-day23.component.scss']
})
export class AssignmentDay23Component implements OnInit {
  private userList = [
    { id: 1, name: 'Kyaw Kyaw', email: 'kyawkyaw@gmail.com', password: '12345', age: 24, hobby: "swimming, reading" },
    { id: 2, name: 'Aye Aye', email: 'ayeaye@gmail.com', password: '1234', age: 28, hobby: "cooking, eating" },
    { id: 3, name: 'Tun Tun', email: 'tuntun@gmail.com', password: 'test', age: 20, hobby: "singing, dancing" },
    { id: 4, name: 'hwwa', email: 'hwwa@gmail.com', password: 'test', age: 20, hobby: "singing, dancing" }
  ];
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userSvc: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get regForm() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const inputEmail = this.loginForm.value['email'];
    const inputPassword = this.loginForm.value['password'];
    const filterResult = this.userList.filter((eachUser) => {
      return eachUser.email === inputEmail && eachUser.password === inputPassword
    });
    if (filterResult.length <= 0) {
      this.userSvc.setAuth(false);
      alert('invalid info');
    } else {
      this.userSvc.setAuth(true);
      this.router.navigateByUrl('/member/register');
    }
  }

}
