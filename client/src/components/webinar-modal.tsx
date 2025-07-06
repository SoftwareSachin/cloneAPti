import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Video, Calendar } from "lucide-react";

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
  webinar: any;
}

export default function WebinarModal({ isOpen, onClose, webinar }: WebinarModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/webinar-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          webinarId: webinar.id,
          ...formData
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Registration successful! Check your email for the joining link.");
        setTimeout(() => {
          onClose();
          setFormData({ firstName: "", lastName: "", email: "", company: "", jobTitle: "", phone: "" });
          setMessage("");
        }, 3000);
      } else {
        setMessage(data.message || "Failed to register for webinar");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            {webinar?.status === 'upcoming' ? 'Register for Webinar' : 'Access Recording'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-slate-900 mb-2">{webinar?.title}</h3>
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {webinar?.date}
            </div>
            <div className="flex items-center">
              <Video className="h-4 w-4 mr-1" />
              {webinar?.duration}
            </div>
          </div>
          <p className="text-sm text-slate-600">{webinar?.description}</p>
          <p className="text-sm text-slate-700 mt-2">Speaker: {webinar?.speaker}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                First Name *
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Last Name *
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address *
            </label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Company
            </label>
            <Input
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Acme Corp"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Job Title
            </label>
            <Input
              value={formData.jobTitle}
              onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
              placeholder="CTO"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {message && (
            <div className={`p-3 rounded-lg text-sm ${
              message.includes("successful") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}>
              {message}
            </div>
          )}

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white"
            >
              {isSubmitting ? "Processing..." : webinar?.status === 'upcoming' ? 'Register' : 'Get Access'}
              <Video className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>

        <p className="text-xs text-slate-500 mt-4 text-center">
          By registering, you agree to receive updates about our webinars and services.
        </p>
      </div>
    </div>
  );
}