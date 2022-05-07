import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint16 } from "semantic-types";

import { $BlendMode, BlendMode } from "../blend-mode.mjs";
import { $ClipAction, ClipAction } from "../clip-action.mjs";
import { $ColorTransformWithAlpha, ColorTransformWithAlpha } from "../color-transform-with-alpha.mjs";
import { $Filter, Filter } from "../filter.mjs";
import { $Matrix, Matrix } from "../matrix.mjs";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
