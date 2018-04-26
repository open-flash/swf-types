use float_is::Is;

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type", content = "value", rename_all = "kebab-case")]
pub enum Value {
  String(String),
  Float32(f32),
  Null,
  Undefined,
  Register(u8),
  Boolean(bool),
  Float64(f64),
  Sint32(i32),
  Constant(u16),
}

impl ::std::cmp::PartialEq for Value {
  fn eq(&self, other: &Self) -> bool {
    match (self, other) {
      (&Value::Float32(left), &Value::Float32(right)) => left.is(&right),
      (&Value::Float64(left), &Value::Float64(right)) => left.is(&right),
      (left, right) => left == right,
    }
  }

  fn ne(&self, other: &Self) -> bool {
    !self.eq(other)
  }
}

impl ::std::cmp::Eq for Value {}
