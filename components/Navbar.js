import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-2 z-10 top-0 w-full">
        <div className="container mx-auto flex flex-col flex-wrap">



          <div className="flex py-3 justify-between items-center">
            <div>
            Essay365
              </div>
            <div className='flex items-center'>
              <div>
                <Link href="/tags/tagoverview" as="/tags/tagoverview">
                  <a className="text-white px-8 truncate">Tags</a>
                </Link>
              </div>

              <div>
                <Link href="/blogpages/[slug]" as="/blogpages/about">
                  <a className="text-white px-8 truncate">About me</a>
                </Link>
              </div>

              <div>
                <Link href="/blogpages/[slug]" as="/blogpages/legal">
                  <a className="text-white px-8 truncate">Legal</a>
                </Link>
              </div>
        
              <Button className="bg-new-green" title="Sign Up"/>
            </div>
          </div>
        </div>


      </nav>
    )
}

export default Navbar
