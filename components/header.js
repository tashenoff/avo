import Link from 'next/link'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Header({ home }) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    
    <nav className="bg-gray-800 p-2 fixed z-10 top-0 w-full">
      <div className="container mx-auto flex flex-col flex-wrap items-center">
    
        <div>
       
          <div className="flex mb-2">
            <div>
              <Link href="/tags/tagoverview" as="/tags/tagoverview">
                <a className="text-white px-8 truncate">Tags</a>
              </Link>
            </div>

            <div>
              <Link href="/blogpages/[slug]" as="/blogpages/about">
                <a className="text-white px-8 truncate">About me</a>
              </Link>
            </div>

            <div>
              <Link href="/blogpages/[slug]" as="/blogpages/legal">
                <a className="text-white px-8 truncate">Legal</a>
              </Link>
            </div>
            <button onClick={switchTheme}>Change theme</button>

          </div>
        </div>
      </div>
    </nav>
  )
}
