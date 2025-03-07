import HeaderPublic from "@/components/public/layout/header-public";
import "../globals.css";
import FooterPublic from "@/components/public/layout/footer-public";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <HeaderPublic />
        <main>{children}</main>
        <FooterPublic />
      </body>
    </html>
  );
}
