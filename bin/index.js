#! /usr/bin/env node

const argv = process.argv.slice(2);
require('../dist/index.cjs')(argv);