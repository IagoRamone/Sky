import Image from "next/image";
import Sidebar from "../components/sidebar";

export default function HomePage() {
  return (
    <>
      <div className="top-0 mt-0 bg-[#0a0d16] h-screen  ">
        <Sidebar/>
        <VisaoGeral />
      </div>
    </>
  );
}

function VisaoGeral(){
  return (
      <div className="ml-60 bg-[#2c3c4d] h-24 mt-20 w-200 text-black text-2x1 border rounded">
        Visão Geral
      </div>
  
  );
}