import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { groups } from '../../../data/data';
import { invalidDateValidator } from '../../../core/validators/invalidDate';
import { invalidGroupValidator } from '../../../core/validators/invalidGroup';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent{
  employeeForm!: FormGroup
  groups: string[] = [...groups]
  @ViewChild('dropdown') dropdown!: ElementRef

  constructor(
    private formBuilder: FormBuilder
  ){
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: ['', invalidDateValidator()],
      basicSalary: [0, Validators.pattern('[0-9]*')],
      status: ['Active', Validators.required],
      group: ['', invalidGroupValidator()],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.onChanges()
  }

  onChanges(){
    this.employeeForm.get('group')?.valueChanges.subscribe(val => {
      this.groups = groups.filter(res => res.toLowerCase().includes(val.toLowerCase()))
    })
  }

  onSelectGroup(event: MouseEvent ,group: string){
    event.stopPropagation()

    this.employeeForm.get('group')?.setValue(group)
    console.log(this.employeeForm.value)
    
    this.onHiddenDropDown()
  }

  onSubmit(){
    const data = this.employeeForm.value
    console.log(data)
  }

  onShowDropdown(event: MouseEvent){
    event.stopPropagation()

    this.dropdown.nativeElement.classList.add('flex')
    this.dropdown.nativeElement.classList.remove('hidden')
  }

  onHiddenDropDown(){
    this.dropdown.nativeElement.classList.remove("flex")
    this.dropdown.nativeElement.classList.add("hidden")
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.onHiddenDropDown()
  }

}
