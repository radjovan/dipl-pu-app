import { Injectable } from '@angular/core';

declare global {
  interface Window {
    MathJax?: {
      Hub?: {
        Queue?: (...args: any[]) => void;
      };
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class MathJaxService {
  private mathJaxLoaded: Promise<void>;

  constructor() {
    this.mathJaxLoaded = this.waitForMathJax();
  }

  public getMathJaxLoadedPromise(): Promise<void> {
    return this.mathJaxLoaded;
  }

  private waitForMathJax(): Promise<void> {
    return new Promise((resolve, reject) => {
      const start = Date.now();

      const check = () => {
        if (window.MathJax && window.MathJax.Hub && window.MathJax.Hub.Queue) {
          resolve();
          return;
        }

        if (Date.now() - start > 5000) {
          reject('MathJax did not load in time');
          return;
        }

        window.setTimeout(check, 50);
      };

      check();
    });
  }

  render(nativeElement: HTMLElement): void {
    if (window.MathJax && window.MathJax.Hub && window.MathJax.Hub.Queue) {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, nativeElement]);
    }
  }
}
