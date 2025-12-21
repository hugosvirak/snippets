#[link(name = "lib", kind = "static")]
extern "C" {
    fn f1();
}

fn main() {
    use std::time::Instant;
    let now = Instant::now();
    unsafe{ f1(); } 

    let elapsed = now.elapsed();
    println!("Elapsed: {:.2?}", elapsed);
}

// rustc main.rs —-extern custom1=path/to/libcustom1.rlib
// rustc -C opt-level=3 main.rs
// rustc -C opt-level=3  --crate-type lib lib.rs
