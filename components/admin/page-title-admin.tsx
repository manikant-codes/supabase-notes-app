import LinkButton, { LinkButtonProps } from "../common/link-button";

interface PageTitleAdminProps {
  pageTitle: string;
  link?: LinkButtonProps;
}

export default function PageTitleAdmin({
  pageTitle,
  link,
}: PageTitleAdminProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="font-semibold text-2xl">{pageTitle}</h2>
      {link && <LinkButton {...link} />}
    </div>
  );
}
