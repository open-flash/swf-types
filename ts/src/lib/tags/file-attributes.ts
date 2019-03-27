import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface FileAttributes extends _Tag {
  readonly type: TagType.FileAttributes;
  readonly useDirectBlit: boolean;
  readonly useGpu: boolean;
  readonly hasMetadata: boolean;
  readonly useAs3: boolean;
  readonly noCrossDomainCaching: boolean;
  readonly useRelativeUrls: boolean;
  readonly useNetwork: boolean;
}

export const $FileAttributes: DocumentIoType<FileAttributes> = new DocumentType<FileAttributes>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.FileAttributes as TagType.FileAttributes})},
    useDirectBlit: {type: $Boolean},
    useGpu: {type: $Boolean},
    hasMetadata: {type: $Boolean},
    useAs3: {type: $Boolean},
    noCrossDomainCaching: {type: $Boolean},
    useRelativeUrls: {type: $Boolean},
    useNetwork: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
