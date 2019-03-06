import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component'

const routes: Routes = [
                        { path: '', redirectTo: "/Product", pathMatch: "full"},
                        { path: 'Product', component: ProductComponent },
                        { path: 'Login', component: LoginComponent },
                        { path: 'Details', component: DetailsComponent },
                        { path: 'Cart', component: CartComponent },
                        
                      
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
