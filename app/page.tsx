import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div>
        <VisaoGeral />
      </div>
    </>
  );
}


function VisaoGeral(){
  return (
      <div className="border blue bg-sky-300 h-24 mt-20 w-200 text-black text-2x1 border rounded">
        Visão Geral
      </div>
  
  );
}