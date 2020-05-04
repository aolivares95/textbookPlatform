import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

//entry point into application

@Component({
  selector: 'app-root', //html tag
  templateUrl: './app.component.html', //html source
  styleUrls: ['./app.component.css'], //app css source
})
export class AppComponent implements OnInit {
  editorForm: FormGroup;
  output: string;

  onSubmit() {
    this.output = this.editorForm.get('editor').value;
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null),
    });
  }
}
