import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransformWithAlpha} from "../basic-types/color-transform-with-alpha";
import {Matrix} from "../basic-types/matrix";
import {BlendMode} from "../display-list/blend-mode";
import {Filter} from "../display-list/filter";

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
    "state-hit-test": boolean;
    "state-down": boolean;
    "state-over": boolean;
    "state-up": boolean;
    "character-id": number;
    "place-depth": number;
    "place-matrix": Matrix.Json;
    "color-transform"?: ColorTransformWithAlpha.Json;
    "filter-list"?: Filter.Json[];
    "blend-mode"?: BlendMode.Json;
  }

  export const type: DocumentType<ButtonRecord> = new DocumentType<ButtonRecord>({
    properties: {
      stateHitTest: {type: new BooleanType()},
      stateDown: {type: new BooleanType()},
      stateOver: {type: new BooleanType()},
      stateUp: {type: new BooleanType()},
      characterId: {type: new Int32Type()},
      placeDepth: {type: new Int32Type()},
      placeMatrix: {type: Matrix.type},
      colorTransform: {type: ColorTransformWithAlpha.type, optional: true},
      fontAdanceTable: {type: new ArrayType({itemType: Filter.type, maxLength: Infinity}), optional: true},
      blendMode: {type: BlendMode.type, optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
