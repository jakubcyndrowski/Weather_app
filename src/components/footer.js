import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="section--sign-up animation">
        <div className="section__title">
          <h3 className="section__header">Check our social media</h3>
        </div>
        <ul className="social__list">
          <li className="social_item">
            <a
              href="https://www.instagram.com/enduranceelitclub/"
              className="link list-social__link"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon icon-tiktok"
                width="24"
                height="26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.02 0H11s-.17 3.82 4.13 4.1v2.95s-2.3.14-4.13-1.26l.03 6.1a5.52 5.52 0 11-5.51-5.52h.77V9.4a2.5 2.5 0 101.76 2.4L8.02 0z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </li>
          <li className="social_item">
            <a
              href="https://www.instagram.com/enduranceelitclub/"
              className="link list-social__link"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon icon-instagram"
                width="24"
                height="26"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="currentColor"
                  d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
                ></path>
                <path
                  fill="currentColor"
                  d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="social_item">
            <a
              href="https://www.instagram.com/enduranceelitclub/"
              className="link list-social__link"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="icon icon-twitter"
                width="24"
                height="26"
                fill="none"
                viewBox="0 0 18 15"
              >
                <path
                  fill="currentColor"
                  d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer">
        <ul className="footer__nav">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.instagram.com/enduranceelitclub/"
            >
              About
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.instagram.com/enduranceelitclub/"
            >
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.instagram.com/enduranceelitclub/"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <p className="footer__copyright">2024, Weather Company</p>
      </div>
    </div>
  );
}
