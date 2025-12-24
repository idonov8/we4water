import next from 'eslint-config-next';

export default [
  ...next,
  {
    rules: {
      // This repo is mid-migration; keep lint strictness manageable.
    }
  }
];
