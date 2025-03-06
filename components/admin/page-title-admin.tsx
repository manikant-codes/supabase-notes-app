import Link from "next/link";

interface PageTitleAdminProps {
  pageTitle: string;
  link?: { text: string; href: string };
}

export default function PageTitleAdmin({
  pageTitle,
  link,
}: PageTitleAdminProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-semibold">{pageTitle}</h2>
      {link && link.text && link.href && (
        <Link
          href={link.href}
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer px-4 py-2 rounded"
        >
          {link.text}
        </Link>
      )}
    </div>
  );
}
