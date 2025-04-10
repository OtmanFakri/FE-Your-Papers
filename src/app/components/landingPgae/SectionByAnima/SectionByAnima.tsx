import React from "react";
import {Button} from "@/app/components/landingPgae/ui/button";

export const SectionByAnima = () => {
    return (
        <section
            className="w-full py-24 [background:linear-gradient(90deg,rgba(239,246,255,1)_0%,rgba(255,255,255,1)_100%)]">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left content column */}
                    <div className="flex-1 space-y-8">
                        <h1 className="font-bold text-gray-900 text-5xl md:text-6xl leading-[60px] font-['Poppins',Helvetica] max-w-[563px]">
                            Edit, Customize &amp; Export Your Documents Easily
                        </h1>

                        <p className="text-gray-600 text-xl leading-5 font-['Poppins',Helvetica] max-w-[555px]">
                            Transform your documents effortlessly with our intuitive platform.
                            Edit, customize, and export in minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                className="h-[62px] w-[167px] rounded-full text-lg font-normal font-['Poppins',Helvetica]">
                                Get Started
                            </Button>

                            <Button
                                variant="outline"
                                className="h-[62px] w-[184px] rounded-full text-lg text-gray-700 font-normal font-['Poppins',Helvetica] border-gray-300"
                            >
                                Watch Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right image column */}
                    <div
                        className="flex-1 h-[616px] w-full bg-cover bg-center bg-no-repeat"
                        style={{backgroundImage: "url(../img.png)"}}
                    />
                </div>
            </div>
        </section>
    );
};
