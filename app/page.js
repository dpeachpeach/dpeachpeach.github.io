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
            <p>I am a third-year at the&nbsp;
              <a href="https://www.uchicago.edu/en" target="_blank"
                className="underline decoration-sky-500 text-indigo-950 hover:text-blue-700">
                University of Chicago
              </a>
              &nbsp;studying Computer Science and Economics.
            </p>
            <br />
            <p>My <Link href="/Petre_David_Resume.pdf" target="_blank"
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
              <a href="https://leetcode.com/dpeachpeach/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="90%" 
                height="90%" 
                viewBox="0 0 24 24"
                className="fill-indigo-950 transition ease-linear hover:fill-red-800 duration-300">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}


