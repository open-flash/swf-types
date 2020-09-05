import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint16 } from "semantic-types";
import { $BlendMode, BlendMode } from "../blend-mode.js";
import { $ClipAction, ClipAction } from "../clip-action.js";
import { $ColorTransformWithAlpha, ColorTransformWithAlpha } from "../color-transform-with-alpha.js";
import { $Filter, Filter } from "../filter.js";
import { $Matrix, Matrix } from "../matrix.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface PlaceObject extends _Tag {
  readonly type: TagType.PlaceObject;
  readonly isUpdate: boolean;
  readonly depth: Uint16;
  readonly characterId?: Uint16;
  readonly className?: string;
  readonly matrix?: Matrix;
  readonly colorTransform?: ColorTransformWithAlpha;
  // TODO: Better type? The ratio is `ratio / (1 << 16)`
  readonly ratio?: Uint16;
  readonly name?: string;
  readonly clipDepth?: Uint16;
  readonly filters?: ReadonlyArray<Filter>;
  readonly blendMode?: BlendMode;
  readonly bitmapCache?: boolean;
  readonly visible?: boolean;
  readonly backgroundColor?: StraightSRgba8;
  readonly clipActions?: ReadonlyArray<ClipAction>;
}

export const $PlaceObject: RecordIoType<PlaceObject> = new RecordType<PlaceObject>(() => ({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.PlaceObject as TagType.PlaceObject})},
    isUpdate: {type: $Boolean},
    depth: {type: $Uint16},
    characterId: {type: $Uint16, optional: true},
    matrix: {type: $Matrix, optional: true},
    colorTransform: {type: $ColorTransformWithAlpha, optional: true},
    ratio: {type: $Uint16, optional: true},
    name: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    clipDepth: {type: $Uint16, optional: true},
    filters: {type: new ArrayType({itemType: $Filter, maxLength: Infinity}), optional: true},
    blendMode: {type: $BlendMode, optional: true},
    bitmapCache: {type: $Boolean, optional: true},
    visible: {type: $Boolean, optional: true},
    backgroundColor: {type: $StraightSRgba8, optional: true},
    clipActions: {type: new ArrayType({itemType: $ClipAction, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
