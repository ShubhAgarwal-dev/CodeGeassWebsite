"use client";

import React from "react";
import Image from "next/image";
import classes from "./Footer.module.css";
import Link from "next/link";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  const handleOnClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div id="footer">
      <div className={classes.footer}>
        <div className={classes.footerDiv}>
          <div className={classes.footerImageWrapper}>
            <Link href="#">
              <Image
                src="/Footer/Logo4x.png"
                fill
                priority
                alt="coding_club_logo"
              />
            </Link>
          </div>
          <div className={classes.footerLinksWrapper}>
            <div
              onClick={() => handleOnClick("hero")}
              aria-current="page"
              className={`${classes.footerlink} ${classes.navLink}`}
            >
              Home
            </div>
            <div
              onClick={() => handleOnClick("/events")}
              className={`${classes.footerlink} ${classes.navLink}`}
            >
              Events
            </div>
          </div>

          <div className={classes.footerContactWrapper}>
            <div>
              <a
                href="mailto:coding.club@iitdh.ac.in"
                className={classes.footerlink}
              >
                coding.club@iitdh.ac.in
              </a>
            </div>
            <div>
              <a href="mailto:oss@iitdh.ac.in" className={classes.footerlink}>
                oss@iitdh.ac.in
              </a>
            </div>
          </div>
          <div className={classes.rightFooterWrapper}>
            <div className={classes.footerIconsWrapper}>
              <Link
                href="https://www.github.com/oss2019/"
                target="_blank"
                className={classes.footerlink}
              >
                <img
                  src="https://img.icons8.com/3d-fluency/48/github.png"
                  alt="github"
                  loading="lazy"
                  className="socialmediaicon"
                />
              </Link>
              <Link
                href="https://www.github.com/shubhagarwal-dev/"
                target="_blank"
                className={classes.footerlink}
              >
                <img
                  src="https://img.icons8.com/3d-fluency/48/github.png"
                  alt="github"
                  loading="lazy"
                  className="socialmediaicon"
                />
              </Link>
            </div>
            <div>© Copyright - {year} Coding Club all right reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
