import iconGit from "./assets/github-icon.svg";
import headerStyle from "./assets/styles/header.module.css";
import searchIcon from "./assets/search.svg";
function Header() {
  return (
    <div className={headerStyle.headerMain}>
      <img className={headerStyle.iconSvg} src={iconGit} alt="gitIcon" />
      <img className={headerStyle.searchIcon} src={searchIcon} alt="search" />
      <input
        className={headerStyle.headerInput}
        type="text"
        placeholder="Enter GitHub username"
      />
    </div>
  );
}

export default Header;
