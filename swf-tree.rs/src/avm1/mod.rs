pub mod actions;
mod value;
pub use self::value::Value;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "action", rename_all = "kebab-case")]
pub enum Action {
  Unknown(actions::UnknownAction),
  Add,
  And,
  CastOp,
  CloneSprite,
  Divide,
  Equals,
  EndDrag,
  FsCommand2,
  GetProperty,
  GetVariable,
  ImplementsOp,
  Less,
  MbStringLength,
  Multiply,
  NextFrame,
  Not,
  Or,
  PrevFrame,
  Play,
  Pop,
  RandomNumber,
  RemoveSprite,
  SetProperty,
  SetTarget2,
  SetVariable,
  StartDrag,
  Stop,
  StopSounds,
  StringAdd,
  StringEquals,
  StringExtract,
  StringLength,
  StringLess,
  Subtract,
  Throw,
  ToInteger,
  ToggleQuality,
  Trace,
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
