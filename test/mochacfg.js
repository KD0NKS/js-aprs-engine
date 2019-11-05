// https://stackoverflow.com/questions/35541079/mocha-test-failing-using-babel-and-webpack
// Not necessary for now, but we'll keep it for future reference
// process.env.NODE_ENV = 'test';

// -------------------------------
// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.

['.gif'].forEach(ext => {
    require.extensions[ext] = () => null;
});