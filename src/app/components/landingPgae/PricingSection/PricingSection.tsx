'use client'
import React from "react";
import {motion} from 'framer-motion';

export const PricingSection = () => {
    // Updated pricing plan data with new features and prices
    const pricingPlans = [
        {
            id: 'basic',
            name: 'Basic Plan',
            price: '0 MAD',
            priceUSD: '~$0',
            isPopular: false,
            features: [
                '10 Documents/month',
                'Basic PDF/Word downloads',
                'Standard autocomplete using CNI',
                'Basic support',
            ],
            buttonText: 'Choose Basic',
            buttonVariant: 'outline',
        },
        {
            id: 'premium',
            name: 'Premium Plan',
            price: '199 MAD',
            priceUSD: '~$20',
            isPopular: true,
            features: [
                'Unlimited documents',
                'Advanced PDF/Word formatting',
                'Enhanced autocomplete features',
                'Priority support',
                'Document storage/history',
            ],
            buttonText: 'Choose Premium',
            buttonVariant: 'filled',
        },
        {
            id: 'enterprise',
            name: 'Business Solution',
            price: '1499 MAD',
            priceUSD: '~$150',
            isPopular: false,
            features: [
                'Unlimited multi-user documents',
                'API access for integration',
                'Bulk processing capabilities',
                'Custom branding options',
                'Dedicated account manager',
                'Advanced analytics',
            ],
            buttonText: 'Contact Sales',
            buttonVariant: 'outline',
        },
    ];// Animation variants for cards
    const cardVariants = {
        hidden: {opacity: 0, y: 50},
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };

// Animation variants for buttons
    const buttonVariants = {
        hover: {scale: 1.05},
        tap: {scale: 0.95},
    };
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

                <div
                    className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:max-w-none xl:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            whileHover={{scale: 1.03, transition: {duration: 0.2}}}
                            className={`rounded-3xl p-8 ${
                                plan.isPopular
                                    ? 'ring-2 ring-blue-600'
                                    : 'ring-1 ring-gray-200'
                            } bg-white`}
                        >
                            <h3
                                id={`tier-${plan.id}`}
                                className={`text-lg font-semibold ${
                                    plan.isPopular ? 'text-blue-600' : 'text-gray-900'
                                } font-['Poppins',Helvetica]`}
                            >
                                {plan.name}
                            </h3>
                            <div className="mt-6">
                                <div className="flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900 font-['Poppins',Helvetica]">
                    {plan.price}
                  </span>
                                    <span className="text-sm font-semibold text-gray-600 font-['Poppins',Helvetica]">
                    /Year
                  </span>
                                </div>
                                <span className="text-sm text-gray-500 font-['Poppins',Helvetica]">
                  {plan.priceUSD} USD
                </span>
                            </div>
                            <motion.a
                                href="#"
                                aria-describedby={`tier-${plan.id}`}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold font-['Poppins',Helvetica] ${
                                    plan.buttonVariant === 'filled'
                                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                                        : 'text-blue-600 ring-1 ring-blue-200 hover:ring-blue-300'
                                }`}
                            >
                                {plan.buttonText}
                            </motion.a>
                            <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-x-3">
                                        <svg
                                            className="h-6 w-5 flex-none text-blue-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="font-['Poppins',Helvetica]">
                      {feature}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};