import { $Any } from "kryo/lib/any.js";
import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { WhiteListType } from "kryo/lib/white-list.js";

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
