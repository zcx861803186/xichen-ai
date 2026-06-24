// dns-patch.js — Comprehensive DNS patch for Vercel domains
const dns = require('dns');
const originalLookup = dns.lookup;
const originalResolve4 = dns.resolve4;

const vercelIPs = {
  'vercel.com': '76.76.21.21',
  'api.vercel.com': '76.76.21.21',
  'oauth.vercel.com': '76.76.21.21',
  'auth.vercel.com': '76.76.21.21',
  'vercel.link': '76.76.21.21',
  'errors.vercel.com': '76.76.21.21',
  'vercel.app': '76.76.21.21',
};

dns.lookup = function(hostname, options, callback) {
  if (typeof options === 'function') { callback = options; options = {}; }
  if (vercelIPs[hostname]) {
    const ip = vercelIPs[hostname];
    const family = options?.family === 6 ? 6 : 4;
    if (callback) process.nextTick(() => callback(null, ip, family));
    return { family, address: ip };
  }
  return originalLookup.call(dns, hostname, options, callback);
};

// Also patch resolve4
dns.resolve4 = function(hostname, options, callback) {
  if (typeof options === 'function') { callback = options; options = {}; }
  if (vercelIPs[hostname]) {
    if (callback) process.nextTick(() => callback(null, [vercelIPs[hostname]]));
    return { on: () => {} };
  }
  return originalResolve4.call(dns, hostname, options, callback);
};

// Patch dns.promises
const { promises } = dns;
if (promises && promises.lookup) {
  const origLookup = promises.lookup;
  promises.lookup = async function(hostname, options) {
    if (vercelIPs[hostname]) return { address: vercelIPs[hostname], family: 4 };
    return origLookup.call(promises, hostname, options);
  };
}
if (promises && promises.resolve4) {
  const origResolve4 = promises.resolve4;
  promises.resolve4 = async function(hostname, options) {
    if (vercelIPs[hostname]) return [vercelIPs[hostname]];
    return origResolve4.call(promises, hostname, options);
  };
}
