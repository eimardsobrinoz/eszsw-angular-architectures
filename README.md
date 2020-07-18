# EszswAngularArchitectures

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Services and Shared Module

The best way to set services is in core folder using providedIn: 'root' syntax without adding them within providers[] in Modules.
Why? Because a large amount of lazy features could import this shared Module, having its own instance of service, something that we surely are not looking for.
That is why in the Shared Module we should never add services. It should only contain declarables (components, pipes, directives, etc) and modules (which only contains declarables too).

## Lazy Loading
This first architecture makes use of two lazy features.
If one of them gets too big, take into account add new nested lazy features if needed.
