import fs from 'fs';
import path from 'path';

import processSvg from './process-svg';

const IN_DIR = path.resolve(__dirname, '../icons');

console.log(`Processing SVGs in ${IN_DIR}...`);

fs
  .readdirSync(IN_DIR)
  .filter(file => path.extname(file) === '.svg')
  .forEach(svgFileName => {
    const svg = fs.readFileSync(path.join(IN_DIR, svgFileName));
    processSvg(svg, svgFileName).then(svg =>
      fs.writeFileSync(path.join(IN_DIR, svgFileName), svg),
    );
  });
