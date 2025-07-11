import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Send, X } from 'lucide-react';

interface AcademicFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AcademicFormModal({ isOpen, onClose }: AcademicFormModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    institution: '',
    course: '',
    semester: '',
    projectType: '',
    domain: '',
    projectTitle: '',
    description: '',
    requirements: '',
    deadline: '',
    budget: '',
    needsPPT: false,
    additionalNotes: ''
  });

  const projectTypes = [
    'Final Year Project',
    'Minor Project',
    'Major Project',
    'Internship Project',
    'Research Project',
    'Dissertation',
    'Thesis',
    'Custom Project'
  ];

  const domains = [
    'Web Development',
    'Mobile App Development',
    'Machine Learning/AI',
    'Data Science',
    'Blockchain',
    'IoT (Internet of Things)',
    'Cybersecurity',
    'Cloud Computing',
    'Database Management',
    'Network Administration',
    'Software Engineering',
    'Game Development',
    'AR/VR Development',
    'E-commerce',
    'Digital Marketing',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹2,000',
    '₹2,000 - ₹3,000',
    '₹3,000 - ₹5,000',
    '₹5,000 - ₹10,000',
    'Above ₹10,000',
    'Custom Quote'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/academic-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Request Submitted Successfully!",
          description: "We'll contact you within 24 hours with project details and timeline.",
        });
        onClose();
        setFormData({
          studentName: '',
          email: '',
          phone: '',
          institution: '',
          course: '',
          semester: '',
          projectType: '',
          domain: '',
          projectTitle: '',
          description: '',
          requirements: '',
          deadline: '',
          budget: '',
          needsPPT: false,
          additionalNotes: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-slate-900">
                Academic Project Request Form
              </DialogTitle>
              <p className="text-slate-600 mt-1">
                Fill out this form to get started with your academic project
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Information */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Student Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentName">Full Name *</Label>
                <Input
                  id="studentName"
                  value={formData.studentName}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  placeholder="your.email@domain.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <Label htmlFor="institution">Institution/College *</Label>
                <Input
                  id="institution"
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                  required
                  placeholder="Your college/university name"
                />
              </div>
              <div>
                <Label htmlFor="course">Course/Program *</Label>
                <Input
                  id="course"
                  value={formData.course}
                  onChange={(e) => handleInputChange('course', e.target.value)}
                  required
                  placeholder="e.g., B.Tech CSE, MCA, etc."
                />
              </div>
              <div>
                <Label htmlFor="semester">Current Semester/Year *</Label>
                <Input
                  id="semester"
                  value={formData.semester}
                  onChange={(e) => handleInputChange('semester', e.target.value)}
                  required
                  placeholder="e.g., 7th Semester, Final Year"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectType">Project Type *</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="domain">Project Domain *</Label>
                <Select value={formData.domain} onValueChange={(value) => handleInputChange('domain', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map((domain) => (
                      <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4">
              <Label htmlFor="projectTitle">Project Title *</Label>
              <Input
                id="projectTitle"
                value={formData.projectTitle}
                onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                required
                placeholder="Enter your project title"
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                required
                placeholder="Describe what your project should do and its main features"
                rows={4}
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="requirements">Technical Requirements</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                placeholder="Specify technologies, frameworks, databases, or any specific requirements"
                rows={3}
              />
            </div>
          </div>

          {/* Timeline & Budget */}
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Timeline & Budget</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deadline">Project Deadline *</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="budget">Budget Range *</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <Checkbox
                id="needsPPT"
                checked={formData.needsPPT}
                onCheckedChange={(checked) => handleInputChange('needsPPT', checked as boolean)}
              />
              <Label htmlFor="needsPPT" className="text-sm font-medium">
                I also need a PowerPoint presentation (₹500 additional)
              </Label>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              placeholder="Any additional information or special requirements"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 text-lg"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Project Request
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>

          <div className="text-sm text-slate-600 bg-yellow-50 p-4 rounded-lg">
            <strong>Note:</strong> After submitting this form, we'll contact you within 24 hours to discuss project details, timeline, and provide a detailed quote. All project requirements will be confirmed before starting work.
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}