num_functions = 50
functions_code = ""
for i in range(1, num_functions + 1):
    if i < num_functions:
        functions_code += f"def  F{i}() {{ F{i+1}(); }}\n"
    else:
        functions_code += f"def F{i}() {{ }}\n"

with open('benchmark.py', 'w') as file:
    file.write(functions_code)
