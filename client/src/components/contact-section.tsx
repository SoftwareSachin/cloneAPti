import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ContactSection() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insertContactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      setSelectedService("");
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate({ ...data, service: selectedService });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@aptivonsolutions.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210"
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.aptivonsolutions.com"
    }
  ];

  const whyChooseUs = [
    "End-to-End Technology Solutions",
    "Cost-Efficient Delivery",
    "Transparency & Collaboration",
    "Proven Track Record",
    "Continuous Innovation"
  ];

  return (
    <section id="contact" className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Get Started</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to transform your business with intelligent technology? Contact us for a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={info.title} className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <info.icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Aptivon Solutions?</h3>
              <ul className="space-y-2 text-gray-300">
                {whyChooseUs.map((reason, index) => (
                  <li key={index}>• {reason}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className="mt-1"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className="mt-1"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className="mt-1"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cloud">Cloud Strategy & Migration</SelectItem>
                        <SelectItem value="devops">DevOps & CI/CD</SelectItem>
                        <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                        <SelectItem value="web-mobile">Web & Mobile Development</SelectItem>
                        <SelectItem value="consulting">General Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary-dark transition-colors"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
