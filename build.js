// Build a per-clinic bot.js: node build.js clinic-config.json > bot.js
// The config replaces the /*__CLINIC_CONFIG__*/ marker with an inline override.
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var src = fs.readFileSync(__dirname + '/dental-bot.js', 'utf8');
var injected = 'var __CLINIC_CONFIG__ = ' + JSON.stringify(config) + ';\n' +
  '  for (var ck in __CLINIC_CONFIG__) DEFAULTS[ck] = __CLINIC_CONFIG__[ck];';
var out = src.replace('/*__CLINIC_CONFIG__*/', injected);
process.stdout.write(out);
