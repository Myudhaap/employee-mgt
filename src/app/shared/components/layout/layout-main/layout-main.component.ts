import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss'
})
export class LayoutMainComponent {
}
