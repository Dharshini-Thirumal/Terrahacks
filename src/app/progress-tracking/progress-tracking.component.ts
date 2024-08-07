import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress-tracking',
  templateUrl: './progress-tracking.component.html',
  styleUrls: ['./progress-tracking.component.css']
})
export class ProgressTrackingComponent implements OnInit {
  progressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.progressForm = this.fb.group({
      progress: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get progress() {
    return this.progressForm?.get('progress');
  }

  onSubmit() {
    if (this.progressForm?.valid) {
      console.log('Form submitted:', this.progressForm?.value);
    }
  }
}