# Tooling Preferences

## Make

If the repository contains a Makefile, prefer using `make` commands instead of `npm` or `yarn` scripts.
Use `make help` to check the repository make commands. Use the package.json scripts as fallback.

## Code Snippet Sharing

When your answer contains a single code snippet that's likely to be run by the user and not something you already changed on a file, copy it to my clipboard:
`echo "<the code snippet>" | pbcopy`

## File Deletion

Except for `node_modules` and any other project dependencies, prefer using `trash` instead of `rm`. It's safer and it allows to restore from the trash if you need to recover anything.

## Docker

If you ever get an error like `Cannot connect to the Docker daemon at ... run/docker.sock. Is the docker daemon running?`,
you can run `open -a OrbStack` to start the Docker daemon (I'm using OrbStack on macOS).
