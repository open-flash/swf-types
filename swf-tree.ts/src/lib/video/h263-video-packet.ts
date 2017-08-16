import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16, Uint32, Uint8} from "semantic-types";
import {TagType} from "../tags/_type";

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
  }

  export const type: DocumentType<H263VideoPacket> = new DocumentType<H263VideoPacket>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineSprite})},
      spriteId: {type: new IntegerType()},
      frameCount: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
