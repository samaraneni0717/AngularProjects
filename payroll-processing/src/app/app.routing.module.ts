import{NgModule} from '@angular/core';
import {Routes,RouterModule, Route} from '@angular/router';

import {PaycriterialistComponent} from '../app/paycriteria/paycriterialist/paycriterialist.component'

const routes:Routes =[
    {path:'paycriterialist',component:PaycriterialistComponent },
    {path:'',redirectTo:'paycriterialist',pathMatch:'full'}]


@NgModule({
    imports:[
    RouterModule.forRoot(routes,{useHash:true})
]})
export class AppRoutingModule{    
}