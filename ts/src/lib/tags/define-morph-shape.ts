import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $MorphShape, MorphShape } from "../morph-shape.js";
import { $Rect, Rect } from "../rect.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineMorphShape extends _Tag {
  readonly type: TagType.DefineMorphShape;
  readonly id: Uint16;
  readonly bounds: Rect;
  readonly morphBounds: Rect;
  // TODO: Combine edgeBounds and morphEdgeBounds in something like MorphRect
  readonly edgeBounds?: Rect;
  readonly morphEdgeBounds?: Rect;
  readonly hasScalingStrokes: boolean;
  readonly hasNonScalingStrokes: boolean;
  readonly shape: MorphShape;
}

export const $DefineMorphShape: RecordIoType<DefineMorphShape> = new RecordType<DefineMorphShape>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineMorphShape as TagType.DefineMorphShape})},
    id: {type: $Uint16},
    bounds: {type: $Rect},
    morphBounds: {type: $Rect},
    edgeBounds: {type: $Rect, optional: true},
    morphEdgeBounds: {type: $Rect, optional: true},
    hasScalingStrokes: {type: $Boolean},
    hasNonScalingStrokes: {type: $Boolean},
    shape: {type: $MorphShape},
  },
  changeCase: CaseStyle.SnakeCase,
});
