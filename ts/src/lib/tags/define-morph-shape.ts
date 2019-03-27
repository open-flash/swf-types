import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $MorphShape, MorphShape } from "../morph-shape";
import { $Rect, Rect } from "../rect";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineMorphShape extends _Tag {
  readonly type: TagType.DefineMorphShape;
  readonly id: Uint16;
  readonly bounds: Rect;
  readonly morphBounds: Rect;
  // TODO: Combine edgeBounds and morphEdgeBounds in something like MorphRect
  readonly edgeBounds?: Rect;
  readonly morphEdgeBounds?: Rect;
  readonly hasNonScalingStrokes: boolean;
  readonly hasScalingStrokes: boolean;
  readonly shape: MorphShape;
}

export const $DefineMorphShape: DocumentIoType<DefineMorphShape> = new DocumentType<DefineMorphShape>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineMorphShape as TagType.DefineMorphShape})},
    id: {type: $Uint16},
    bounds: {type: $Rect},
    morphBounds: {type: $Rect},
    edgeBounds: {type: $Rect, optional: true},
    morphEdgeBounds: {type: $Rect, optional: true},
    hasNonScalingStrokes: {type: $Boolean},
    hasScalingStrokes: {type: $Boolean},
    shape: {type: $MorphShape},
  },
  changeCase: CaseStyle.SnakeCase,
});
