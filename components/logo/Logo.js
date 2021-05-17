import Link from 'next/link'
import React from 'react'


const Logo = ({ className }) => {
    return (
        <div className={className}>
            <Link href='/' prefetch={!process.env.STORYBOOK}>
                <a className="lg:text-white text-gray-900 font-bold">
                  The essay<span className="text-green-500 italic">365</span>
                </a>
            </Link>
        </div>
    )
}

export default Logo
