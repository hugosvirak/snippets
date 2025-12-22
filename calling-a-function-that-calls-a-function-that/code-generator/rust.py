num_functions = 6000
functions_code = ""
for i in range(1, num_functions + 1):
    if i < num_functions:
        functions_code += f"#[unsafe(no_mangle)] #[inline(never)] fn f{i}() {{ f{i+1}(); }}\n"
    else:
        functions_code += f"#[unsafe(no_mangle)] #[inline(never)] fn f{i}() {{ }}\n"

with open('benchmark.rs', 'w') as file:
    file.write(functions_code)
