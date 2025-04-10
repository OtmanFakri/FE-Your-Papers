'use client'
import React from "react";
import { DownloadIcon, EditIcon, FileIcon } from "lucide-react";
import { motion } from "framer-motion";
import {Card, CardContent} from "@/app/components/landingPgae/ui/card";

export const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: <FileIcon className="h-8 w-8 text-blue-600" />,
      title: "Choose Your Template",
      description:
          "Browse our extensive library of professional document templates designed for your specific needs",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      icon: <EditIcon className="h-8 w-8 text-purple-600" />,
      title: "Customize & Edit",
      description: "Easily modify content with our intuitive editor. Add your details, adjust formatting, and make it your own",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      icon: <DownloadIcon className="h-8 w-8 text-green-600" />,
      title: "Export & Share",
      description: "Download your document in multiple formats or share directly with your team",
      gradient: "from-green-500 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
      <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-20"
          >
            <h2 className="font-bold text-5xl text-gray-900 font-['Poppins',Helvetica] text-center leading-tight mb-6">
              How It Works
            </h2>
            <p className="font-normal text-xl text-gray-600 font-['Poppins',Helvetica] text-center leading-relaxed max-w-2xl">
              Transform your document creation process with our simple three-step solution
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {steps.map((step) => (
                <motion.div key={step.id} variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                        {step.icon}
                      </div>
                      <h3 className="font-bold text-2xl text-gray-900 font-['Poppins',Helvetica] text-center leading-tight mb-4">
                        {step.title}
                      </h3>
                      <p className="font-normal text-base text-gray-600 font-['Poppins',Helvetica] text-center leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};