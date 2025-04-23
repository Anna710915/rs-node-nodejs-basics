import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const input = process.stdin;
    const output = process.stdout;

    const transform = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join(''));
      },
    });

    await pipeline(
        input,
        transform,
        output
    );
};

await transform();