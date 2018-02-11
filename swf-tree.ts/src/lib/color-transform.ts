import { $Sint16 } from "kryo/builtins/sint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16 } from "semantic-types";
import { Fixed8P8 } from "./fixed-point/fixed8p8";

export interface ColorTransform {
  redMult: Fixed8P8;
  greenMult: Fixed8P8;
  blueMult: Fixed8P8;
  redAdd: Sint16;
  greenAdd: Sint16;
  blueAdd: Sint16;
}

export const $ColorTransform: DocumentIoType<ColorTransform> = new DocumentType<ColorTransform>({
  properties: {
    redMult: {type: Fixed8P8},
    greenMult: {type: Fixed8P8},
    blueMult: {type: Fixed8P8},
    redAdd: {type: $Sint16},
    greenAdd: {type: $Sint16},
    blueAdd: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
