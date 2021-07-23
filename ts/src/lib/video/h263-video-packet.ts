import { CaseStyle } from "kryo";
import { $Any } from "kryo/any";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint8,$Uint16, $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8,Uint16, Uint32 } from "semantic-types";

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

export const $H263VideoPacket: RecordIoType<H263VideoPacket> = new RecordType<H263VideoPacket>({
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
