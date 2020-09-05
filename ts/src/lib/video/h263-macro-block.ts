import { $Any } from "kryo/lib/any.js";
import { $Boolean } from "kryo/lib/boolean.js";
import { $Sint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { WhiteListType } from "kryo/lib/white-list.js";

export interface H263MacroBlock {
  isCodedMacroBlock: boolean;
  blockType: any;
  blockPattern: any;
  quantizerInformation: -1 | -2 | 1 | 2;
  motionVectorData: [any, any];
  extraMotionVectorData?: [any, any, any, any, any, any];
  blockData: [any, any, any, any, any, any];
}

export const $H263MacroBlock: RecordIoType<H263MacroBlock> = new RecordType<H263MacroBlock>({
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
