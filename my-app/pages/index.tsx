import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
            // <Image
            //   src="/vercel.svg"
            //   alt="Vercel Logo"
            //   className="dark:invert"
            //   width={100}
            //   height={24}
            //   priority
            // />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col icon-list">
          <Link href="/mail">
            <span className="icon mail large"></span>
          </Link>
          <span className="icon messenger large"></span>
        </div>
      </div>
    </main>
  )
}
