import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransform} from "../basic-types/color-transform";
import {ColorTransformWithAlpha} from "../basic-types/color-transform-with-alpha";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {BlendMode} from "./blend-mode";
import {ClipAction} from "./clip-action";
import {Filter} from "./filter";

export interface PlaceObject3 extends SwfTagBase {
  type: SwfTagType.PlaceObject3;
  depth: Uint16;
  className?: string;
  characterId?: Uint16;
  matrix?: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  ratio?: Uint16;
  name?: string;
  clipDepth?: Uint16;
  surfaceFilterList: Filter[];
  blendMode?: BlendMode;
  bitmapCache?: boolean;
  visible?: boolean;
  backgroundColor?: Rgba;
  clipActions: ClipAction[];
}

export namespace PlaceObject3 {
  export interface Json {
    type: "place-object3";
    depth: number;
    "class-name"?: string;
    "character-id"?: number;
    matrix: Matrix.Json;
    "color-transform"?: ColorTransform.Json;
    ratio?: number;
    name?: string;
    "clip-depth"?: number;
    "surface-filter-list"?: Filter.Json[];
    "blend-mode"?: BlendMode.Json[];
    "bitmap-cache"?: boolean;
    "background-color"?: Rgba.Json;
    "clip-actions"?: ClipAction.Json[];
  }

  export const type: DocumentType<PlaceObject3> = new DocumentType<PlaceObject3>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.PlaceObject2})},
      depth: {type: new Int32Type()},
      characterId: {type: new Int32Type(), optional: true},
      matrix: {type: Matrix.type, optional: true},
      colorTransform: {type: ColorTransform.type, optional: true},
      ratio: {type: new Int32Type(), optional: true},
      name: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      clipDepth: {type: new Int32Type(), optional: true},
      surfaceFilterList: {type: new ArrayType({itemType: Filter.type, maxLength: Infinity})},
      bitmapCache: {type: new BooleanType(), optional: true},
      visible: {type: new BooleanType(), optional: true},
      backgroundColor: {type: Rgba.type, optional: true},
      clipActions: {type: new ArrayType({itemType: ClipAction.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
