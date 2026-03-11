import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const isWindows = process.platform === 'win32';
const bin = (name) =>
  path.join(rootDir, 'node_modules', '.bin', isWindows ? `${name}.cmd` : name);

const commands = [
  [
    bin('tailwindcss'),
    [
      '-i',
      './src/styles/globals.source.css',
      '-o',
      './src/styles/globals.css',
      '--config',
      './tailwind.config.cjs',
    ],
  ],
  [bin('next'), ['build', ...process.argv.slice(2)]],
];

for (const [command, args] of commands) {
  const result = spawnSync(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
