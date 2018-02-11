import { $Any } from "kryo/builtins/any";
import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { WhiteListType } from "kryo/types/white-list";

export interface AdpcmSoundData {
  adpcmCodeSize: 2 | 3 | 4 | 5;
  adpcmPackets: any[];
}

export const $AdpcmSoundData: DocumentIoType<AdpcmSoundData> = new DocumentType<AdpcmSoundData>({
  properties: {
    adpcmCodeSize: {type: new WhiteListType({itemType: $Uint8, values: [2, 3, 4, 5] as (2 | 3 | 4 | 5)[]})},
    adpcmPackets: {type: new ArrayType({itemType: $Any, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
