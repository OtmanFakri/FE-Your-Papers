import { StarIcon } from "lucide-react";
import React from "react";
import {Card, CardContent} from "@/app/components/landingPgae/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/components/landingPgae/ui/avatar";


// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "..//img-1.png",
    initials: "SJ",
    quote:
      '"DocFlow has streamlined our document processing workflow. It\'s intuitive and saves us hours every week."',
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "..//img-2.png",
    initials: "MC",
    quote:
      '"The templates are professional and easy to customize. Best document platform I\'ve used."',
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Freelancer",
    image: "..//img-3.png",
    initials: "ED",
    quote:
      '"The export options are fantastic. I can deliver documents to clients in any format they need."',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold [font-family:'Poppins',Helvetica] text-4xl text-gray-900 leading-9 mb-4">
            What Our Users Say
          </h2>
          <p className="font-normal [font-family:'Poppins',Helvetica] text-xl text-gray-600 leading-5">
            Join thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl border-0"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Avatar className="h-12 w-12 rounded-full">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-gray-900 text-base leading-4">
                      {testimonial.name}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base leading-4 mt-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base leading-normal">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className="w-[18px] h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
