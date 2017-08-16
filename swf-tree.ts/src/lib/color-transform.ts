import {CaseStyle, DocumentType, IntegerType} from "kryo";
import {Sint16} from "semantic-types";
import {Fixed8P8} from "./fixed-point/fixed8p8";

export interface ColorTransform {
  redMult: Fixed8P8;
  greenMult: Fixed8P8;
  blueMult: Fixed8P8;
  redAdd: Sint16;
  greenAdd: Sint16;
  blueAdd: Sint16;
}

export namespace ColorTransform {
  export interface Json {
    red_mult: number;
    green_mult: number;
    blue_mult: number;
    red_add: number;
    green_add: number;
    blue_add: number;
  }

  export const type: DocumentType<ColorTransform> = new DocumentType<ColorTransform>({
    properties: {
      redMult: {type: Fixed8P8.type},
      greenMult: {type: Fixed8P8.type},
      blueMult: {type: Fixed8P8.type},
      redAdd: {type: new IntegerType()},
      greenAdd: {type: new IntegerType()},
      blueAdd: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
