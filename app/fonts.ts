import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

// Temporarily comment out local font to fix build issues
/*
export const favorite = localFont({
  src: [
    {
      path: '../public/fonts/Favorite-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Favorite-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-favorite',
  fallback: ['Arial', 'sans-serif'],
})
*/

// Temporary replacement
export const favorite = {
  variable: '--font-sans'
} 