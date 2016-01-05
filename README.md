# Run tests with Karma and Webpack

Tests setup for all modern JS web apps using [Karma](http://karma-runner.github.io/), [Webpack](https://webpack.github.io/), [Jasmine](http://jasmine.github.io/) and some cool reporters. There is also support for `sourcemaps`. It's not a bare minimum, although I tried to keep things simple.

## Clone

To only clone specyfic branch use `git clone -b {branch-name} {repo}`.

```
git clone -b karma-webpack https://github.com/MichalZalecki/react-the-boring-part
```

## Scripts

**Run test** (using production config)

```bash
npm test
```

**Run continuous tests** (using production config)

```bash
npm run test-watch
```

or

```bash
npm test -- --auto-watch --no-single-run
```

Start **Express** (for production)

```bash
npm start
```

Start **WebpackDevServer** (for development)

```bash
npm run dev
```

Build (also run in *postinstall*)

```bash
npm run build
```
