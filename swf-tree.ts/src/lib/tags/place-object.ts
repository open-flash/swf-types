import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransform} from "../basic-types/color-transform";
import {ColorTransformWithAlpha} from "../basic-types/color-transform-with-alpha";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {BlendMode} from "../display-list/blend-mode";
import {ClipAction} from "../display-list/clip-action";
import {Filter} from "../display-list/filter";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface PlaceObject extends _Tag {
  type: TagType.PlaceObject;
  depth: Uint16;
  characterId?: Uint16;
  className?: string;
  matrix?: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  ratio?: Uint16;
  name?: string;
  clipDepth?: Uint16;
  filters: Filter[];
  blendMode?: BlendMode;
  bitmapCache?: boolean;
  visible?: boolean;
  backgroundColor?: Rgba;
  clipActions: ClipAction[];
}

export namespace PlaceObject {
  export interface Json {
    type: "place-object3";
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
    background_color?: Rgba.Json;
    clip_actions?: ClipAction.Json[];
  }

  export const type: DocumentType<PlaceObject> = new DocumentType<PlaceObject>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.PlaceObject})},
      depth: {type: new Int32Type()},
      characterId: {type: new Int32Type(), optional: true},
      matrix: {type: Matrix.type, optional: true},
      colorTransform: {type: ColorTransform.type, optional: true},
      ratio: {type: new Int32Type(), optional: true},
      name: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      clipDepth: {type: new Int32Type(), optional: true},
      filters: {type: new ArrayType({itemType: Filter.type, maxLength: Infinity})},
      bitmapCache: {type: new BooleanType(), optional: true},
      visible: {type: new BooleanType(), optional: true},
      backgroundColor: {type: Rgba.type, optional: true},
      clipActions: {type: new ArrayType({itemType: ClipAction.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
