import { $Sint16 } from "kryo/builtins/sint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16 } from "semantic-types";
import { Sfixed8P8 } from "./fixed-point/sfixed8p8";

export interface ColorTransform {
  redMult: Sfixed8P8;
  greenMult: Sfixed8P8;
  blueMult: Sfixed8P8;
  redAdd: Sint16;
  greenAdd: Sint16;
  blueAdd: Sint16;
}

export const $ColorTransform: DocumentIoType<ColorTransform> = new DocumentType<ColorTransform>({
  properties: {
    redMult: {type: Sfixed8P8},
    greenMult: {type: Sfixed8P8},
    blueMult: {type: Sfixed8P8},
    redAdd: {type: $Sint16},
    greenAdd: {type: $Sint16},
    blueAdd: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
