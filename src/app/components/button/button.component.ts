import { Component,Input } from '@angular/core';
import { HttpSandboxService } from 'src/app/http/http-sandbox.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() text:string='';
@Input() color:string='';

constructor(
  private httpSandBoxService:HttpSandboxService
){

}

}
