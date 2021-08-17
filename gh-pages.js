import ghpages from 'gh-pages';

ghpages.publish(
  'public',
  {
    branch: 'production',
    repo: 'https://github.com/zawolanski/tip-calculator.git',
    user: {
      name: 'zawolanski',
      email: 'sebastian.zawolanski@gmail.com',
    },
  },
  () => {
    console.log('Deploy Complete!');
  },
);
