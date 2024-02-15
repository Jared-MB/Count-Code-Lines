# Code Line Counter

This is a simple code line counter written in Javascript. It counts all the numbers of lines in a file, including empty lines and comments.

## Usage

Install the package using npm, yarn or pnpm as a dev dependency.

```bash
pnpm add @kristall/count-code-lines -D
```

Then you can use it in your package.json scripts.

```json
{
  "scripts": {
    "count-lines": "node node_modules/@kristall/count-code-lines/index.js"
  }
}
```

And that's it! You can now run the script using `pnpm run count-lines` and it will count all the lines in your project and which directories does it read.