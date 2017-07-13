import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {TagType} from "../tags/_type";

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
    sprite_id: number;
    frame_count: number;
  }

  export const type: DocumentType<H263BlockData> = new DocumentType<H263BlockData>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineSprite})},
      spriteId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
