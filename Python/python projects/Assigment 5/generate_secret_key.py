from cryptography.fernet import Fernet

# Generate Fernet key
key = Fernet.generate_key()

# Save key into a file named secret.key
with open("secret.key", "wb") as key_file:
    key_file.write(key)

print("✅ secret.key file generated successfully!")
