import React from "react";
import { PlayMarketIcon } from "../../assets/icons/play-market-icon";
import { AppleStoreIcon } from "../../assets/icons/apple-store-icon";
import { FooterBottom } from "./components/footerBottom";

export const Footer = () => {
  return (
    <section className="bg-primarySoft">
      <footer className="container footer mx-auto p-10 text-neutral-content">
        <nav>
          <h2 className="footer-title font-bold text-darkPurple">
            Platforma haqida
          </h2>
          <a className="link-hover link text-darkPurple">Liber o'zi nima?</a>
          <a className="link-hover link text-darkPurple">
            Foydalanish shartlari
          </a>
          <a className="link-hover link text-darkPurple">Yordam</a>
        </nav>
        <nav>
          <h2 className="footer-title font-bold text-darkPurple">
            Obuna haqida
          </h2>
          <a className="link-hover link text-darkPurple">Obuna bo'lish</a>
          <a className="link-hover link text-darkPurple">Qanday to'lash</a>
        </nav>
        <nav>
          <h2 className="footer-title font-bold text-darkPurple">Kitoblar</h2>
          <a className="link-hover link text-darkPurple">Audio kitoblar</a>
          <a className="link-hover link text-darkPurple">Elektron kitoblar</a>
          <a className="link-hover link text-darkPurple">Kitoblar</a>
        </nav>
        <nav>
          <h2 className="footer-title font-bold text-darkPurple">
            Mobil ilova
          </h2>
          <button>
            <PlayMarketIcon />
          </button>
          <button>
            <AppleStoreIcon />
          </button>
        </nav>
      </footer>
      <FooterBottom />
    </section>
  );
};
