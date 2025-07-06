import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Globe, Sparkles, Send, CheckCircle } from "lucide-react";
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
    <section id="contact" className="py-24 gradient-primary text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 shadow-2xl">
            <div className="flex items-center">
              <Send className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-semibold text-base tracking-wide">GET IN TOUCH</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display">Let's Build Something Exceptional</h2>
          <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            Ready to transform your business with intelligent technology? Let's discuss your vision and create solutions that drive real results.
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
              <motion.div 
                key={info.title} 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mr-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-xl">
                  <info.icon className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                  <p className="text-white/80 font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Why Choose Aptivon Solutions?</h3>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <CheckCircle className="w-5 h-5 mr-3 text-white flex-shrink-0" />
                    <span className="font-medium">{reason}</span>
                  </li>
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
            <Card className="bg-white/95 backdrop-blur-lg text-gray-900 border-0 shadow-2xl rounded-3xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-8 text-slate-900">Send us a Message</h3>
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
                          {String(errors.firstName.message)}
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
                          {String(errors.lastName.message)}
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
                        {String(errors.email.message)}
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
                        {String(errors.company.message)}
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
                        {String(errors.message.message)}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white hover:from-slate-800 hover:to-slate-600 transition-all duration-300 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl group"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
