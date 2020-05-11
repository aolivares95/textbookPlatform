import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
  loading = false;
  users: User[] = [];
  editorForm: FormGroup;
  outputToUser: HTMLElement;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null),
    });

    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });
  }
  quillOutput(e) {
    console.log(JSON.stringify(e.oldDelta));
  }
  onSubmit(e) {
    this.outputToUser = this.editorForm.controls['editor'].value;
  }
}
