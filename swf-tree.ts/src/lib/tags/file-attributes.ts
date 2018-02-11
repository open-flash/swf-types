import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface FileAttributes extends _Tag {
  type: TagType.FileAttributes;
  useDirectBlit: boolean;
  useGpu: boolean;
  hasMetadata: boolean;
  useAs3: boolean;
  noCrossDomainCaching: boolean;
  useRelativeUrls: boolean;
  useNetwork: boolean;
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
