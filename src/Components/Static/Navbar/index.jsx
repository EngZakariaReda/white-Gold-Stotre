import { Menu, MessageSquareText } from "lucide-react";
import Button from "../../Dynamic/Button";
import RouterLink from "../../Dynamic/RouterLink";
import { Link } from "react-router";
import { sendMessageViaWattsApp } from "../../../Utils/SendMessage";

export default function Navbar({setIsOpen}) {
  return (

    <nav className="flex justify-between items-center p-4 border border-b-(--primary) sticky top-0 w-full bg-(--body) z-10">

      <div className="flex gap-3 items-center">
        <button className="cursor-pointer lg:hidden" onClick={() => setIsOpen(prev => !prev)}>
          <Menu className="text-white" />
        </button>
        
        <Link to={"/"}>
          <img src="src/assets/whitegold.jpeg" alt="logo image" className="w-10 h-10 md:w-15 md:h-15 object-cover rounded-full" />
        </Link>

        <h2 className="text-(--secondary-text) md:text-2xl font-extrabold">
          <Link to={"/"}>
            White Gold
          </Link>
        </h2>
      </div>

      <div className="lg:flex gap-3 items-center hidden lg:visible">
        <RouterLink to="/">الرئيسيه</RouterLink>
        <RouterLink to="/allproducts">المنتجات</RouterLink>
        <RouterLink to="/customizeorder">طلبك الخاص</RouterLink>
        <RouterLink to="/whoareyou">من نحن</RouterLink>
        <RouterLink to="/contact">تواصل معنا</RouterLink>
      </div>

      <Button 
        className='text-black bg-(--primary) font-bold md:text-xl text-sm'
        onClick={() => sendMessageViaWattsApp("اريد استفسار فوري عن")}
      >
        استفسار فوري
        <span>
          <MessageSquareText />
        </span>
      </Button>
    </nav>
  )
}
