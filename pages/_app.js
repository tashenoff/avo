import '../styles/tailwind.css'
import '../styles/globalstyles.css'
import '../styles/blogInnerHtml.css'
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
