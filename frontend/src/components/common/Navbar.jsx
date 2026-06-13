import { Bot } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <Bot size={28} />

        <div>
          <h1 className="font-bold text-xl">
            Healthcare AI
          </h1>

          <p className="text-sm text-zinc-400">
            Regulatory Intelligence Assistant
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;