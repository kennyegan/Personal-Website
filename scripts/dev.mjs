import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const isWindows = process.platform === 'win32';
const bin = (name) =>
  path.join(rootDir, 'node_modules', '.bin', isWindows ? `${name}.cmd` : name);

const initialBuild = spawnSync(
  bin('tailwindcss'),
  [
    '-i',
    './src/styles/globals.source.css',
    '-o',
    './src/styles/globals.css',
    '--config',
    './tailwind.config.cjs',
  ],
  {
    cwd: rootDir,
    stdio: 'inherit',
  }
);

if (initialBuild.status !== 0) {
  process.exit(initialBuild.status ?? 1);
}

const children = [];
let shuttingDown = false;

function shutdown(code = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;

  for (const child of children) {
    if (child.exitCode === null && child.signalCode === null) {
      child.kill('SIGTERM');
    }
  }

  setTimeout(() => process.exit(code), 100);
}

function launch(command, args) {
  const child = spawn(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
  });

  children.push(child);

  child.on('exit', (code, signal) => {
    if (shuttingDown) {
      return;
    }

    shutdown(signal ? 0 : (code ?? 0));
  });

  return child;
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

launch(bin('tailwindcss'), [
  '-i',
  './src/styles/globals.source.css',
  '-o',
  './src/styles/globals.css',
  '--config',
  './tailwind.config.cjs',
  '--watch',
]);

launch(bin('next'), ['dev', ...process.argv.slice(2)]);
