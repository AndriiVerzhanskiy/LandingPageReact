import React from "react";

import NextLink from "next/link";

const Header = ({ items }) => {
    return (
        <div div className="header">
            <div className="mb-20">
        <NextLink href="/about">О проекте</NextLink>
        </div>
            </div>
  );
};

export default Header;