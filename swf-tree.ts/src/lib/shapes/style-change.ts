import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Sint32, Uint32} from "semantic-types";
import {FillStyle} from "./fill-style";
import {LineStyle} from "./line-style";
import {LineStyle2} from "./line-style2";
import {ShapeRecordType} from "./shape-record-type";

export interface StyleChange {
  type: ShapeRecordType.StyleChange;
  moveDeltaX?: Sint32;
  moveDeltaY?: Sint32;
  fillStyle0?: Uint32;
  fillStyle1?: Uint32;
  lineStyle?: Uint32;
  fillStyles: FillStyle[];
  // TODO(lineStyle2 if shape 4)
  lineStyles: (LineStyle | LineStyle2)[];
}

export namespace StyleChange {
  export interface Json {
    type: "style-change";
    "move-delta-x"?: number;
    "move-delta-y"?: number;
    "fillStyle0"?: number;
    "fillStyle1"?: number;
    "lineStyle"?: number;
    "fillStyles": FillStyle.Json[];
    "lineStyles": (LineStyle.Json | LineStyle2.Json)[];
  }

  export const type: DocumentType<StyleChange> = new DocumentType<StyleChange>({
    properties: {
      type: {type: new LiteralType({type: ShapeRecordType.type, value: ShapeRecordType.StyleChange})},
      moveDeltaX: {type: new Int32Type(), optional: true},
      moveDeltaY: {type: new Int32Type(), optional: true},
      fillStyle0: {type: new Int32Type(), optional: true},
      fillStyle1: {type: new Int32Type(), optional: true},
      lineStyle: {type: new Int32Type(), optional: true},
      fillStyles: {type: new ArrayType({itemType: FillStyle.type, maxLength: Infinity})},
      lineStyles: {type: new ArrayType({itemType: LineStyle2.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
