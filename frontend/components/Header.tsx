import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [page, setPage] = useState<string>("");
  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>({
    top: "0",
    transition: "top 0.3s ease",
  });

  useEffect(() => {
    if (router.isReady) {
      setPage(router.pathname as string);
    }
  }, [router.isReady, router.pathname]);

  useEffect(() => {
    if (!window) return;
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector("header");
      const headerBottom = header ? header.offsetTop + header.offsetHeight : 0;

      if (prevScrollPos > currentScrollPos || currentScrollPos < headerBottom) {
        setHeaderStyle({ top: "0", transition: "top 0.5s ease" });
      } else {
        setHeaderStyle({ top: "-10rem", transition: "top 0.5s ease" });
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={headerStyle}>
      <a
        href="/"
        className={page === "/" ? "menu-item menu-item-selected" : "menu-item"}
      >
        <p className={page === "/" ? "body-small black" : "body-small"}>Home</p>
      </a>
      <a
        href="/work"
        className={
          page.includes("/work") ? "menu-item menu-item-selected" : "menu-item"
        }
      >
        <p
          className={page.includes("/work") ? "body-small black" : "body-small"}
        >
          Work
        </p>
      </a>
      <a
        href="/contact"
        className={
          page.includes("/contact")
            ? "menu-item menu-item-selected"
            : "menu-item"
        }
      >
        <p
          className={
            page.includes("/contact") ? "body-small black" : "body-small"
          }
        >
          Contact
        </p>
      </a>
    </header>
  );
};

export default Header;
