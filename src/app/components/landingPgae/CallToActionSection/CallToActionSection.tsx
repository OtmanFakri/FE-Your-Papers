import React from "react";
import {Input} from "@/app/components/landingPgae/ui/input";
import {Button} from "@/app/components/landingPgae/ui/button";

export const CallToActionSection = ()=> {
  return (
    <section className="w-full bg-blue-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-white text-4xl mb-6 font-['Poppins',Helvetica] leading-9">
            Start Creating Professional Documents Today
          </h2>

          <p className="font-normal text-blue-100 text-xl mb-10 font-['Poppins',Helvetica] leading-5">
            Join thousands of users who trust DocFlow for their document needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <div className="relative flex-grow max-w-md">
              <Input
                className="h-14 pl-6 rounded-full bg-white text-base font-['Poppins',Helvetica]"
                placeholder="Enter your email"
              />
            </div>

            <Button className="h-14 px-8 rounded-full bg-white hover:bg-white/90 text-blue-600 font-bold text-base font-['Poppins',Helvetica]">
              Get Started Free
            </Button>
          </div>

          <p className="text-blue-100 text-base font-normal font-['Poppins',Helvetica] leading-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};
