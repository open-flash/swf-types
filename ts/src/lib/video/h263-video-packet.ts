import { $Any } from "kryo/builtins/any";
import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint32, Uint8 } from "semantic-types";

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

export const $H263VideoPacket: DocumentIoType<H263VideoPacket> = new DocumentType<H263VideoPacket>({
  properties: {
    version: {type: $Uint32},
    temporalReference: {type: $Uint32},
    width: {type: $Uint16},
    height: {type: $Uint16},
    pictureType: {type: $Any},
    useDeblockingFilter: {type: $Boolean},
    quantizer: {type: $Uint32},
    extraInformations: {type: new ArrayType({itemType: $Uint8, maxLength: Infinity})},
    macroBlock: {type: $Any},
    pictureStuffing: {type: $Any},
  },
  changeCase: CaseStyle.SnakeCase,
});
