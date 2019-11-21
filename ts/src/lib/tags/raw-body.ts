import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType , DocumentType} from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface RawBody extends _Tag {
  readonly type: TagType.RawBody;
  readonly code: Uint16;
  readonly data: Uint8Array;
}

export const $RawBody: DocumentIoType<RawBody> = new DocumentType<RawBody>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.RawBody as TagType.RawBody})},
    code: {type: $Uint16},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
