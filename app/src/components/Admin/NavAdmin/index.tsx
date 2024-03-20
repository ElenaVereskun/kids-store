"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

const NavAdmin = () => {
  const pathname = usePathname();

  const getUser = () => {
    return {
      username: "Таня и Люся",
      role: "admin",
    };
  };

  const isAdmin = () => {
    if (getUser().role === "admin") {
      return true;
    }

    return false;
  };

  const links = [
    {
      text: "Пользователи",
      link: "/admin/users",
      hidden: !isAdmin(),
    },
    {
      text: "Товары",
      link: "/admin/store",
    },
    {
      text: "Сезонные коллекции",
      link: "/admin/seasons",
    },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.user}>{getUser().username}</div>
      <ul>
        {links.map((link, index) => {
          const className =
            pathname === link.link
              ? `${styles.nav_item} ${styles.nav_item_active}`
              : styles.nav_item;

          return (
            !link.hidden && (
              <li key={index} className={className}>
                <Link href={link.link}>{link.text}</Link>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default NavAdmin;
