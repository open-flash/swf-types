pub mod actions;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "action", rename_all = "kebab-case")]
pub enum Action {
  Unknown(actions::UnknownAction),
  NextFrame,
  // 0x04
  PrevFrame,
  // 0x05
  Play,
  // 0x06
  Stop,
  // 0x07
  ToggleQuality,
  // 0x08
  StopSounds,
  // 0x09
  Add,
  // 0x0a
  Subtract,
  // 0x0b
  Multiply,
  // 0x0c
  Divide,
  // 0x0d
  Equals,
  // 0x0e
  Less,
  // 0x0f
  And,
  // 0x10
  Or,
  // 0x11
  Not,
  // 0x12
  StringEquals,
  // 0x13
  StringLength,
  // 0x14
  StringExtract,
  // 0x15
  Pop,
  // 0x17
  ToInteger,
  // 0x17
  GetVariable,
  // 0x1c
  SetVariable,
  // 0x1d
  SetTarget2,
  // 0x20
  StringAdd,
  // 0x21
  GetProperty,
  // 0x22
  SetProperty,
  // 0x23
  CloneSprite,
  // 0x24
  RemoveSprite,
  // 0x25
  Trace,
  // 0x26
  StartDrag,
  // 0x27
  EndDrag,
  // 0x28
  StringLess,
  // 0x29
  Throw,
  // 0x2a
  CastOp,
  // 0x2b
  ImplementsOp,
  // 0x2c
  RandomNumber,
  // 0x30
  MbStringLength,
  // 0x31
  CharToAscii,
  // 0x32
  AsciiToChar,
  // 0x33
  GetTime,
  // 0x34
  MbStringExtract,
  // 0x35
  MbCharToAscii,
  // 0x36
  MbAsciiToChar,
  // 0x37
  Delete,
  // 0x3a
  Delete2,
  // 0x3b
  DefineLocal,
  // 0x3c
  CallFunction,
  // 0x3d
  Return,
  // 0x3e
  Modulo,
  // 0x3f
  NewObject,
  // 0x40
  DefineLocal2,
  // 0x41
  InitArray,
  // 0x42
  InitObject,
  // 0x43
  TypeOf,
  // 0x44
  TargetPath,
  // 0x45
  Enumerate,
  // 0x46
  Add2,
  // 0x47
  Less2,
  // 0x48
  Equals2,
  // 0x49
  ToNumber,
  // 0x4a
  ToString,
  // 0x4b
  PushDuplicate,
  // 0x4c
  StackSwap,
  // 0x4d
  GetMember,
  // 0x4e
  SetMember,
  // 0x4f
  Increment,
  // 0x50
  Decrement,
  // 0x51
  CallMethod,
  // 0x52
  NewMethod,
  // 0x53
  InstanceOf,
  // 0x54
  Enumerate2,
  // 0x55
  BitAnd,
  // 0x60
  BitOr,
  // 0x61
  BitXor,
  // 0x62
  BitLShift,
  // 0x63
  BitRShift,
  // 0x64
  BitURShift,
  // 0x65
  StrictEquals,
  // 0x66
  Greater,
  // 0x67
  StringGreater,
  // 0x68
  Extends,
  // 0x69
  GotoFrame(actions::GotoFrame),
  // 0x81
  GetUrl(actions::GetUrl),
  // 0x83
  StoreRegister(actions::StoreRegister),
  // 0x87
  ConstantPool(actions::ConstantPool),
  // 0x88
  WaitForFrame(actions::WaitForFrame),
  // 0x8a
  SetTarget(actions::SetTarget),
  // 0x8b
  GotoLabel(actions::GoToLabel),
  // 0x8c
  WaitForFrame2(actions::WaitForFrame2),
  // 0x8d
  DefineFunction2(actions::DefineFunction2),
  // 0x8e
  Try(actions::Try),
  // 0x8f
  With(actions::With),
  // 0x94
  Push(actions::Push),
  // 0x96
  Jump(actions::Jump),
  // 0x99
  GetUrl2(actions::GetUrl2),
  // 0x9a
  DefineFunction(actions::DefineFunction),
  // 0x9b
  If(actions::If),
  // 0x9d
  Call,
  // 0x9e
  GotoFrame2(actions::GotoFrame2),
  // 0x9f
}

//#[cfg(test)]
//mod tests {
//  use ordered_float::OrderedFloat;
//  use ast;
//  use std;
//
//  #[test]
//  fn action_value_eq() {
//    assert_eq!(ast::actions::Value::Null, ast::actions::Value::Null);
//    assert_ne!(ast::actions::Value::Null, ast::actions::Value::Undefined);
//    assert_eq!(ast::actions::Value::I32(2), ast::actions::Value::I32(2));
//    assert_eq!(ast::actions::Value::F32(OrderedFloat(2.0)), ast::actions::Value::F32(OrderedFloat(2.0)));
//    assert_eq!(ast::actions::Value::F32(OrderedFloat(std::f32::NAN)), ast::actions::Value::F32(OrderedFloat(std::f32::NAN)));
//  }
//}
