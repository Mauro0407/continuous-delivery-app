const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const buildArtifact = {
  appName: 'continuous-delivery-app',
  buildTimestamp: new Date().toISOString(),
  status: 'optimized-production-ready'
};

fs.writeFileSync(
  path.join(distDir, 'metadata.json'),
  JSON.stringify(buildArtifact, null, 2)
);

console.log('Build empaquetado correctamente en el directorio dist/');