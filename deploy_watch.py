from pathlib import Path
import os
import subprocess
import time

ROOT = Path(__file__).resolve().parent
WATCHED_FILES = ("index.html", "app.js", "offers.json", "vercel.json")
POLL_SECONDS = 2


def snapshot():
    return {name: (ROOT / name).stat().st_mtime_ns for name in WATCHED_FILES}


def deploy():
    environment = os.environ.copy()
    runtime_bin = Path("/tmp/node-runtime/bin")
    if runtime_bin.is_dir():
        environment["PATH"] = f"{runtime_bin}:{environment.get('PATH', '')}"
        command = str(runtime_bin / "npx")
    else:
        command = "npx"

    print("Changes detected. Deploying to Vercel...", flush=True)
    result = subprocess.run(
        [command, "--yes", "vercel", "--prod", "--yes", "--name", "titan-eye-indiranagar"],
        cwd=ROOT,
        env=environment,
        check=False,
    )
    if result.returncode == 0:
        print("Deployment complete: https://titan-eye-indiranagar.vercel.app", flush=True)
    else:
        print(f"Deployment failed with exit code {result.returncode}.", flush=True)


def main():
    previous = snapshot()
    print("Watching site files for changes...", flush=True)
    while True:
        time.sleep(POLL_SECONDS)
        current = snapshot()
        if current != previous:
            time.sleep(1)
            previous = snapshot()
            deploy()


if __name__ == "__main__":
    main()
