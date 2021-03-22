import React from "react";
import Link from "../UI/Link";

const Header: React.FC = () => {
  return (
    <header>
      <ul>
        <li>
          <Link pathname="" title="Menu link 1" />
        </li>
        <li>
          <Link pathname="" title="Menu link 2" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
