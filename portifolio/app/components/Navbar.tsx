import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black/60 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white">
        <span className="font-bold text-violet-300 text-xl">AB</span>
        <ul className="flex gap-8 text-lg">
          <li><Link href="#projetos" className="hover:text-violet-300 transition">Projetos</Link></li>
          <li><Link href="#contato" className="hover:text-violet-300 transition">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}
