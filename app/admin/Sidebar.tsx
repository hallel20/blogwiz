"use client";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaCommentDots,
  FaGear,
  FaHouse,
  FaList,
  FaPlus,
} from "react-icons/fa6";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", icon: <FaHouse size={15} />, label: "Home" },
    { href: "/admin/posts/new", icon: <FaPlus size={15} />, label: "New Post" },
    { href: "/admin/posts/list", icon: <FaList size={15} />, label: "Posts" },
    {
      href: "/admin/posts/comments",
      icon: <FaCommentDots size={15} />,
      label: "Comments",
    },
    { href: "/admin/settings", icon: <FaGear size={15} />, label: "Settings" },
  ];

  return (
    <aside className="bg-dark text-white">
      <h3 className="mx-3 my-4">Dashboard</h3>
      <nav className="text-center">
        {navItems.map((navItem) => (
          <Link href={navItem.href} className="nav-link" key={navItem.href}>
            <Flex
              align="center"
              gap="3"
              className={`aside-item py-2 px-2 ${
                pathname === navItem.href ? "active" : null
              }`}
            >
              {navItem.icon}
              <Text>{navItem.label}</Text>
            </Flex>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
