import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";


export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 border-b-4 border-purple-300 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 bg-blue-900 w-full">
      
      <div className="text-3xl font-bold text-white">
        <span className="text-purple-500">Techno</span>
        <span className="text-white">Talks</span>
      </div>
      <nav className="ml-auto flex items-center gap-4 font-bold uppercase text-gray-700">
        <Link href={"/"} className="bg-purple-200 px-3 py-3 rounded-lg text-dark">
          Home
        </Link>
        <Link href={"/blog"} className="bg-purple-200 px-3 py-3 rounded-lg text-dark m-2">
          Blogs
        </Link>
        <ThemeToggle/>
      </nav>
    </header>
  );
}

