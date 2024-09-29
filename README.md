# gaggia-classic-controller

A Deno app for controlling various functions of a Gaggia Classic espresso machine.

This app will run in a Docker container, and will be tested with a CM4 dev board.

## Dev Notes:

> [!note]
> This project is intended to be run in a (VS Code) Dev Container: please see the .devcontainer directory for more details.

### Deno Tasks:

```
deno task build // build the src into a docker image
deno task serve // run the docker image
deno task test  // test all `*.test.ts` files
```
