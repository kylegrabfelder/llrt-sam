import fs from 'fs';

const bootstrap = './bootstrap';
const buildDir = './.aws-sam/build';
const lambdas = fs.readdirSync(buildDir, { withFileTypes: true });

lambdas.forEach((lambda) => {
  if (lambda.isDirectory()) {
    fs.copyFileSync(bootstrap, `${buildDir}/${lambda.name}/bootstrap`);
  }
});