import sys, os
from frictionless import describe_schema
from datetime import datetime

def infer_schema(file_path,name):
    print("Inferring from Python...");
    schema = describe_schema(file_path)
    output_path = "backend/esquemas/" + name
    schema.to_yaml(output_path)

print(sys.argv[1])
print(sys.argv[2]);
infer_schema(sys.argv[1], sys.argv[2])

