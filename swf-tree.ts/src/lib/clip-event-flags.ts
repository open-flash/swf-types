import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";

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
