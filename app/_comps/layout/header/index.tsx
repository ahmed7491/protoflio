import React from "react";
import Image from "next/image";
import MenuItem from "./menuItem";

interface HeaderTypes {
  items: { key: string; title: string }[];
}

const Header = ({ items }: HeaderTypes) => {
  return (
    <header className="min-h-16 flex justify-between">
      <Image width={100} height={50} src={"/logo.png"} alt="logo" />
      <nav>
        <ul className="h-full flex items-center gap-2">
          {items.map((item, i) => (
            <MenuItem key={i} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
