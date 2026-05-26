import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MathJaxService } from '../../services/math-jax/math-jax.service';


@Component({
  selector: 'app-math-jax-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './math-jax-paragraph.component.html',
  styleUrl: './math-jax-paragraph.component.css'
})
export class MathJaxParagraphComponent implements AfterViewInit {
  @ViewChild('mathParagraph', { static: false }) paragraphElement!: ElementRef<HTMLElement>;
  @Input({ required: true }) mathString!: string;

  constructor(private mathJaxService: MathJaxService) {}

  ngAfterViewInit(): void {
    this.mathJaxService.getMathJaxLoadedPromise().then(() => {
      if (this.paragraphElement && this.paragraphElement.nativeElement) {
        this.paragraphElement.nativeElement.innerHTML = this.mathString;
        this.mathJaxService.render(this.paragraphElement.nativeElement);
      }
    });
  }
}