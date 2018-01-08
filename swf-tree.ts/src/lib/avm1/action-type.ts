import { CaseStyle, SimpleEnumType } from "kryo";

export enum ActionType {
  Unknown,
  Add,
  Add2,
  And,
  AsciiToChar,
  BitAnd,
  BitLShift,
  BitOr,
  BitRShift,
  BitURShift,
  BitXor,
  Call,
  CallFunction,
  CallMethod,
  CastOp,
  CharToAscii,
  CloneSprite,
  ConstantPool,
  Decrement,
  DefineFunction,
  DefineFunction2,
  DefineLocal,
  DefineLocal2,
  Delete,
  Delete2,
  Divide,
  EndDrag,
  Enumerate,
  Enumerate2,
  Equals,
  Equals2,
  Extends,
  FsCommand2,
  GetMember,
  GetProperty,
  GetTime,
  GetUrl,
  GetUrl2,
  GetVariable,
  GotoFrame,
  GotoFrame2,
  GotoLabel,
  Greater,
  If,
  ImplementsOp,
  Increment,
  InitArray,
  InitObject,
  InstanceOf,
  Jump,
  Less,
  Less2,
  MbAsciiToChar,
  MbCharToAscii,
  MbStringExtract,
  MbStringLength,
  Modulo,
  Multiply,
  NewMethod,
  NewObject,
  NextFrame,
  Not,
  Or,
  Play,
  Pop,
  PreviousFrame,
  Push,
  PushDuplicate,
  RandomNumber,
  RemoveSprite,
  Return,
  SetMember,
  SetProperty,
  SetTarget,
  SetTarget2,
  SetVariable,
  StackSwap,
  StartDrag,
  Stop,
  StopSounds,
  StoreRegister,
  StrictEquals,
  StrictMode,
  StringAdd,
  StringEquals,
  StringExtract,
  StringGreater,
  StringLength,
  StringLess,
  Subtract,
  TargetPath,
  Throw,
  ToggleQuality,
  ToInteger,
  ToNumber,
  ToString,
  Trace,
  Try,
  TypeOf,
  WaitForFrame,
  WaitForFrame2,
  With,
}

export namespace ActionType {
  export type Json =
    "unknown"
    | "add"
    | "add2"
    | "and"
    | "ascii-to-char"
    | "bit-and"
    | "bit-l-shift"
    | "bit-r-shift"
    | "bit-u-r-shift"
    | "bit-xor"
    | "call"
    | "call-function"
    | "call-method"
    | "cast-op"
    | "char-to-ascii"
    | "clone-sprite"
    | "constant-pool"
    | "decrement"
    | "define-function"
    | "define-function2"
    | "define-local"
    | "define-local2"
    | "delete"
    | "delete2"
    | "divide"
    | "end-drag"
    | "enumerate"
    | "enumerate2"
    | "equals"
    | "equals2"
    | "extends"
    | "fs-command2"
    | "get-member"
    | "get-property"
    | "get-time"
    | "get-url"
    | "get-url2"
    | "get-variable"
    | "goto-frame"
    | "goto-frame2"
    | "goto-label"
    | "greater"
    | "if"
    | "implements-op"
    | "increment"
    | "init-array"
    | "init-object"
    | "instance-of"
    | "jump"
    | "less"
    | "less2"
    | "mb-ascii-to-char"
    | "mb-char-to-ascii"
    | "mb-string-extract"
    | "mb-string-length"
    | "modulo"
    | "multiply"
    | "new-method"
    | "mew-object"
    | "next-frame"
    | "not"
    | "or"
    | "play"
    | "pop"
    | "previous-frame"
    | "push"
    | "random-number"
    | "remove-sprite"
    | "return"
    | "set-member"
    | "set-property"
    | "set-target"
    | "set-target2"
    | "set-variable"
    | "stack-swap"
    | "start-drag"
    | "stop"
    | "stop-sounds"
    | "store-register"
    | "strict-equals"
    | "string-extract"
    | "string-greater"
    | "string-length"
    | "string-less"
    | "subtract"
    | "target-path"
    | "throw"
    | "toggle-quality"
    | "to-integer"
    | "to-number"
    | "to-string"
    | "trace"
    | "try"
    | "type-of"
    | "wait-for-frame"
    | "wait-for-frame2"
    | "with";

  export const type: SimpleEnumType<ActionType> = new SimpleEnumType<ActionType>({
    enum: ActionType,
    rename: CaseStyle.KebabCase,
  });
}
