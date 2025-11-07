num_functions = 100000
functions_code = ""
for i in range(1, num_functions + 1):
    if i < num_functions:
        functions_code += f"function F{i}() {{ F{i+1}(); }}\n"
    else:
        functions_code += f"function F{i}() {{ }}\n"

# Open a file in write mode
with open('benchmark.js', 'w') as file:
    # Write the string to the file
    file.write(functions_code)
