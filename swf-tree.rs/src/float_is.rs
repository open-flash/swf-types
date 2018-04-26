pub trait Is {
  fn is(&self, other: &Self) -> bool;
}

impl Is for f32 {
  fn is(&self, other: &f32) -> bool {
    let left_bits: u32 = unsafe { ::std::mem::transmute(*self) };
    let right_bits: u32 = unsafe { ::std::mem::transmute(*other) };
    left_bits == right_bits
  }
}

impl Is for f64 {
  fn is(&self, other: &f64) -> bool {
    let left_bits: u64 = unsafe { ::std::mem::transmute(*self) };
    let right_bits: u64 = unsafe { ::std::mem::transmute(*other) };
    left_bits == right_bits
  }
}

impl<T: Is> Is for Vec<T> {
  fn is(&self, other: &Self) -> bool {
    if self.len() != other.len() {
      return false;
    }
    true
  }
}

#[cfg(test)]
mod test_swf_samples {
  use super::Is;

  #[test]
  fn test_f32_is() {
    assert!(::std::f32::NAN.is(&::std::f32::NAN))
  }
}
