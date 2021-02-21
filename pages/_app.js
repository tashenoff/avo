import '../styles/tailwind.css'
import '../styles/globalstyles.css'
import '../styles/blogInnerHtml.css'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
