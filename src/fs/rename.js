import { rename as fsRename } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const rename = async () => {
    if (existsSync('src/fs/files/properFilename.md')) {
        throw new Error('FS operation failed');
    }
    try {
        await fsRename(
            'src/fs/files/wrongFilename.txt',
            'src/fs/files/properFilename.md'
        );
    } catch (err) {
        console.log(err);
        throw new Error('FS operation failed');
    }
};

await rename();