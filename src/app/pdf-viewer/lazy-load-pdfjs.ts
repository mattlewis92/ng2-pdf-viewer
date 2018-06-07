import { InjectionToken } from '@angular/core';
import { PDFJSStatic } from 'pdfjs-dist';

export const LAZY_LOAD_PDFJS = new InjectionToken<{PDFJS: PDFJSStatic, PDFJSViewer: any}>('pdfjs lazy loader');
