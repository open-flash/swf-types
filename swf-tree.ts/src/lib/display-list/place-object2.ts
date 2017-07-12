import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransform} from "../basic-types/color-transform";
import {ColorTransformWithAlpha} from "../basic-types/color-transform-with-alpha";
import {Matrix} from "../basic-types/matrix";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {ClipAction} from "./clip-action";

export interface PlaceObject2 extends SwfTagBase {
  type: SwfTagType.PlaceObject2;
  depth: Uint16;
  characterId?: Uint16;
  matrix?: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  ratio?: Uint16;
  name?: string;
  clipDepth?: Uint16;
  clipActions?: ClipAction[];
}

export namespace PlaceObject2 {
  export interface Json {
    type: "place-object2";
    depth: number;
    character_id?: number;
    matrix: Matrix.Json;
    color_transform?: ColorTransform.Json;
    ratio?: number;
    name?: string;
    clip_depth?: number;
    clip_actions?: ClipAction.Json[];
  }

  export const type: DocumentType<PlaceObject2> = new DocumentType<PlaceObject2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.PlaceObject2})},
      depth: {type: new Int32Type()},
      characterId: {type: new Int32Type(), optional: true},
      matrix: {type: Matrix.type, optional: true},
      colorTransform: {type: ColorTransform.type, optional: true},
      ratio: {type: new Int32Type(), optional: true},
      name: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      clipDepth: {type: new Int32Type(), optional: true},
      clipActions: {type: new ArrayType({itemType: ClipAction.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
