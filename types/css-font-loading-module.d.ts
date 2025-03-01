// This file provides type definitions for the CSS Font Loading Module
// See: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API

interface FontFaceDescriptors {
  style?: string;
  weight?: string;
  stretch?: string;
  unicodeRange?: string;
  variant?: string;
  featureSettings?: string;
  display?: string;
}

interface FontFace {
  family: string;
  style: string;
  weight: string;
  stretch: string;
  unicodeRange: string;
  variant: string;
  featureSettings: string;
  display: string;
  load(): Promise<FontFace>;
  loaded: Promise<FontFace>;
  status: string;
}

interface FontFaceSet extends Set<FontFace> {
  readonly ready: Promise<FontFaceSet>;
  readonly status: string;
  check(font: string, text?: string): boolean;
  load(font: string, text?: string): Promise<FontFace[]>;
}

interface Document {
  fonts: FontFaceSet;
}

declare module 'css-font-loading-module' {
  // This is an empty module declaration to satisfy TypeScript
} 