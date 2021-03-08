import Link from 'next/link'
const NavItem = ({ label, link }) => {
    return (

        <Link href={link} prefetch={!process.env.STORYBOOK}>
            <a className="px-5">
                {label}
            </a>
        </Link>

    )
}

export default NavItem
