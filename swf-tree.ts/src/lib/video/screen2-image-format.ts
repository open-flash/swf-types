import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Screen2ColorDepth, Screen2ColorDepth } from "./screen2-color-depth";

export interface Screen2ImageFormat {
  colorDepth: Screen2ColorDepth;
  hasDiffBlocks: boolean;
  zlibPrimeCompressCurrent: boolean;
  zlibPrimeCompressPrevious: boolean;
}

export const $Screen2ImageFormat: DocumentIoType<Screen2ImageFormat> = new DocumentType<Screen2ImageFormat>({
  properties: {
    colorDepth: {type: $Screen2ColorDepth},
    hasDiffBlocks: {type: $Boolean},
    zlibPrimeCompressCurrent: {type: $Boolean},
    zlibPrimeCompressPrevious: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
