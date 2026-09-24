import RouterLink from '../../Dynamic/RouterLink'
import { X } from 'lucide-react'

export default function Sidebar({isOpen , setIsOpen}) {
  return (
    <aside className={`w-full h-screen bg-(--body) top-0 left-0 fixed z-25 ${isOpen ? "translate-x-0" : "translate-x-[-105%]" }`}>
        <div className='md:w-1/2 w-[60%] h-full bg-(--lighterbackground) flex flex-col  px-2 py-6'>

            <div className="flex gap-3 items-center justify-between border border-b-(--secondary) py-3">
                <div className="flex gap-3 items-center">
                    <img src="/whitegold.jpeg" alt="logo image" className="w-15 h-15 object-cover rounded-full" />
                    <h2 className="text-(--secondary-text)  text-xl font-extrabold">White Gold</h2>
                </div>
                <button className='bg-transparent cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <X className='text-(--secondary-text)' />
                </button>
            </div>

            <div className="flex flex-col gap-3 my-5">
                <RouterLink to="/" onClick={() => setIsOpen(prev => !prev)}>الرئيسيه</RouterLink>
                <RouterLink to="/allproducts" onClick={() => setIsOpen(prev => !prev)}>المنتجات</RouterLink>
                <RouterLink to="/customizeorder" onClick={() => setIsOpen(prev => !prev)}>طلبك الخاص</RouterLink>
                <RouterLink to="/whoareyou" onClick={() => setIsOpen(prev => !prev)}>من نحن</RouterLink>
                <RouterLink to="/contact" onClick={() => setIsOpen(prev => !prev)}>تواصل معنا</RouterLink>
            </div>
        </div>
    </aside>
  )
}
