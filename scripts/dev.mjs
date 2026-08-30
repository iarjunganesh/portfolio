import { spawn } from "node:child_process";
import process from "node:process";

const forwarded = process.argv
  .slice(2)
  .filter((argument) => argument !== "--strictPort")
  .map((argument) => (argument === "--host" ? "--hostname" : argument));

const next = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", ...forwarded], {
  stdio: "inherit",
});

next.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
