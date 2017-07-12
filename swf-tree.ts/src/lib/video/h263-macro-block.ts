import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {SwfTag} from "../swf-tag";
import {SwfTagType} from "../swf-tag-type";

export interface H263MacroBlock {
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
    sprite_id: number;
    frame_count: number;
    control_tags: SwfTag.Json[];
  }

  export const type: DocumentType<H263MacroBlock> = new DocumentType<H263MacroBlock>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineSprite})},
      spriteId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
      controlTags: {type: new ArrayType({itemType: SwfTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
