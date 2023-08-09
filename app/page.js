"use client"
import Image from 'next/image'
import profilePic from '../public/profilepic.png'
import altPic from '../public/altpic.png'
import Link from 'next/link';
import {useState} from 'react'

export default function Page() {

  const [image, setImage] = useState(profilePic)
  return (
    <>
      <div className="h-[30rem] w-[45rem] absolute top-[4rem] grid grid-cols-1 grid-rows-2">

        <div className="grid grid-cols-9 grid-rows-6 relative">
          <div className="col-start-4 col-end-7 relative row-span-6 w-[] h-[]">
            <Image
              onMouseEnter={() => setImage(altPic)}
              onMouseOut={() => setImage(profilePic)}
              src={image}
              alt="Profile Picture"
              fill={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-9 grid-rows-6 relative">

          <div className="col-start-2 col-end-9 relative row-span-4 mt-3 text-center">
            <p>Hello! I am David Petre.</p>
            <br />
            <p>I am a rising third-year at the&nbsp;
              <a href="https://www.uchicago.edu/en" target="_blank"
                className="underline decoration-sky-500 text-indigo-950 hover:text-blue-700">
                University of Chicago
              </a>
              &nbsp;studying Computer Science and Economics.
            </p>
            <br />
            <p>My <Link href="/David_Petre_Resume.pdf" target="_blank"
              className="underline decoration-sky-500 text-indigo-950 hover:text-blue-700">
              Resume</Link>.
            </p>
          </div>

          <div className="row-start-5 row-span-2 relative col-start-4 col-end-7 ">
            <div className="grid grid-cols-3 grid-rows-1 gap-1">

              <a href="https://github.com/dpeachpeach" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%" 
                viewBox="0 0 24 24"
                className=" fill-indigo-950 transition ease-linear hover:fill-red-800 duration-300">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/david-petre-1079b61b7/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="100%" 
                height="100%"
                viewBox="0 0 24 24"
                className="fill-indigo-950 transition ease-linear hover:fill-red-800 duration-300">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                </svg>
              </a>
              <a href="https://twitter.com/originalwololo" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="100%" 
                height="100%" 
                viewBox="0 0 24 24"
                className="fill-indigo-950 transition ease-linear hover:fill-red-800 duration-300"
                >
                
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>
               </svg>
              </a>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}


