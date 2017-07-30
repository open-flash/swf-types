import {TaggedUnionType} from "kryo";
import {Action as $Action} from "../_circular-references";
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

export namespace Action {
  export type Json =
    actions.Unknown.Json
    | actions.Add.Json
    | actions.Add2.Json
    | actions.And.Json
    | actions.AsciiToChar.Json
    | actions.BitAnd.Json
    | actions.BitLShift.Json
    | actions.BitOr.Json
    | actions.BitRShift.Json
    | actions.BitURShift.Json
    | actions.BitXor.Json
    | actions.Call.Json
    | actions.CallFunction.Json
    | actions.CallMethod.Json
    | actions.CastOp.Json
    | actions.CharToAscii.Json
    | actions.CloneSprite.Json
    | actions.ConstantPool.Json
    | actions.Decrement.Json
    | actions.DefineFunction.Json
    | actions.DefineFunction2.Json
    | actions.DefineLocal.Json
    | actions.DefineLocal2.Json
    | actions.Delete.Json
    | actions.Delete2.Json
    | actions.Divide.Json
    | actions.EndDrag.Json
    | actions.Enumerate.Json
    | actions.Enumerate2.Json
    | actions.Equals.Json
    | actions.Equals2.Json
    | actions.Extends.Json
    | actions.FsCommand2.Json
    | actions.GetMember.Json
    | actions.GetProperty.Json
    | actions.GetTime.Json
    | actions.GetUrl.Json
    | actions.GetUrl2.Json
    | actions.GetVariable.Json
    | actions.GotoFrame.Json
    | actions.GotoFrame2.Json
    | actions.GotoLabel.Json
    | actions.Greater.Json
    | actions.If.Json
    | actions.ImplementsOp.Json
    | actions.Increment.Json
    | actions.InitArray.Json
    | actions.InitObject.Json
    | actions.InstanceOf.Json
    | actions.Jump.Json
    | actions.Less.Json
    | actions.Less2.Json
    | actions.MbAsciiToChar.Json
    | actions.MbCharToAscii.Json
    | actions.MbStringExtract.Json
    | actions.MbStringLength.Json
    | actions.Modulo.Json
    | actions.Multiply.Json
    | actions.NewMethod.Json
    | actions.NewObject.Json
    | actions.NextFrame.Json
    | actions.Not.Json
    | actions.Or.Json
    | actions.Play.Json
    | actions.Pop.Json
    | actions.PreviousFrame.Json
    | actions.Push.Json
    | actions.PushDuplicate.Json
    | actions.RandomNumber.Json
    | actions.RemoveSprite.Json
    | actions.Return.Json
    | actions.SetMember.Json
    | actions.SetProperty.Json
    | actions.SetTarget.Json
    | actions.SetTarget2.Json
    | actions.SetVariable.Json
    | actions.StackSwap.Json
    | actions.StartDrag.Json
    | actions.Stop.Json
    | actions.StopSounds.Json
    | actions.StoreRegister.Json
    | actions.StrictEquals.Json
    | actions.StrictMode.Json
    | actions.StringAdd.Json
    | actions.StringEquals.Json
    | actions.StringExtract.Json
    | actions.StringGreater.Json
    | actions.StringLength.Json
    | actions.StringLess.Json
    | actions.Subtract.Json
    | actions.TargetPath.Json
    | actions.Throw.Json
    | actions.ToggleQuality.Json
    | actions.ToInteger.Json
    | actions.ToNumber.Json
    | actions.ToString.Json
    | actions.Trace.Json
    | actions.Try.Json
    | actions.TypeOf.Json
    | actions.WaitForFrame.Json
    | actions.WaitForFrame2.Json
    | actions.With.Json;

  export const type: TaggedUnionType<Action> = Object.assign($Action.type, new TaggedUnionType<Action>({
    variants: [
      actions.Unknown.type,
      actions.Add.type,
      actions.Add2.type,
      actions.And.type,
      actions.AsciiToChar.type,
      actions.BitAnd.type,
      actions.BitLShift.type,
      actions.BitOr.type,
      actions.BitRShift.type,
      actions.BitURShift.type,
      actions.BitXor.type,
      actions.Call.type,
      actions.CallFunction.type,
      actions.CallMethod.type,
      actions.CastOp.type,
      actions.CharToAscii.type,
      actions.CloneSprite.type,
      actions.ConstantPool.type,
      actions.Decrement.type,
      actions.DefineFunction.type,
      actions.DefineFunction2.type,
      actions.DefineLocal.type,
      actions.DefineLocal2.type,
      actions.Delete.type,
      actions.Delete2.type,
      actions.Divide.type,
      actions.EndDrag.type,
      actions.Enumerate.type,
      actions.Enumerate2.type,
      actions.Equals.type,
      actions.Equals2.type,
      actions.Extends.type,
      actions.FsCommand2.type,
      actions.GetMember.type,
      actions.GetProperty.type,
      actions.GetTime.type,
      actions.GetUrl.type,
      actions.GetUrl2.type,
      actions.GetVariable.type,
      actions.GotoFrame.type,
      actions.GotoFrame2.type,
      actions.GotoLabel.type,
      actions.Greater.type,
      actions.If.type,
      actions.ImplementsOp.type,
      actions.Increment.type,
      actions.InitArray.type,
      actions.InitObject.type,
      actions.InstanceOf.type,
      actions.Jump.type,
      actions.Less.type,
      actions.Less2.type,
      actions.MbAsciiToChar.type,
      actions.MbCharToAscii.type,
      actions.MbStringExtract.type,
      actions.MbStringLength.type,
      actions.Modulo.type,
      actions.Multiply.type,
      actions.NewMethod.type,
      actions.NewObject.type,
      actions.NextFrame.type,
      actions.Not.type,
      actions.Or.type,
      actions.Play.type,
      actions.Pop.type,
      actions.PreviousFrame.type,
      actions.Push.type,
      actions.PushDuplicate.type,
      actions.RandomNumber.type,
      actions.RemoveSprite.type,
      actions.Return.type,
      actions.SetMember.type,
      actions.SetProperty.type,
      actions.SetTarget.type,
      actions.SetTarget2.type,
      actions.SetVariable.type,
      actions.StackSwap.type,
      actions.StartDrag.type,
      actions.Stop.type,
      actions.StopSounds.type,
      actions.StoreRegister.type,
      actions.StrictEquals.type,
      actions.StrictMode.type,
      actions.StringAdd.type,
      actions.StringEquals.type,
      actions.StringExtract.type,
      actions.StringGreater.type,
      actions.StringLength.type,
      actions.StringLess.type,
      actions.Subtract.type,
      actions.TargetPath.type,
      actions.Throw.type,
      actions.ToggleQuality.type,
      actions.ToInteger.type,
      actions.ToNumber.type,
      actions.ToString.type,
      actions.Trace.type,
      actions.Try.type,
      actions.TypeOf.type,
      actions.WaitForFrame.type,
      actions.WaitForFrame2.type,
      actions.With.type,
    ],
    tag: "action",
  }));
}
