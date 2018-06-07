import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
