import './globals.scss';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Pierre-Jean Sappey-Marinier',
  description: 'Portfolio de Pierre-Jean Sappey-Marinier',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
