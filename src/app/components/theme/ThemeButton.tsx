"use client";
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from "@/app/components/redux/theme/themeSlice";
import { RootState, AppDispatch } from "@/app/components/redux/store";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div className="fixed top-[6px] right-[6px] z-50">
      <button
        className={`bg-theme-button-background max-w-3xs w-auto text-theme-button-foreground p-2 rounded hover:cursor-pointer flex items-center gap-2`}
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          dispatch(changeTheme(newTheme));
        }}
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
        {/* <span className="font-semibold">{theme === "light" ? "Dark Mode" : "Light Mode"}</span> */}
      </button>
    </div>
  );
};

export default ThemeButton;