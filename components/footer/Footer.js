import Link from 'next/link'
import Content from '../Content'
import NavItem from '../navbar/NavItem'
import { Data } from '../navbar/Data'
import NavItemList from '../navbar/NavItemList'



export default function Footer() {
  return (
    <footer className="bg-new-blue w-full">
      <Content>

        <div className="flex w-full py-4">
          <div className="flex w-1/2 px-5">

            <Link prefetch={!process.env.STORYBOOK} href="/blogpages/[slug]" as="/blogpages/copyright">
              <a className="text-white">Copyright</a>
            </Link>
          </div>
          <div className="flex w-1/2 justify-end">
           
          </div>
        </div>
      </Content>
    </footer>
  )
}
