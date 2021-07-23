import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $BlendMode, BlendMode } from "../blend-mode.js";
import { $ColorTransformWithAlpha, ColorTransformWithAlpha } from "../color-transform-with-alpha.js";
import { $Filter, Filter } from "../filter.js";
import { $Matrix, Matrix } from "../matrix.js";

export interface ButtonRecord {
  stateUp: boolean;
  stateOver: boolean;
  stateDown: boolean;
  stateHitTest: boolean;
  characterId: Uint16;
  depth: Uint16;
  matrix: Matrix;
  colorTransform: ColorTransformWithAlpha;
  filters: Filter[];
  blendMode: BlendMode;
}

export const $ButtonRecord: RecordIoType<ButtonRecord> = new RecordType<ButtonRecord>({
  properties: {
    stateUp: {type: $Boolean},
    stateOver: {type: $Boolean},
    stateDown: {type: $Boolean},
    stateHitTest: {type: $Boolean},
    characterId: {type: $Uint16},
    depth: {type: $Uint16},
    matrix: {type: $Matrix},
    colorTransform: {type: $ColorTransformWithAlpha},
    filters: {type: new ArrayType({itemType: $Filter, maxLength: Infinity})},
    blendMode: {type: $BlendMode},
  },
  changeCase: CaseStyle.SnakeCase,
});
