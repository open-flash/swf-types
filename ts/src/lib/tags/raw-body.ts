import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType , RecordType} from "kryo/record";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface RawBody extends _Tag {
  readonly type: TagType.RawBody;
  readonly code: Uint16;
  readonly data: Uint8Array;
}

export const $RawBody: RecordIoType<RawBody> = new RecordType<RawBody>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.RawBody as TagType.RawBody})},
    code: {type: $Uint16},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
