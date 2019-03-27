import { $Any } from "kryo/builtins/any";
import { $Boolean } from "kryo/builtins/boolean";
import { $Sint8 } from "kryo/builtins/sint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { WhiteListType } from "kryo/types/white-list";

export interface H263MacroBlock {
  isCodedMacroBlock: boolean;
  blockType: any;
  blockPattern: any;
  quantizerInformation: -1 | -2 | 1 | 2;
  motionVectorData: [any, any];
  extraMotionVectorData?: [any, any, any, any, any, any];
  blockData: [any, any, any, any, any, any];
}

export const $H263MacroBlock: DocumentIoType<H263MacroBlock> = new DocumentType<H263MacroBlock>({
  properties: {
    isCodedMacroBlock: {type: $Boolean},
    blockType: {type: $Any},
    blockPattern: {type: $Any},
    quantizerInformation: {type: new WhiteListType({itemType: $Sint8, values: [-1, -2, 1, 2] as (-1 | -2 | 1 | 2)[]})},
    motionVectorData: {type: $Any},
    extraMotionVectorData: {type: $Any},
    blockData: {type: $Any},
  },
  changeCase: CaseStyle.SnakeCase,
});
