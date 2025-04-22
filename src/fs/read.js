import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const filePath = resolve('src/fs/files/fileToRead.txt');
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();