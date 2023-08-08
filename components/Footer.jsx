import Link from 'next/link'

export default function Footer() {
    return (
       <div className = "fixed bottom-0 left-0 right-0 text-center" >
        <footer className = "w-full bg-[#fffedd] h-7 ">
            <p>
                <Link href="https://github.com/dpeachpeach/dpeachpeach.github.io"
                      className="underline decoration-sky-500 text-indigo-950 hover:text-blue-700">
                    Made in 2023 using React, Next.js 13, and TailwindCSS. Hosted on Github Pages.
                </Link>
            </p>
        </footer>
       </div> 
    )
}
