use basic_types::Rect;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FontLayout {
  pub ascent: u16,
  pub descent: u16,
  pub leading: u16,
  pub advances: Vec<u16>,
  pub bounds: Vec<Rect>,
  pub kerning: Vec<KerningRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct KerningRecord {
  pub left_code_point: u16,
  pub right_code_point: u16,
  pub adjustment: i16,
}
