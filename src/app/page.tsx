import {HeaderSection} from "@/app/components/landingPgae/HeaderSection";
import {SectionByAnima} from "@/app/components/landingPgae/SectionByAnima";
import {HowItWorksSection} from "@/app/components/landingPgae/HowItWorksSection/HowItWorksSection";
import {PricingSection} from "@/app/components/landingPgae/PricingSection";
import {TestimonialsSection} from "@/app/components/landingPgae/TestimonialsSection";
import {CallToActionSection} from "@/app/components/landingPgae/CallToActionSection/CallToActionSection";
import {FooterSection} from "@/app/components/landingPgae/FooterSection";

export default async function Home() {

    return (
        <div className="flex flex-col w-full bg-white">
            {/* Header area containing both HeaderSection and SectionByAnima */}
            <HeaderSection/>
            <SectionByAnima/>

            {/* Main content sections */}
            <HowItWorksSection/>
            <PricingSection/>
            <TestimonialsSection/>
            <CallToActionSection/>
            <FooterSection/>
        </div>
    );
}
