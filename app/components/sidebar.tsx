import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-45 bg-[#05172f] text-white">
        
        <h1 className="mt-20 mb-20 texte-large">
            Sky
        </h1>
            

      <ul className="space-y-2 p-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/colaboradores">Colaboradores</Link>
        </li>
        <li>
          <Link href="/desempenho">Desempenho</Link>
        </li>
        <li>
          <Link href="/conta">Conta</Link>
        </li>
      </ul>
    </div>
  );
}
