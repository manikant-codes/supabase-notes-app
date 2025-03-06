import { COMPANY_NAME, COPY_RIGHT_YEAR } from "@/consts";
import Link from "next/link";
import React from "react";

export default function FooterAdmin() {
  return (
    <footer className="bg-gray-900 flex items-center justify-between px-8 py-4">
      &copy; {COMPANY_NAME} {COPY_RIGHT_YEAR}
      <ul className="flex items-center gap-8">
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
}
