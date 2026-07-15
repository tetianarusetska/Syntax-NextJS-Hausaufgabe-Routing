"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {

  const pathname = usePathname()
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (

    <nav className="flex flex-row justify-center items-center gap-10 mt-5 font-['BebasNeue'] text-2xl ">
      {links.map(link => (
        <span key={link.href}>
          {pathname === link.href ? (
            <span className="text-gray-500">{link.label}</span>
          ) : (
            <Link href={link.href} className="text-blue-800 hover:underline">
              {link.label}
            </Link>
          )}
        </span>
      ))}
    </nav>

  );
}