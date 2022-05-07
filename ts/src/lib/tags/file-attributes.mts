import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface FileAttributes extends _Tag {
  readonly type: TagType.FileAttributes;
  readonly useNetwork: boolean;
  readonly useRelativeUrls: boolean;
  readonly noCrossDomainCaching: boolean;
  readonly useAs3: boolean;
  readonly hasMetadata: boolean;
  readonly useGpu: boolean;
  readonly useDirectBlit: boolean;
}

export const $FileAttributes: RecordIoType<FileAttributes> = new RecordType<FileAttributes>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.FileAttributes as TagType.FileAttributes})},
    useNetwork: {type: $Boolean},
    useRelativeUrls: {type: $Boolean},
    noCrossDomainCaching: {type: $Boolean},
    useAs3: {type: $Boolean},
    hasMetadata: {type: $Boolean},
    useGpu: {type: $Boolean},
    useDirectBlit: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
