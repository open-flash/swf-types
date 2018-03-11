pub trait BytewiseEq {
  fn bytewise_eq(&self, other: &Self) -> bool;
}

impl BytewiseEq for f32 {
  fn bytewise_eq(&self, other: &f32) -> bool {
    let left_bits: u32 = unsafe { ::std::mem::transmute(*self) };
    let right_bits: u32 = unsafe { ::std::mem::transmute(*other) };
    left_bits == right_bits
  }
}

impl BytewiseEq for f64 {
  fn bytewise_eq(&self, other: &f64) -> bool {
    let left_bits: u64 = unsafe { ::std::mem::transmute(*self) };
    let right_bits: u64 = unsafe { ::std::mem::transmute(*other) };
    left_bits == right_bits
  }
}

impl<T: BytewiseEq> BytewiseEq for Vec<T> {
  fn bytewise_eq(&self, other: &Self) -> bool {
    if self.len() != other.len() {
      return false;
    }
    true
  }
}

#[cfg(test)]
mod test_swf_samples {
  use super::BytewiseEq;

  #[test]
  fn test_f32_is() {
    assert!(::std::f32::NAN.bytewise_eq(&::std::f32::NAN))
  }
}
