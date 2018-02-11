import { TaggedUnionType } from "kryo/types/tagged-union";
import * as actions from "./actions/index";

export type Action =
  actions.Unknown
  | actions.Add
  | actions.Add2
  | actions.And
  | actions.AsciiToChar
  | actions.BitAnd
  | actions.BitLShift
  | actions.BitOr
  | actions.BitRShift
  | actions.BitURShift
  | actions.BitXor
  | actions.Call
  | actions.CallFunction
  | actions.CallMethod
  | actions.CastOp
  | actions.CharToAscii
  | actions.CloneSprite
  | actions.ConstantPool
  | actions.Decrement
  | actions.DefineFunction
  | actions.DefineFunction2
  | actions.DefineLocal
  | actions.DefineLocal2
  | actions.Delete
  | actions.Delete2
  | actions.Divide
  | actions.EndDrag
  | actions.Enumerate
  | actions.Enumerate2
  | actions.Equals
  | actions.Equals2
  | actions.Extends
  | actions.FsCommand2
  | actions.GetMember
  | actions.GetProperty
  | actions.GetTime
  | actions.GetUrl
  | actions.GetUrl2
  | actions.GetVariable
  | actions.GotoFrame
  | actions.GotoFrame2
  | actions.GotoLabel
  | actions.Greater
  | actions.If
  | actions.ImplementsOp
  | actions.Increment
  | actions.InitArray
  | actions.InitObject
  | actions.InstanceOf
  | actions.Jump
  | actions.Less
  | actions.Less2
  | actions.MbAsciiToChar
  | actions.MbCharToAscii
  | actions.MbStringExtract
  | actions.MbStringLength
  | actions.Modulo
  | actions.Multiply
  | actions.NewMethod
  | actions.NewObject
  | actions.NextFrame
  | actions.Not
  | actions.Or
  | actions.Play
  | actions.Pop
  | actions.PreviousFrame
  | actions.Push
  | actions.PushDuplicate
  | actions.RandomNumber
  | actions.RemoveSprite
  | actions.Return
  | actions.SetMember
  | actions.SetProperty
  | actions.SetTarget
  | actions.SetTarget2
  | actions.SetVariable
  | actions.StackSwap
  | actions.StartDrag
  | actions.Stop
  | actions.StopSounds
  | actions.StoreRegister
  | actions.StrictEquals
  | actions.StrictMode
  | actions.StringAdd
  | actions.StringEquals
  | actions.StringExtract
  | actions.StringGreater
  | actions.StringLength
  | actions.StringLess
  | actions.Subtract
  | actions.TargetPath
  | actions.Throw
  | actions.ToggleQuality
  | actions.ToInteger
  | actions.ToNumber
  | actions.ToString
  | actions.Trace
  | actions.Try
  | actions.TypeOf
  | actions.WaitForFrame
  | actions.WaitForFrame2
  | actions.With;

export const $Action: TaggedUnionType<Action> = new TaggedUnionType<Action>(() => ({
  variants: [
    actions.$Unknown,
    actions.$Add,
    actions.$Add2,
    actions.$And,
    actions.$AsciiToChar,
    actions.$BitAnd,
    actions.$BitLShift,
    actions.$BitOr,
    actions.$BitRShift,
    actions.$BitURShift,
    actions.$BitXor,
    actions.$Call,
    actions.$CallFunction,
    actions.$CallMethod,
    actions.$CastOp,
    actions.$CharToAscii,
    actions.$CloneSprite,
    actions.$ConstantPool,
    actions.$Decrement,
    actions.$DefineFunction,
    actions.$DefineFunction2,
    actions.$DefineLocal,
    actions.$DefineLocal2,
    actions.$Delete,
    actions.$Delete2,
    actions.$Divide,
    actions.$EndDrag,
    actions.$Enumerate,
    actions.$Enumerate2,
    actions.$Equals,
    actions.$Equals2,
    actions.$Extends,
    actions.$FsCommand2,
    actions.$GetMember,
    actions.$GetProperty,
    actions.$GetTime,
    actions.$GetUrl,
    actions.$GetUrl2,
    actions.$GetVariable,
    actions.$GotoFrame,
    actions.$GotoFrame2,
    actions.$GotoLabel,
    actions.$Greater,
    actions.$If,
    actions.$ImplementsOp,
    actions.$Increment,
    actions.$InitArray,
    actions.$InitObject,
    actions.$InstanceOf,
    actions.$Jump,
    actions.$Less,
    actions.$Less2,
    actions.$MbAsciiToChar,
    actions.$MbCharToAscii,
    actions.$MbStringExtract,
    actions.$MbStringLength,
    actions.$Modulo,
    actions.$Multiply,
    actions.$NewMethod,
    actions.$NewObject,
    actions.$NextFrame,
    actions.$Not,
    actions.$Or,
    actions.$Play,
    actions.$Pop,
    actions.$PreviousFrame,
    actions.$Push,
    actions.$PushDuplicate,
    actions.$RandomNumber,
    actions.$RemoveSprite,
    actions.$Return,
    actions.$SetMember,
    actions.$SetProperty,
    actions.$SetTarget,
    actions.$SetTarget2,
    actions.$SetVariable,
    actions.$StackSwap,
    actions.$StartDrag,
    actions.$Stop,
    actions.$StopSounds,
    actions.$StoreRegister,
    actions.$StrictEquals,
    actions.$StrictMode,
    actions.$StringAdd,
    actions.$StringEquals,
    actions.$StringExtract,
    actions.$StringGreater,
    actions.$StringLength,
    actions.$StringLess,
    actions.$Subtract,
    actions.$TargetPath,
    actions.$Throw,
    actions.$ToggleQuality,
    actions.$ToInteger,
    actions.$ToNumber,
    actions.$ToString,
    actions.$Trace,
    actions.$Try,
    actions.$TypeOf,
    actions.$WaitForFrame,
    actions.$WaitForFrame2,
    actions.$With,
  ],
  tag: "action",
}));
