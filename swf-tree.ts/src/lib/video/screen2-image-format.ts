import {BooleanType, CaseStyle, DocumentType} from "kryo";
import {Screen2ColorDepth} from "./screen2-color-depth";

export interface Screen2ImageFormat {
  colorDepth: Screen2ColorDepth;
  hasDiffBlocks: boolean;
  zlibPrimeCompressCurrent: boolean;
  zlibPrimeCompressPrevious: boolean;
}

export namespace Screen2ImageFormat {
  export interface Json {
    "color-depth": Screen2ColorDepth.Json;
    "has-diff-blocks": boolean;
    "zlib-prime-compress-current": boolean;
    "zlib-prime-compress-previous": boolean;
  }

  export const type: DocumentType<Screen2ImageFormat> = new DocumentType<Screen2ImageFormat>({
    properties: {
      colorDepth: {type: Screen2ColorDepth.type},
      hasDiffBlocks: {type: new BooleanType()},
      zlibPrimeCompressCurrent: {type: new BooleanType()},
      zlibPrimeCompressPrevious: {type: new BooleanType()},
    },
    rename: CaseStyle.KebabCase,
  });
}
