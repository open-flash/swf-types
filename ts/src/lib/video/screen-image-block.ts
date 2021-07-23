import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { RecordIoType, RecordType } from "kryo/record";

export interface ScreenImageBlock {
  data?: Uint8Array;
}

export const $ScreenImageBlock: RecordIoType<ScreenImageBlock> = new RecordType<ScreenImageBlock>({
  properties: {
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
