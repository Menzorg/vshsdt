import type { Metadata } from 'next';
import { Alegreya_Sans } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/theme';

const alegriya = Alegreya_Sans({ 
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin','cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ВШСДТ',
  description: 'Высшаая Школа Стилистики Дизайна и Технологий',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={alegriya.className}>
      <body style={{ margin: 0 }}>
        <ChakraProvider theme={theme} cssVarsRoot="body">
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
