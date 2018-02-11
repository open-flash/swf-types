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
  type: TagType.DefineMorphShape;
  id: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  // TODO: Combine edgeBounds with something like MorphRect
  startEdgeBounds?: Rect;
  endEdgeBounds?: Rect;
  hasNonScalingStrokes: boolean;
  hasScalingStrokes: boolean;
  shape: MorphShape;
}

export const $DefineMorphShape: DocumentIoType<DefineMorphShape> = new DocumentType<DefineMorphShape>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineMorphShape as TagType.DefineMorphShape})},
    id: {type: $Uint16},
    startBounds: {type: $Rect},
    endBounds: {type: $Rect},
    startEdgeBounds: {type: $Rect, optional: true},
    endEdgeBounds: {type: $Rect, optional: true},
    hasNonScalingStrokes: {type: $Boolean},
    hasScalingStrokes: {type: $Boolean},
    shape: {type: $MorphShape},
  },
  changeCase: CaseStyle.SnakeCase,
});
