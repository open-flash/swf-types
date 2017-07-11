import {BooleanType, CaseStyle, DocumentType} from "kryo";

export interface ClipEventFlags {
  keyUp: boolean;
  keyDown: boolean;
  mouseUp: boolean;
  mouseDown: boolean;
  unload: boolean;
  enterFrane: boolean;
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

export namespace ClipEventFlags {
  export interface Json {
    "key-up": boolean;
    "key-down": boolean;
    "mouse-up": boolean;
    "mouse-down": boolean;
    "unload": boolean;
    "enter-frame": boolean;
    "load": boolean;
    "drag-over": boolean;
    "roll-out": boolean;
    "roll-over": boolean;
    "release-outside": boolean;
    "release": boolean;
    "press": boolean;
    "initialize": boolean;
    "data": boolean;
    "construct": boolean;
    "key-press": boolean;
    "drag-out": boolean;
  }

  export const type: DocumentType<ClipEventFlags> = new DocumentType<ClipEventFlags>({
    properties: {
      keyUp: {type: new BooleanType()},
      keyDown: {type: new BooleanType()},
      mouseUp: {type: new BooleanType()},
      mouseDown: {type: new BooleanType()},
      unload: {type: new BooleanType()},
      enterFrane: {type: new BooleanType()},
      load: {type: new BooleanType()},
      dragOver: {type: new BooleanType()},
      rollOut: {type: new BooleanType()},
      rollOver: {type: new BooleanType()},
      releaseOutside: {type: new BooleanType()},
      release: {type: new BooleanType()},
      press: {type: new BooleanType()},
      initialize: {type: new BooleanType()},
      data: {type: new BooleanType()},
      construct: {type: new BooleanType()},
      keyPress: {type: new BooleanType()},
      dragOut: {type: new BooleanType()},
    },
    rename: CaseStyle.KebabCase,
  });
}
