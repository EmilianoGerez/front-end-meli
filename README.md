# Angular Front-End MELI

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build SPA

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Build SSR App

Run `npm run build:prod` to build the ssr project. The build artifacts will be stored in the `dist/` directory.

I include the `dist/`folder for avoid some problem in the build process.(TypeScript version, etc).

## Run SSR App (run after finish build ssr)
Run `npm run server` for a SSR server. Navigate to `http://localhost:8080/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Small example for search form (header.component.spec)
