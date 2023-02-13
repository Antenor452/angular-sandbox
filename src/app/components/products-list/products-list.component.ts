import { Component,OnInit} from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HttpSandboxService } from 'src/app/http/http-sandbox.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products?:Product[];
  isLoading:boolean = false;

  constructor(private httpSandBoxService:HttpSandboxService){

  }

  ngOnInit(){
    this.tryGetRequest();
  }

  tryGetRequest(){
    console.log('Started to fetch');
    this.isLoading = true;
     this.httpSandBoxService.sampleGet().subscribe((httpResponse:HttpResponse<Record<string,any>>)=>{
      this.isLoading= false;

     if(httpResponse.body!=null){

     }


     },);
    }
}
