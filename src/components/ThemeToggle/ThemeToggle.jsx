import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.css";

const ThemeToggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {
                theme === "dark"
                    ? <FaSun />
                    : <FaMoon />
            }
        </button>
    );

}

export default ThemeToggle;