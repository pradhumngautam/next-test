import Link from "next/link";
import { navItems } from "./nav-item";

const Navbar = () => {
  return (
    <div className="w-full fixed bg-slate-200/30 flex items-center justify-around min-h-12 shadow-md">
      <div className="text-xl font-semibold ">logo</div>

      <div className="flex gap-x-9">
        {navItems.map((item) => {
          return (
            <div key={item.id}>
              <Link href={item.src}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
