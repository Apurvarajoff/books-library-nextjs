import { ReactNode } from 'react';
import './globals.css';
export const metadata = {
  title: 'Books Library',
  description: 'A demo of Server + Client Components in Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="p-8 font-sans bg-gray-100">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Books Library</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
