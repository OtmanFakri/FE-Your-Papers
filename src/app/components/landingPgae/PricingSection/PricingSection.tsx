import { CheckIcon } from "lucide-react";
import React from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/app/components/landingPgae/ui/card";
import {Badge} from "@/app/components/landingPgae/ui/badge";
import {Button} from "@/app/components/landingPgae/ui/button";


export const PricingSection = ()=> {
  // Updated pricing plan data with new features and prices
  const pricingPlans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: "99 MAD",
      priceUSD: "~$10",
      isPopular: false,
      features: [
        "10 Documents/month",
        "Basic PDF/Word downloads",
        "Standard autocomplete using CNI",
        "Basic support",
      ],
      buttonText: "Choose Basic",
      buttonVariant: "secondary" as const,
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "199 MAD",
      priceUSD: "~$20",
      isPopular: true,
      features: [
        "Unlimited documents",
        "Advanced PDF/Word formatting",
        "Enhanced autocomplete features",
        "Priority support",
        "Document storage/history",
      ],
      buttonText: "Choose Premium",
      buttonVariant: "primary" as const,
    },
    {
      id: "enterprise",
      name: "Business Solution",
      price: "1499 MAD",
      priceUSD: "~$150",
      isPopular: false,
      features: [
        "Unlimited multi-user documents",
        "API access for integration",
        "Bulk processing capabilities",
        "Custom branding options",
        "Dedicated account manager",
        "Advanced analytics",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary" as const,
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-['Poppins',Helvetica] mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 font-['Poppins',Helvetica]">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative h-full ${
                plan.id === "premium"
                  ? "border-2 border-blue-600 shadow-lg -mt-2 md:mt-0 md:-mb-2"
                  : "shadow-md"
              }`}
            >
              {plan.isPopular && (
                <Badge className="absolute top-0.5 right-0 bg-blue-600 text-white rounded-[0px_8px_0px_8px] px-4 py-1">
                  Popular
                </Badge>
              )}

              <CardHeader className="pb-0">
                <h3 className="text-2xl font-bold text-gray-900 font-['Poppins',Helvetica]">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mt-4">
                  <span className="text-4xl font-bold text-gray-900 font-['Poppins',Helvetica]">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-base text-gray-600 font-['Poppins',Helvetica]">
                    /month
                  </span>
                </div>
                <span className="text-sm text-gray-500 font-['Poppins',Helvetica]">
                  {plan.priceUSD} USD
                </span>
              </CardHeader>

              <CardContent className="pt-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-black mr-2 mt-1 flex-shrink-0" />
                      <span className="text-base text-black font-['Poppins',Helvetica]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button
                  variant={
                    plan.buttonVariant === "primary" ? "default" : "secondary"
                  }
                  className={`w-full rounded-full ${
                    plan.buttonVariant === "primary"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};