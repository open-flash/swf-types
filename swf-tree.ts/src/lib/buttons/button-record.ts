import { ArrayType, BooleanType, CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint16 } from "semantic-types";
import { BlendMode } from "../blend-mode";
import { ColorTransformWithAlpha } from "../color-transform-with-alpha";
import { Filter } from "../filter";
import { Matrix } from "../matrix";

export interface ButtonRecord {
  stateHitTest: boolean;
  stateDown: boolean;
  stateOver: boolean;
  stateUp: boolean;
  characterId: Uint16;
  placeDepth: Uint16;
  placeMatrix: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  filterList?: Filter[];
  blendMode?: BlendMode;
}

export namespace ButtonRecord {
  export interface Json {
    state_hit_test: boolean;
    state_down: boolean;
    state_over: boolean;
    state_up: boolean;
    character_id: number;
    place_depth: number;
    place_matrix: Matrix.Json;
    color_transform?: ColorTransformWithAlpha.Json;
    filter_list?: Filter.Json[];
    blend_mode?: BlendMode.Json;
  }

  export const type: DocumentType<ButtonRecord> = new DocumentType<ButtonRecord>({
    properties: {
      stateHitTest: {type: new BooleanType()},
      stateDown: {type: new BooleanType()},
      stateOver: {type: new BooleanType()},
      stateUp: {type: new BooleanType()},
      characterId: {type: new IntegerType()},
      placeDepth: {type: new IntegerType()},
      placeMatrix: {type: Matrix.type},
      colorTransform: {type: ColorTransformWithAlpha.type, optional: true},
      fontAdanceTable: {type: new ArrayType({itemType: Filter.type, maxLength: Infinity}), optional: true},
      blendMode: {type: BlendMode.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
