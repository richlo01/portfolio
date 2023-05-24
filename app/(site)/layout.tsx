import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Richard Lopez',
  description: 'Portfolio - Where all the projects can be viewed!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="container flex justify-between max-w-5xl mx-auto px-5 lg:px-0 py-4">
            <Link
              href="/"
              className="font-extrabold group font-lg tracking-widest">
                RSL.
            </Link>
            <div className="flex gap-4">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="group">
                  {page.title}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-indigo-600"></span>
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="container max-w-5xl mx-auto px-5 lg:px-0 py-20">{children}</main>
      </body>
    </html>
  )
}
