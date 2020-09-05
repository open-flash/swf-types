import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/lib/boolean.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

export interface ClipEventFlags {
  load: boolean;
  enterFrame: boolean;
  unload: boolean;
  mouseMove: boolean;
  mouseDown: boolean;
  mouseUp: boolean;
  keyDown: boolean;
  keyUp: boolean;
  data: boolean;
  initialize: boolean;
  press: boolean;
  release: boolean;
  releaseOutside: boolean;
  rollOver: boolean;
  rollOut: boolean;
  dragOver: boolean;
  dragOut: boolean;
  keyPress: boolean;
  construct: boolean;
}

export const $ClipEventFlags: RecordIoType<ClipEventFlags> = new RecordType<ClipEventFlags>({
  properties: {
    keyUp: {type: $Boolean},
    keyDown: {type: $Boolean},
    mouseUp: {type: $Boolean},
    mouseDown: {type: $Boolean},
    mouseMove: {type: $Boolean},
    unload: {type: $Boolean},
    enterFrame: {type: $Boolean},
    load: {type: $Boolean},
    dragOver: {type: $Boolean},
    rollOut: {type: $Boolean},
    rollOver: {type: $Boolean},
    releaseOutside: {type: $Boolean},
    release: {type: $Boolean},
    press: {type: $Boolean},
    initialize: {type: $Boolean},
    data: {type: $Boolean},
    construct: {type: $Boolean},
    keyPress: {type: $Boolean},
    dragOut: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
