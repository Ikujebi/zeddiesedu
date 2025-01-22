"use client";
import { Button } from "antd";
import Image from "next/image";
import { MdClose, MdEmail, MdMenu, MdOndemandVideo } from 'react-icons/md';
import 'animate.css';
import Link from "next/link";
import wordlogo from '../assets/img/zed_logo-removebg-preview (1).png';
import { useState, useEffect, useRef, FC } from 'react';
import { useRouter } from "next/navigation";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa";
import { ReactNode } from 'react';

interface NavItem {
    name: string;
    link: string;
    icon?: ReactNode;
    spacing?: boolean;
    subItems?: NavItem[];
}

const Header: FC = () => {
    const router = useRouter();
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [activeSubNav, setActiveSubNav] = useState<string | null>(null);
    const submenuRef = useRef<HTMLDivElement>(null);

    const toggleSubNav = (subNav: string) => {
        setActiveSubNav(prevSubNav => (prevSubNav === subNav ? null : subNav));
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    // const closeMobileMenu = () => {
    //     setMobileMenuVisible(false);
    //     setActiveSubNav(null);
    // };

    const handleClickOutside = (event: MouseEvent) => {
        if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
            setActiveSubNav(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems: NavItem[] = [
        {
            name: "Online",
            icon: <MdOndemandVideo />,
            link: "/online",
        },
        {
            name: "About",
            link: "",
            subItems: [
                { name: "Mission, Vision & Values", link: "/mission" },
                { name: "Our Story", link: "#" },
                { name: "Executive Leadership", link: "/executive" },
            ],
        },
        {
            name: "Contact",
            link: "/contact",
        },
        {
            name: "Ministries",
            link: "",
            subItems: [
                { name: "EMERGENZ", link: "/emergenz" },
                { name: "Teens", link: "#" },
                { name: "Children", link: "/executive" },
                { name: "Women", link: "/women" },
                { name: "Men", link: "/men" },
            ],
        },
        {
            name: "Giving",
            link: "/giving",
        },
        {
            name: "Prayer Requests",
            link: "/prayer",
        },
       
    ];

    const renderNavItem = (item: NavItem, index: number) => (
        <div key={index} className="relative">
            {item.subItems ? (
                <>
                    <button onClick={() => toggleSubNav(item.name)} className="flex items-center">
                        {item.name}
                    </button>
                    {activeSubNav === item.name && (
                        <div className="absolute rounded-md top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg submenu mb-[1rem]">
                            {item.subItems.map((subItem, subIndex) => (
                                <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <Link href={item.link} className="flex items-center">
                    {item.icon}
                    <span className="ml-1">{item.name}</span>
                </Link>
            )}
        </div>
    );

    return (
        <div className="w-screen bg-white bg-opacity-90 shadow-md fixed pb-3 mb-13 animate__animated animate__fadeInDown z-50">
            <div className="w-full">
                <div className="h-10 gap-5 bg-white border-b border-gray-200 flex lg:px-14 xl:px-14 2xl:px-14 md:px-14 justify-around md:justify-between 2xl:justify-between xl:justify-between lg:justify-between">
                    <div className="mt-2">
                        <span className="text-red-600 font-semibold text-[1.2rem]">
                            {/* <Link href={"/login"}>Login</Link> */}
                        </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm md:gap-1 lg:gap-2 xl:gap-2 2xl:gap-2 gap-2">
                        <Link href={"https://x.com/wordtabernaclen"} className="md:flex lg:flex 2xl:flex hidden xl:flex md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTwitter className="text-white text-md" />
                        </Link>
                        <Link href={"https://www.instagram.com/wordtabernacleng/"} className="md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaInstagram className="text-white text-md" />
                        </Link>
                        <Link href={"https://www.facebook.com/wordtabernacle"} className="md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaFacebookF className="text-white text-md" />
                        </Link>
                        <Link href={"https://www.youtube.com/@wordtabernacleng"} className="md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaYoutube className="text-white text-md" />
                        </Link>
                        <Link href={"https://www.tiktok.com/@wordtabernacleng"} className="md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 w-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTiktok className="text-white text-md" />
                        </Link>
                        <Link href={"https://t.me/+ufId9mRBMlVlMzY8"} className="md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <FaTelegram className="text-white text-md" />
                        </Link>
                        <a href={"mailto:wordtabernaclebc@gmail.com"} className="md:w-6 lg:w-6 xl:w-6 2xl:w-6 w-6 md:h-6 lg:h-6 xl:h-6 2xl:h-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <MdEmail  className="text-white text-md"/>
                            
                        </a>
                    </div>
                </div>
                <div className="hidden md:block lg:block xl:block 2xl:block">
                    <div id="nav" className="h-10 w-full flex mt-10 justify-between px-14 ">
                        <div>
                            <Link href={"/"}>
                                <div className="flex gap-1 ">
                                    <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-10 w-10" />
                                    <span className="font-semibold text-red-600 mt-3 ">WORD TABERNACLE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-5">
                            {navItems.map(renderNavItem)}
                            <Button className="text-white bg-red-600 hover:!text-red-700 hover:!border-red-500 m-auto rounded-lg" onClick={() => { router.push("/in") }}>LOGIN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center w-[100svw] flex justify-around md:justify-between 2xl:justify-between xl:justify-between lg:justify-between mt-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
                <Link href={"/"}>
                    <div className="flex items-center">
                        <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-6 w-6" />
                        <span className="font-semibold text-red-600">WORD TABERNACLE</span>
                    </div>
                </Link>
                <Button className="text-white bg-red-600 hover:!text-red-700 hover:!border-red-500 m-auto rounded-lg mr-[1rem]" onClick={toggleMobileMenu}><MdMenu className="h-6 w-6" /></Button>
            </div>

            <div className={`lg:hidden 2xl:hidden xl:hidden md:hidden bg-white  absolute z-100 w-screen h-[100svh]  mt-[10%] top-0 ${mobileMenuVisible ? "left-0"  : "left-[-100%]"} duration-500`}>
                <div className="flex justify-between ">

                    <Link href={"/"} className="ml-5">
                        <div className="flex items-center ">
                            <Image alt="church logo" width={300} height={100} src={wordlogo} className="h-6 w-6" />
                            <span className="font-semibold text-red-600">WORD TABERNACLE</span>
                        </div>
                    </Link>
                    
                    
                    <Button className="text-red-600 hover:bg-red-600 mt-5 mr-5 rounded-lg" onClick={toggleMobileMenu}><MdClose className="h-6 w-6" /></Button>
                </div>
                <div className="p-5">
                    {navItems.map((item, index) => (
                        <div key={index} className="my-5 font-bold">
                            {item.subItems ? (
                                <>
                                    <button onClick={() => toggleSubNav(item.name)} className="flex items-center w-full">
                                        {item.name}
                                    </button>
                                    {activeSubNav === item.name && (
                                        <div className="submenu mt-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <Link key={subIndex} href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                              <Link href={item.link} className="flex items-center">
                                    {item.icon}
                                    <span className="ml-1">{item.name}</span>
                                </Link>
                              
                            )}
                            
                        </div>
                    ))}
                    <Link href='/in' className="flex items-center">
                                    
                                    <b className="ml-1">Login</b>
                                </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
