import Link from "next/link";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineChartBar, HiOutlineCog } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-48 bg-[#05172f] text-white">
      <h1 className="mt-20 mb-20 text-4xl ml-10 text-[#6ce5e8]">
        Sky
      </h1>

      <ul className="space-y-8 p-4">
        <li className="flex items-center gap-3 hover:text-[#6ce5e8] transition-colors">
          <HiOutlineHome size={20} />
          <Link href="/dashboard">Home</Link>
        </li>
        <li className="flex items-center gap-3 hover:text-[#6ce5e8] transition-colors">
          <HiOutlineUserGroup size={20} />
          <Link href="/colaboradores">Colaboradores</Link>
        </li>
        <li className="flex items-center gap-3 hover:text-[#6ce5e8] transition-colors">
          <HiOutlineChartBar size={20} />
          <Link href="/desempenho">Desempenho</Link>
        </li>
        <li className="flex items-center gap-3 hover:text-[#6ce5e8] transition-colors">
          <HiOutlineCog size={20} />
          <Link href="/conta">Conta</Link>
        </li>
      </ul>
    </div>
  );
}
