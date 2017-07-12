import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16, Uint32, Uint8} from "semantic-types";
import {SwfTag} from "../swf-tag";
import {SwfTagType} from "../swf-tag-type";

export interface H263VideoPacket {
  version: Uint32;
  temporalReference: Uint32;
  width: Uint16;
  height: Uint16;
  pictureType: any; // enum
  useDeblockingFilter: boolean;
  quantizer: Uint32;
  extraInformations: Uint8[];
  macroBlock: any;
  pictureStuffing: any;
}

export namespace H263VideoPacket {
  export interface Json {
    type: "define-sprite";
    sprite_id: number;
    frame_count: number;
    control_tags: SwfTag.Json[];
  }

  export const type: DocumentType<H263VideoPacket> = new DocumentType<H263VideoPacket>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineSprite})},
      spriteId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
      controlTags: {type: new ArrayType({itemType: SwfTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
