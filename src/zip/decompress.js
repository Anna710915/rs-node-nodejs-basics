import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createUnzip } from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const decompress = async () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
	const filePath = resolve(__dirname, 'files', 'archive.gz');
	const unzip = createUnzip();
	const source = createReadStream(filePath);
	const destination = createWriteStream(`${__dirname}/files/fileToCompress.txt`);
	await pipeline(source, unzip, destination);
};

await decompress();