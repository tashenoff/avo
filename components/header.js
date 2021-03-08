import Topbar from './Topbar'
import Switch from "react-switch";
import Navbar from '../components/navbar/Navbar'


export default function Header({ home, children }) {

  return (
    <>
      <Topbar>
        <div >
          topbar
                </div>
      </Topbar>
  <Navbar />
    </>
  )
}
