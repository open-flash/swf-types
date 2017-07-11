import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Rect} from "../basic-types/rect";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {ShapeWithStyle} from "./shape-with-style";
import {Uint16} from "semantic-types";

export interface DefineShape3 extends SwfTagBase {
  type: SwfTagType.DefineShape3;
  shapeId: Uint16;
  shapeBounds: Rect;
  shapes: ShapeWithStyle;
}

export namespace DefineShape3 {
  export interface Json {
    type: "define-shape3";
    "shape-id": number;
    "shape-bounds": Rect.Json;
    "shapes": ShapeWithStyle.Json;
  }

  export const type: DocumentType<DefineShape3> = new DocumentType<DefineShape3>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineShape3})},
      shapeId: {type: new Int32Type()},
      shapeBounds: {type: Rect.type},
      shapes: {type: ShapeWithStyle.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
