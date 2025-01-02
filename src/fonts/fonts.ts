import localFont from 'next/font/local';

export const gambetta = localFont({
  src: [
    {
      path: './Gambetta-Variable.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Gambetta-Variable.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Gambetta-VariableItalic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-gambetta',
});

export const switzer = localFont({
  src: [
    {
      path: './Switzer-Variable.woff2',
      weight: '350',
      style: 'normal',
    },
    {
      path: './Switzer-Variable.woff2',
      weight: '330',
      style: 'normal',
    },
    {
      path: './Switzer-Variable.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-switzer',
});
