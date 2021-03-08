import Link from 'next/link'
import React from 'react'


const Logo = ({ className }) => {
    return (
        <div className={className}>
            <Link href='/' prefetch={!process.env.STORYBOOK}>
                <a className="px-5">
                  logo
                </a>
            </Link>
        </div>
    )
}

export default Logo
