import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { BlendMode } from "../blend-mode";
import { $ClipActions, ClipActions } from "../clip-actions";
import { $ColorTransformWithAlpha, ColorTransformWithAlpha } from "../color-transform-with-alpha";
import { $Filter, Filter } from "../filter";
import { $Matrix, Matrix } from "../matrix";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface PlaceObject extends _Tag {
  type: TagType.PlaceObject;
  // TODO: Rename to `isUpdate`
  isMove: boolean;
  depth: Uint16;
  characterId?: Uint16;
  className?: string;
  matrix?: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  // TODO: Better type? The ratio is `ratio / (1 << 16)`
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

export const $PlaceObject: DocumentIoType<PlaceObject> = new DocumentType<PlaceObject>(() => ({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.PlaceObject as TagType.PlaceObject})},
    isMove: {type: $Boolean},
    depth: {type: $Uint16},
    characterId: {type: $Uint16, optional: true},
    matrix: {type: $Matrix, optional: true},
    colorTransform: {type: $ColorTransformWithAlpha, optional: true},
    ratio: {type: $Uint16, optional: true},
    name: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    clipDepth: {type: $Uint16, optional: true},
    filters: {type: new ArrayType({itemType: $Filter, maxLength: Infinity}), optional: true},
    bitmapCache: {type: $Boolean, optional: true},
    visible: {type: $Boolean, optional: true},
    backgroundColor: {type: $StraightSRgba8, optional: true},
    clipActions: {type: new ArrayType({itemType: $ClipActions, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
