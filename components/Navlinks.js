import Link from 'next/link'

const Navlinks =( {Navlink} )=>{
return(
   <ul className="primary">
    <Link href="/page/[slug]" as={`/page/${Navlink.slug}`}>
    <a className="text-indigo-900">{Navlink.title}</a>
  </Link> 
  </ul>
)
}
export default Navlinks;