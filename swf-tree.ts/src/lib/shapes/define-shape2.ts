import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {ShapeWithStyle} from "./shape-with-style";

export interface DefineShape2 extends SwfTagBase {
  type: SwfTagType.DefineShape2;
  shapeId: Uint16;
  shapeBounds: Rect;
  shapes: ShapeWithStyle;
}

export namespace DefineShape2 {
  export interface Json {
    type: "define-shape2";
    "shape-id": number;
    "shape-bounds": Rect.Json;
    "shapes": ShapeWithStyle.Json;
  }

  export const type: DocumentType<DefineShape2> = new DocumentType<DefineShape2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineShape2})},
      shapeId: {type: new Int32Type()},
      shapeBounds: {type: Rect.type},
      shapes: {type: ShapeWithStyle.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
