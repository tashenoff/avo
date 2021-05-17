import '../styles/tailwind.css'
import '../styles/globalstyles.css'
import '../styles/blogInnerHtml.css'
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from "next-themes";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  return (
    <>
 <CookieConsent
 disableStyles={true}
 buttonClasses="bg-new-green px-5 py-3 rounded-lg focus:outline-none lg:mt-0 mt-5"
 overlay={true}
 overlayClasses="fixed bottom-0 bg-gray-800 py-5 z-50 w-full"
 containerClasses="xl:container mx-auto flex w-full lg:flex-row flex-col p-5 lg:p-0 text-white justify-between items-center"
 contentClasses="lg:w-5/6 w-full "
 expires={150}
 >We 11use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy and Cookie and Tracking Notice. By continuing to browse our website, you agree to our use of cookies.</CookieConsent>
    <NextNprogress
  color="#25D293"
  startPosition={0.4}
  stopDelayMs={200}
  height="4"
/>

    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}

export default MyApp
