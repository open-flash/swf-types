import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/lib/bytes.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

export interface ScreenImageBlock {
  data?: Uint8Array;
}

export const $ScreenImageBlock: RecordIoType<ScreenImageBlock> = new RecordType<ScreenImageBlock>({
  properties: {
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
