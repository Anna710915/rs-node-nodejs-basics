import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = resolve(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  const readStream = createReadStream(filePath, 'utf8');
  
  readStream
    .on('data', (chunk) => {
      process.stdout.write(chunk + '\n'); 
    })
    .on('end', () => {
      console.log('\n');
    })
    .on('error', (error) => {
      process.stderr.write(`Error: ${error.message}\n`);
      process.exit(1);
    });
};

await read();
