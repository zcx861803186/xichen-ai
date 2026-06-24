// DNS patch: use Google DNS to resolve Vercel correctly
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Verify
dns.resolve('vercel.com', (err, addresses) => {
  if (err) {
    console.error('DNS error:', err);
    process.exit(1);
  }
  console.log('vercel.com resolves to:', addresses);
});

// Now spawn the real vercel command
const { spawn } = require('child_process');
const args = process.argv.slice(2);
const child = spawn('npx', ['vercel', ...args], {
  stdio: 'inherit',
  env: { ...process.env, NODE_OPTIONS: '' }  // don't pass our wrapper
});
child.on('exit', (code) => process.exit(code));
