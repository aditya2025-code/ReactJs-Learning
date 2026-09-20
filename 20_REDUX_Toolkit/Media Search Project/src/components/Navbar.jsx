import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-ink bg-chrome">
      {/* fake window title bar */}
      <div className="titlebar">
        <span className="truncate">C:\MEDIASEARCH\MAIN.EXE</span>
        <span className="flex shrink-0 gap-1" aria-hidden="true">
          <span className="tb-btn" />
          <span className="tb-btn" />
          <span className="tb-btn" />
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <Link
          to="/"
          className="font-display text-3xl leading-none text-ink sm:text-4xl"
        >
          MediaSearch<span className="blink">_</span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <NavLink
            end
            className="retro-btn px-3 py-1 text-sm font-medium sm:px-4 sm:py-2 sm:text-base"
            to="/"
          >
            Search
          </NavLink>
          <NavLink
            className="retro-btn px-3 py-1 text-sm font-medium sm:px-4 sm:py-2 sm:text-base"
            to="/collection"
          >
            Collection
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
