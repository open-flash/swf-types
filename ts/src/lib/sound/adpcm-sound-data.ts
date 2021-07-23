import { CaseStyle } from "kryo";
import { $Any } from "kryo/any";
import { ArrayType } from "kryo/array";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { WhiteListType } from "kryo/white-list";

export interface AdpcmSoundData {
  adpcmCodeSize: 2 | 3 | 4 | 5;
  adpcmPackets: any[];
}

export const $AdpcmSoundData: RecordIoType<AdpcmSoundData> = new RecordType<AdpcmSoundData>({
  properties: {
    adpcmCodeSize: {type: new WhiteListType({itemType: $Uint8, values: [2, 3, 4, 5] as (2 | 3 | 4 | 5)[]})},
    adpcmPackets: {type: new ArrayType({itemType: $Any, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
