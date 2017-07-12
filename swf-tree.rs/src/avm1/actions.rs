use ordered_float::OrderedFloat;

// Action code 0x81
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GotoFrame {
  pub frame: usize,
}

// Action code 0x83
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GetUrl {
  pub url: String,
  pub target: String,
}

// Action code 0x87
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StoreRegister {
  pub register_number: u8,
}

// Action code 0x88
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ConstantPool {
  pub constant_pool: Vec<String>,
}

// Action code 0x8a
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct WaitForFrame {
  pub frame: usize,
  pub skip_count: usize,
  // TODO: body: Vec<Action> ?
}

// Action code 0x8b
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SetTarget {
  pub target_name: String,
}

// Action code 0x8c
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GoToLabel {
  pub label: String,
}

// Action code 0x8d
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct WaitForFrame2 {
  pub skip_count: usize,
  // TODO: body: Vec<Action> ?
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Parameter {
  pub register: u8,
  pub name: String,
}

// Action code 0x8e
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFunction2 {
  // Empty string if anonymous
  pub name: String,
  pub preload_parent: bool,
  pub preload_root: bool,
  pub suppress_super: bool,
  pub preload_super: bool,
  pub suppress_arguments: bool,
  pub preload_arguments: bool,
  pub suppress_this: bool,
  pub preload_this: bool,
  pub preload_global: bool,
  pub register_count: usize,
  pub parameters: Vec<Parameter>,
  pub body: Vec<super::Action>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", content = "value", rename_all = "kebab-case")]
pub enum CatchTarget {
  Register(u8),
  Variable(String),
}

// Action code 0x8f
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Try {
  pub try_size: usize,
  pub catch_target: CatchTarget,
  pub catch_size: usize,
  pub finally_size: usize,
}

// Action code 0x94
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct With {
  pub code_size: usize,
  // TODO: body: Vec<Action>
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", content = "value", rename_all = "kebab-case")]
pub enum Value {
  CString(String),
  F32(OrderedFloat<f32>),
  Null,
  Undefined,
  Register(u8),
  Boolean(bool),
  F64(OrderedFloat<f64>),
  I32(i32),
  Constant(u16),
}

// Action code 0x96
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Push {
  pub values: Vec<Value>,
}

// Action code 0x99
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Jump {
  pub branch_offset: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum SendVarsMethod {
  None,
  Get,
  Post,
}

// Action code 0x9a
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GetUrl2 {
  pub send_vars_method: SendVarsMethod,
  pub load_target: bool,
  pub load_variables: bool,
}

// Action code 0x9b
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFunction {
  // Empty string if anonymous
  pub name: String,
  pub parameters: Vec<String>,
  pub body: Vec<super::Action>,
}

// Action code 0x9d
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct If {
  pub branch_offset: i16,
}

// Action code 0x9f
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GotoFrame2 {
  pub play: bool,
  pub scene_bias: Option<usize>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct UnknownAction {
  pub code: u8,
  pub data: Vec<u8>,
}
