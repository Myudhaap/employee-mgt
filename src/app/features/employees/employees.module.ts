import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { TableModule } from 'primeng/table';
import {PaginatorModule } from 'primeng/paginator';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
import { ConvertDatePipe } from '../../core/pipes/convert-date.pipe';
import { CurrencyRupiahPipe } from '../../core/pipes/currency-rupiah.pipe';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [EmployeesComponent, DetailComponent],
  imports: [
    TruncatePipe,
    ConvertDatePipe,
    CurrencyRupiahPipe,
    CommonModule,
    EmployeesRoutingModule,
    TableModule,
    PaginatorModule,
    TagModule, 
    IconFieldModule, 
    InputTextModule, 
    InputIconModule, 
    MultiSelectModule, 
    DropdownModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class EmployeesModule { }
