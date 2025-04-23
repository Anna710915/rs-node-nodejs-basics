import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const filePath = resolve(__dirname, 'files', 'fileToWrite.txt');
  
  try {
    await pipeline(
      process.stdin,
      createWriteStream(filePath, { flags: 'w' })
    );
    console.log('Data written to file successfully.');
  } catch (err) {
    console.error('Pipeline failed.', err);
  }
};

await write();