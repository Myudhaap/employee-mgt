import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { groups } from '../../../data/data';
import { invalidDateValidator } from '../../../core/validators/invalidDate';
import { invalidGroupValidator } from '../../../core/validators/invalidGroup';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../../states/employee/employee.action';
import { Observable } from 'rxjs';
import { selectError } from '../../../states/auth/auth.selector';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent{
  employeeForm!: FormGroup
  groups: string[] = [...groups]
  @ViewChild('dropdown') dropdown!: ElementRef
  error$!: Observable<string | null>

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private messageService: MessageService,
    private router: Router
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

    this.error$ = this.store.select(selectError)
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
    this.store.dispatch(addEmployee({employee: data}))

    this.error$.subscribe(err => {
      if(err){
        return this.messageService.add({ severity: 'error', summary: 'Error', detail: err });
      }else{
        return this.router.navigate(['/employees'])
      }
    })
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
