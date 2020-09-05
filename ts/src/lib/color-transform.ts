import { $Sint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint16 } from "semantic-types";
import { Sfixed8P8 } from "./fixed-point/sfixed8p8.js";

export interface ColorTransform {
  redMult: Sfixed8P8;
  greenMult: Sfixed8P8;
  blueMult: Sfixed8P8;
  redAdd: Sint16;
  greenAdd: Sint16;
  blueAdd: Sint16;
}

export const $ColorTransform: RecordIoType<ColorTransform> = new RecordType<ColorTransform>(() => ({
  properties: {
    redMult: {type: Sfixed8P8},
    greenMult: {type: Sfixed8P8},
    blueMult: {type: Sfixed8P8},
    redAdd: {type: $Sint16},
    greenAdd: {type: $Sint16},
    blueAdd: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
