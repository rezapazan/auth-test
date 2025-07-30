module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "tsc --noEmit",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `pnpx eslint --fix ${filenames.join(" ")}`,
    `pnpx prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `pnpx prettier --write ${filenames.join(" ")}`,
};
