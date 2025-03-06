import { COMPANY_NAME } from "@/consts";

export default function HeaderAdmin() {
  return (
    <header className="bg-gray-900 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">{COMPANY_NAME}</h1>
      <ul className="flex items-center gap-8">
        <li>user@email.com</li>
        <li>LogOut</li>
      </ul>
    </header>
  );
}
