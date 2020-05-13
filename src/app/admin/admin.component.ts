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
  outputToUser: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null),
      viewOnly: new FormControl(null),
    });
    this.outputToUser = '';
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
    console.log(
      'content: ' +
        JSON.stringify(e.content) +
        ' delta: ' +
        JSON.stringify(e.delta) +
        ' editor (QuillEditorInstance).getText(): ' +
        JSON.stringify(e.editor.getText()) +
        ' html: ' +
        e.html +
        ' oldDelta: ' +
        JSON.stringify(e.oldDelta) +
        ' source: ' +
        e.source +
        ' text:' +
        e.text
    );
    this.outputToUser = e.html;
  }
  onSubmit(e) {
    this.editorForm.controls['viewOnly'].setValue(this.outputToUser);
    console.log(JSON.stringify(e));
  }
}
