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
 buttonClasses="bg-new-green px-5 py-3 rounded-lg focus:outline-none"
 overlay={true}
 overlayClasses="fixed bottom-0 bg-new-blue py-5 z-50 w-full"
 containerClasses="xl:container mx-auto  flex w-full justify-between items-center"
 contentClasses="w-5/6"
 expires={150}
 >We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy and Cookie and Tracking Notice. By continuing to browse our website, you agree to our use of cookies.</CookieConsent>
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
  );
}

export default MyApp
