'use client'
import {HeaderSection} from "@/app/components/landingPgae/HeaderSection";
import {SectionByAnima} from "@/app/components/landingPgae/SectionByAnima";
import {HowItWorksSection} from "@/app/components/landingPgae/HowItWorksSection/HowItWorksSection";
import {PricingSection} from "@/app/components/landingPgae/PricingSection";
import {TestimonialsSection} from "@/app/components/landingPgae/TestimonialsSection";
import {CallToActionSection} from "@/app/components/landingPgae/CallToActionSection/CallToActionSection";
import {FooterSection} from "@/app/components/landingPgae/FooterSection";
import {Element} from 'react-scroll';

export default async function Home() {

    return (
        <div className="flex flex-col w-full bg-white">
            {/* Header area containing both HeaderSection and SectionByAnima */}
            <HeaderSection/>
            <Element name="Home">
                <SectionByAnima/>
            </Element>

            {/* Main content sections */}
            <Element name="How It Works">
                <HowItWorksSection/>
            </Element>
            <Element name="Pricing">
                <PricingSection/>
            </Element>
            <TestimonialsSection/>
            <Element name="Contact Us">
                <CallToActionSection/>
            </Element>
            <FooterSection/>
        </div>
    );
}
