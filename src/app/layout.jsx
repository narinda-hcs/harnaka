import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HCS',
  description: 'Harnaka Cristal Sejahtra(HCS), merupakan perusahaan distributor yang bergerak di bidang Fast Moving Consumer Goods (FMCG) seperti sembako, kebutuhan dan perawatan rumah tangga, dan barang-barang konsumsi harian',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
