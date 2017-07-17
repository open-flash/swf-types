use basic_types::StraightSRgba8;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Solid {
  pub color: StraightSRgba8,
}
