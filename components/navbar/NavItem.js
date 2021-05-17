import Link from 'next/link'
const NavItem = ({ label, link }) => {
    return (

        <Link href={link} prefetch={!process.env.STORYBOOK}>
            <a className="break-normal whitespace-pre px-5 lg:border-0 border-b border-dotted border-white lg:mb-0 mb-5 lg:w-full w-full lg:pb-0 pb-2 text-center">
                {label}
            </a>
        </Link>

    )
}

export default NavItem
