import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormComponent } from './form/form.component';
import { FormdetailComponent } from './formdetail/formdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FormComponent,
    FormdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: FormComponent },
      { path: 'about', component: FormdetailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
