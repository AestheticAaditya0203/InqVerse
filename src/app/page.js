import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="z-10">
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert border rounded-full"
              width={100}
              height={24}
              priority
            />
      </div>
      <div>
        Hey there welcome to the world of Blogs. 
      </div>
    </main>
  )
}
