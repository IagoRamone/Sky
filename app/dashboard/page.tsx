import Image from "next/image";
import Sidebar from "../components/sidebar";

export default function HomePage() {
  return (
    <>
      <div className="top-0 bg-[#0a0d16] h-screen  ">
        <Sidebar/>
        <VisaoGeral />
      </div>
    </>
  );
}

function VisaoGeral(){
  return (
    <div className="top-0 ml-60 bg-[#2c3c4d] h-24 w-200 text-black text-2xl border rounded">
      Visão Geral
    </div>
  );
}