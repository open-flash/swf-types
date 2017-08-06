import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {BlendMode} from "../blend-mode";
import {ClipActions} from "../clip-actions";
import {ColorTransform} from "../color-transform";
import {ColorTransformWithAlpha} from "../color-transform-with-alpha";
import {Filter} from "../filter";
import {Matrix} from "../matrix";
import {StraightSRgba8} from "../straight-s-rgba8";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface PlaceObject extends _Tag {
  type: TagType.PlaceObject;
  isMove: boolean;
  depth: Uint16;
  characterId?: Uint16;
  className?: string;
  matrix?: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  ratio?: Uint16;
  name?: string;
  clipDepth?: Uint16;
  filters?: Filter[];
  blendMode?: BlendMode;
  bitmapCache?: boolean;
  visible?: boolean;
  backgroundColor?: StraightSRgba8;
  clipActions?: ClipActions[];
}

export namespace PlaceObject {
  export interface Json {
    type: "place-object";
    isMove: boolean;
    depth: number;
    character_id?: number;
    class_name?: string;
    matrix: Matrix.Json;
    color_transform?: ColorTransform.Json;
    ratio?: number;
    name?: string;
    clip_depth?: number;
    filters?: Filter.Json[];
    blend_mode?: BlendMode.Json[];
    bitmap_cache?: boolean;
    background_color?: StraightSRgba8.Json;
    clip_actions?: ClipActions.Json[];
  }

  export const type: DocumentType<PlaceObject> = new DocumentType<PlaceObject>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.PlaceObject})},
      isMove: {type: new BooleanType()},
      depth: {type: new Int32Type()},
      characterId: {type: new Int32Type(), optional: true},
      matrix: {type: Matrix.type, optional: true},
      colorTransform: {type: ColorTransform.type, optional: true},
      ratio: {type: new Int32Type(), optional: true},
      name: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      clipDepth: {type: new Int32Type(), optional: true},
      filters: {type: new ArrayType({itemType: Filter.type, maxLength: Infinity}), optional: true},
      bitmapCache: {type: new BooleanType(), optional: true},
      visible: {type: new BooleanType(), optional: true},
      backgroundColor: {type: StraightSRgba8.type, optional: true},
      clipActions: {type: new ArrayType({itemType: ClipActions.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
