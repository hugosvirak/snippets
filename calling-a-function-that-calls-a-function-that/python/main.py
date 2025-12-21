import time

def F1():
    print("Hello World")

for i in range(20):
    start = time.perf_counter()
    F1()
    end = time.perf_counter()
    duration = (end - start) * 1000  # convert to milliseconds

    print(f"{duration:.3f} ms")
