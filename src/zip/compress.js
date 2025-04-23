import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
  const gzip = createGzip();
  const source = createReadStream(filePath);
  const destination = createWriteStream(`${__dirname}/files/archive.gz`);
  await pipeline(source, gzip, destination);
};

await compress();