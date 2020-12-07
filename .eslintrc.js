module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'prettier'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'new-cap': ['error', { 'capIsNew': false }]
  },
};
