import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';
import { LAZY_LOAD_PDFJS } from './pdf-viewer/lazy-load-pdfjs';

function lazyLoadPDFJS() {
  return async () => {
    const [PDFJS, PDFJSViewer] = await Promise.all(
      [
        import('pdfjs-dist/build/pdf'),
        import('pdfjs-dist/web/pdf_viewer')
      ]
    );
    return {PDFJS, PDFJSViewer}
  };
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatToolbarModule,

        PdfViewerModule.forRoot({
          provide: LAZY_LOAD_PDFJS,
          useFactory: lazyLoadPDFJS
        })
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
