'use client'

import React from "react";
import {Button} from "@/app/components/landingPgae/ui/button";
import {Link} from 'react-scroll';

export const HeaderSection = () => {
    const navItems = [
        {label: "Home", href: "#"},
        {label: "How It Works", href: "#"},
        {label: "Pricing", href: "#"},
        {label: "Contact Us", href: "#"},
    ];

    return (
        <header
            className="w-full h-[72px] bg-[#fffffff2] border-b shadow-[0px_1px_2px_#0000000d] fixed top-0 left-0 z-10">
            <div className="max-w-[1280px] h-full mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-[22px] h-[30px]">
                        <img
                            className="w-[22.5px] h-[30px]"
                            alt="DocFlow Logo"
                            src="/frame-14.svg"
                        />
                    </div>
                    <div className="font-['Poppins',Helvetica] font-bold text-gray-800 text-xl leading-5">
                        DocFlow
                    </div>
                </div>

                {/* Navigation and Sign In */}
                <div className="flex items-center gap-8">
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                smooth={true} duration={500}
                                to={item.label}
                                className="font-['Poppins',Helvetica] font-normal text-gray-600 text-base leading-4"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Sign In Button */}
                    <Button
                        className="rounded-full bg-blue-600 text-white px-6 h-10 font-['Poppins',Helvetica] font-normal">
                        Sign In
                    </Button>
                </div>
            </div>
        </header>
    );
};
