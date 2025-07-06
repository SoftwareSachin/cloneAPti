import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate({ ...data, service: selectedService });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-6">
            <Send className="w-4 h-4" />
            <span className="font-medium text-sm">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect with our team to discuss your technology requirements and explore how we can help accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Email</p>
                    <p className="text-slate-600">info@aptivonsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Phone</p>
                    <p className="text-slate-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Location</p>
                    <p className="text-slate-600">India & Global Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Aptivon?</h3>
              <div className="space-y-4">
                {[
                  "Enterprise-grade solutions",
                  "24/7 dedicated support", 
                  "Proven track record",
                  "Scalable architecture",
                  "Cost-effective delivery"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                    <span className="text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-slate-700 mb-2 block font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-slate-700 mb-2 block font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 mb-2 block font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                    placeholder="your@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-slate-700 mb-2 block font-medium">Company</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="border-slate-300 focus:border-slate-500 focus:ring-slate-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                        <SelectItem value="devops">DevOps & Automation</SelectItem>
                        <SelectItem value="ai">AI & Analytics</SelectItem>
                        <SelectItem value="development">Application Development</SelectItem>
                        <SelectItem value="consulting">Technology Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-700 mb-2 block font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                    placeholder="Tell us about your project requirements and objectives..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}