import {BooleanType, CaseStyle, DocumentType} from "kryo";

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

export namespace ClipEventFlags {
  export interface Json {
    key_up: boolean;
    key_down: boolean;
    mouse_up: boolean;
    mouse_down: boolean;
    mouse_move: boolean;
    unload: boolean;
    enter_frame: boolean;
    load: boolean;
    drag_over: boolean;
    roll_out: boolean;
    roll_over: boolean;
    release_outside: boolean;
    release: boolean;
    press: boolean;
    initialize: boolean;
    data: boolean;
    construct: boolean;
    key_press: boolean;
    drag_out: boolean;
  }

  export const type: DocumentType<ClipEventFlags> = new DocumentType<ClipEventFlags>({
    properties: {
      keyUp: {type: new BooleanType()},
      keyDown: {type: new BooleanType()},
      mouseUp: {type: new BooleanType()},
      mouseDown: {type: new BooleanType()},
      mouseMove: {type: new BooleanType()},
      unload: {type: new BooleanType()},
      enterFrame: {type: new BooleanType()},
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
    rename: CaseStyle.SnakeCase,
  });
}
