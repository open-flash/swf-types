import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {SwfTag} from "../swf-tag";
import {SwfTagType} from "../swf-tag-type";

export interface H263BlockData {
  isCodedMacroBlock: boolean;
  blockType: any;
  blockPattern: any;
  quantizerInformation: -1 | -2 | 1 | 2;
  motionVectorData: [any, any];
  extraMotionVectorData?: [any, any, any, any, any, any];
  blockData: [any, any, any, any, any, any];
}

export namespace H263MacroBlock {
  export interface Json {
    type: "define-sprite";
    "sprite-id": number;
    "frame-count": number;
    "control-tags": SwfTag.Json[];
  }

  export const type: DocumentType<H263BlockData> = new DocumentType<H263BlockData>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineSprite})},
      spriteId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
      controlTags: {type: new ArrayType({itemType: SwfTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
