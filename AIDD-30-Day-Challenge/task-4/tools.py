import json
from pathlib import Path

PROFILE_FILE = Path("user_profile.json")

def read_user_profile():
    if PROFILE_FILE.exists():
        with open(PROFILE_FILE, "r") as f:
            return json.load(f)
    return {}

def update_user_profile(key, value):
    data = read_user_profile()
    data[key] = value
    with open(PROFILE_FILE, "w") as f:
        json.dump(data, f, indent=2)
