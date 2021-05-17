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
          <div className="flex w-full px-5 justify-between">

            <Link prefetch={!process.env.STORYBOOK} href="#" as="#">
              <a className="text-white">Copyright</a>
            </Link>
            <Link prefetch={!process.env.STORYBOOK} href="/terms" as="/terms">
            <a className="text-white">Terms of use</a>
            </Link>


            
          </div>
      
        </div>
      </Content>
    </footer>
  )
}
