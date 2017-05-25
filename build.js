function buildClient() {
    var browserify = require('browserify');
    var tsify = require('tsify');

    browserify('html/client.ts', { debug: true })
        .plugin(tsify, { project: '.' })
        .transform('browserify-shim')
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(process.stdout);
}

buildClient();