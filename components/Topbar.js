import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Topbar = ({ children }) => {
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

    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    }

    return (
        <>
        <div className="bg-new-blue">
            <div className="xl:container mx-auto flex p-3">
            {children}
            <button className="dark:bg-blue-500" onClick={switchTheme}>Change theme</button>
            </div>
        </div>
        </>
    )
}

export default Topbar
