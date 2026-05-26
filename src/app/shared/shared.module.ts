import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { MathJaxParagraphComponent } from '../components/math-jax-paragraph/math-jax-paragraph.component';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MathJaxParagraphComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    PageNotFoundComponent,
    MathJaxParagraphComponent
  ]
})
export class SharedModule {}
