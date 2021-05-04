import Header from './header'
import Footer from './footer/Footer'
import Head from 'next/head'


export default function Layout({ home, _title, children, className, title }) {
  return (
    <>
      <div className="top-40 min-w-full">
        <Header home={home} />

        <Head>
          <title>{_title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

          <div
            id="content"
            className=""
          >
            {children}
          </div>

        </main>
      </div>
      <Footer />
    </>
  )
}
