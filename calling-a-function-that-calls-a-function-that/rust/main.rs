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
