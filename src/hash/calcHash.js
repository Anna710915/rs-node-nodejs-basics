import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { createHash }  from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = resolve(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    
  const hash = createHash('sha256');
  const readStream = createReadStream(filePath);

  pipeline(
    readStream,
    hash,
    (err) => {
      if (err) {
        console.error('Pipeline failed:', err);
      } else {
        const result = hash.digest('hex');
        console.log(result);
      }
    }
  );
};

await calculateHash();