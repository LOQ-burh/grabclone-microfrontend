## Intro

This project has been created with two purposes:

- The first purpose is to practice with microfrontend architecture.
- The second purpose is to share best practices and different implementations of the same problem to gain diverse perspectives.

> **Learning by reading is good but learning by doing is better.**

## If you want to . . . 

## Monorepo - Setting up lerna

Mono-repo helps us to run/serve all projects at once without going into each folder in our local system.

## Prepare

### UI

[1] clone project by running the following commands from separate terminals:

```sh
git clone https://github.com/LOQ-burh/grabclone-microfrontend.git
```

```sh
cd packages
```

[2] delete files "package-lock.json" in current folder and micro-apps:

and run:

```sh
npm run prepare
```

[3] run container:

```sh
npm run serve
```

You will see a UI's Grab on http://localhost:8080