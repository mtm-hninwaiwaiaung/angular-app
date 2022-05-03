import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';

import { UsernameValidator } from '../../validators/username.validator';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.scss']
})
export class AsyncValidatorComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    userName: ['',
      [Validators.minLength(3), Validators.required],
      [UsernameValidator.createValidator(this.userService)]
    ]
  });
}
