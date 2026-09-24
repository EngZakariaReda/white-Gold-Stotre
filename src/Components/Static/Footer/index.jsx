import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='my-10'>
    
        <div className="lg:flex gap-3 items-center px-2 space-y-4">

            <div className='space-y-4 flex-1'>
                <div className="flex gap-3 items-center">
                    <Link to={"/"}>
                        <img src="src/assets/whitegold.jpeg" alt="logo image" className="w-10 h-10 md:w-15 md:h-15 object-cover rounded-full" />
                    </Link>
                    <div>
                        <h2 className="text-(--secondary-text) md:text-2xl font-extrabold">
                            <Link to={"/"}>
                                White Gold
                            </Link>
                        </h2>
                        <p className='text-(--primary) text-sm'>حِرفة أصيلة، وصناعة معاصرة</p>
                    </div>
                </div>
                <p className='text-(--secondary-text) flex-1 text-xl'>
                    الصرح الرائد المتخصص في صناعة وحياكة البناطيل والتيشرتات الجاهزة الفاخرة لكبرى العلامات والمتاجر وفق معايير الجودة العالمية.
                </p>
            </div>

            <div className='w-40 flex flex-col'>
                <p className='text-white my-3'>تابعونا وتواصلوا معنا</p>

                <div className='flex gap-5 items-center'> 
                    <a
                        href="https://www.facebook.com/share/19aksVGEbg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 text-black bg-(--primary) rounded-full cursor-pointer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8"
                        >
                            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1z" />
                        </svg>
                    </a>

                    <a 
                        href="https://www.instagram.com/whitegold460?stkn=ZzQ3cG1idmFmZ3Bx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center justify-center w-10 h-10 text-black bg-(--primary) rounded-full cursor-pointer'
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-6 h-6'

                            >
                            <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="5"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="4"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <circle
                                cx="17.5"
                                cy="6.5"
                                r="1"
                                fill="currentColor"
                            />
                        </svg>
                    </a>

                    <a 
                        href="https://wa.me/201027909599"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center justify-center w-10 h-10 text-black bg-(--primary) rounded-full cursor-pointer'
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-6 h-6'
                        >
                             <path d="M20.5 3.5A11.8 11.8 0 0012.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7c1.6.9 3.4 1.3 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3zM12.1 21.5c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 01-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 012.9 6.9c0 5.5-4.4 9.9-9.9 9.9zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.5-.7-2.6-1.3-3.7-2.9-.3-.5.3-.4.9-1.4.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        
        <p className='text-(--secondary-card) text-center my-5'>
            جميع الحقوق محفوظة © 2026 <bdi>White Gold ل</bdi>  لتصنيع الملابس والأزياء الراقية
        </p>

    </div>
  )
}
