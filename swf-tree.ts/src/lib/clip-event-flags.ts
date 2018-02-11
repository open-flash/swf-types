import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface ClipEventFlags {
  keyUp: boolean;
  keyDown: boolean;
  mouseUp: boolean;
  mouseDown: boolean;
  mouseMove: boolean;
  unload: boolean;
  enterFrame: boolean;
  load: boolean;
  dragOver: boolean;
  rollOut: boolean;
  rollOver: boolean;
  releaseOutside: boolean;
  release: boolean;
  press: boolean;
  initialize: boolean;
  data: boolean;
  construct: boolean;
  keyPress: boolean;
  dragOut: boolean;
}

export const $ClipEventFlags: DocumentIoType<ClipEventFlags> = new DocumentType<ClipEventFlags>({
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
