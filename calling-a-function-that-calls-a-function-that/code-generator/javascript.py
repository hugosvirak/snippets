num_functions = 50000
functions_code = ""
for i in range(1, num_functions + 1):
    if i < num_functions:
        functions_code += f"function F{i}() {{ F{i+1}(); }}\n"
    else:
        functions_code += f"function F{i}() {{ }}\n"

with open('benchmark.js', 'w') as file:
    file.write(functions_code)
