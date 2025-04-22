import { cp } from 'node:fs/promises';

const copy = async () => {
    try {
        await cp(
            'src/fs/files',
            'src/fs/files_copy',
            {
                force: false,
                errorOnExist: true,
                recursive: true
            }
        );
    } catch (err) {
        console.log(err);
        throw new Error('FS operation failed');
    }
};

await copy();
