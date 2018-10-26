use crate::BlendMode;
use crate::ColorTransformWithAlpha;
use crate::Filter;
use crate::Matrix;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ButtonRecord {
  state_hit_test: bool,
  state_down: bool,
  state_over: bool,
  state_up: bool,
  character_id: u16,
  depth: u16,
  matrix: Matrix,
  #[serde(skip_serializing_if = "Option::is_none")]
  color_transform: Option<ColorTransformWithAlpha>,
  filters: Vec<Filter>,
  blend_mode: BlendMode,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ButtonCondAction {
  #[serde(skip_serializing_if = "Option::is_none")]
  conditions: Option<ButtonCond>,
  actions: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ButtonCond {
  idle_to_over_down: bool,
  out_down_to_idle: bool,
  out_down_to_over_down: bool,
  over_down_to_out_down: bool,
  over_down_to_over_up: bool,
  over_up_to_over_down: bool,
  over_up_to_idle: bool,
  idle_to_over_up: bool,
  over_down_to_idle: bool,
  #[serde(skip_serializing_if = "Option::is_none")]
  key_press: Option<u32>,
}
