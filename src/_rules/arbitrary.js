export const cssVariables = [
  [
    /^\[(--(.*)):(.*)\]$/,
    ([, variable, , value]) => ({ [variable]: value?.trim() }),
  ],
];
