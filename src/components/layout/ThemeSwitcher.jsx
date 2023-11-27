import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState();

  const switchTheme = (e) => {
    // setTheme(e.target.value);
    setTheme(theme === "light" ? "synthwave" : "light");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate ml-4">
      <input onClick={switchTheme} type="checkbox" />
      <svg
        className="swap-off fill-current  w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
      <svg
        className="swap-on fill-current w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
    </label>
  );

  //   return (
  //     <select
  //       className="dropdown dropdown-end mr-10 text-neutral-content   "
  //       value={theme}
  //       onChange={switchTheme}
  //     >
  //       <option value="light">Light</option>
  //       <option value="dark">Dark</option>
  //       <option value="synthwave">Synthwave</option>
  //       <option value="halloween">Halloween</option>
  //       <option value="forest">Forest</option>
  //       <option value="black">Black</option>
  //       <option value="luxury">Luxury</option>
  //       <option value="business">Business</option>
  //       <option value="dracula">Dracula</option>
  //       <option value="night">Night</option>
  //       <option value="dim">Dim</option>

  //       {/* "light", "dark", "cupcake","synthwave","halloween", "forest", "black", "luxury", "business", "dracula", "night" */}
  //     </select>
  //   );

  //   return (
  //     <div className="dropdown mb-72">
  //       <div tabIndex={0} role="button" className="btn m-1">
  //         Theme
  //         <svg
  //           width="12px"
  //           height="12px"
  //           className="h-2 w-2 fill-current opacity-60 inline-block"
  //           xmlns="http://www.w3.org/2000/svg"
  //           viewBox="0 0 2048 2048"
  //         >
  //           <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
  //         </svg>
  //       </div>
  //       <ul className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
  //         <li>
  //           <input
  //             type="radio"
  //             name="theme-dropdown"
  //             className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
  //             aria-label="Default"
  //             value="default"
  //           />
  //         </li>
  //         <li>
  //           <input
  //             type="radio"
  //             name="theme-dropdown"
  //             className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
  //             aria-label="Retro"
  //             value="retro"
  //           />
  //         </li>
  //         <li>
  //           <input
  //             type="radio"
  //             name="theme-dropdown"
  //             className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
  //             aria-label="Cyberpunk"
  //             value="cyberpunk"
  //           />
  //         </li>
  //         <li>
  //           <input
  //             type="radio"
  //             name="theme-dropdown"
  //             className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
  //             aria-label="Valentine"
  //             value="valentine"
  //           />
  //         </li>
  //         <li>
  //           <input
  //             type="radio"
  //             name="theme-dropdown"
  //             className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
  //             aria-label="Aqua"
  //             value="aqua"
  //           />
  //         </li>
  //       </ul>
  //     </div>
  //   );
};

export default ThemeSwitcher;
