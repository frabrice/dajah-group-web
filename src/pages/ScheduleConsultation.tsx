import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { CheckCircle2, Clock, FileText, User, ArrowRight, ArrowLeft, Calendar, Check } from 'lucide-react';
import 'react-day-picker/dist/style.css';

interface FormData {
  date: Date | undefined;
  time: string;
  description: string;
  name: string;
  phone: string;
  email: string;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM'
];

function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { icon: Calendar, label: 'Schedule' },
    { icon: FileText, label: 'Description' },
    { icon: User, label: 'Information' },
    { icon: CheckCircle2, label: 'Review' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-military-200 -translate-y-1/2" />
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isActive = index <= currentStep;
          return (
            <div key={index} className="relative flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors ${
                  isActive ? 'bg-military-600 text-white' : 'bg-military-200 text-military-600'
                }`}
              >
                <StepIcon className="w-5 h-5" />
              </div>
              <span className={`mt-2 text-sm font-medium ${
                isActive ? 'text-military-900' : 'text-military-500'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScheduleConsultation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    date: undefined,
    time: '',
    description: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Select Date</h3>
              <DayPicker
                mode="single"
                selected={formData.date}
                onSelect={(date) => setFormData({ ...formData, date })}
                disabled={{ before: new Date() }}
                className="mx-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Select Time</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setFormData({ ...formData, time })}
                    className={`p-3 rounded-lg border ${
                      formData.time === time
                        ? 'bg-military-600 text-white border-military-600'
                        : 'border-military-200 hover:border-military-400'
                    }`}
                  >
                    <Clock className="w-4 h-4 inline-block mr-2" />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Tell us about your needs</h3>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Please describe what you'd like to discuss during the consultation..."
              className="w-full h-48 p-4 border border-military-200 rounded-lg focus:ring-military-500 focus:border-military-500"
            />
          </div>
        );

      case 2:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-lg font-semibold mb-4">Your Information</h3>
            <div>
              <label className="block text-sm font-medium text-military-700 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-military-200 rounded-lg focus:ring-military-500 focus:border-military-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-military-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border border-military-200 rounded-lg focus:ring-military-500 focus:border-military-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-military-700 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border border-military-200 rounded-lg focus:ring-military-500 focus:border-military-500"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-6">Review Your Information</h3>
            <div className="space-y-4">
              <div className="flex items-start border-b border-military-100 pb-4">
                <Calendar className="w-5 h-5 text-military-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-military-900">Scheduled Time</h4>
                  <p className="text-military-600">
                    {formData.date ? format(formData.date, 'MMMM d, yyyy') : 'No date selected'} at {formData.time || 'No time selected'}
                  </p>
                </div>
              </div>
              <div className="flex items-start border-b border-military-100 pb-4">
                <FileText className="w-5 h-5 text-military-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-military-900">Consultation Details</h4>
                  <p className="text-military-600">{formData.description || 'No description provided'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="w-5 h-5 text-military-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-military-900">Contact Information</h4>
                  <p className="text-military-600">{formData.name}</p>
                  <p className="text-military-600">{formData.phone}</p>
                  <p className="text-military-600">{formData.email}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-military-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-military-900 mb-4">Schedule Your Consultation</h1>
          <p className="text-military-600 max-w-2xl mx-auto">
            Book a personalized consultation session with our financial experts to discuss your business needs and goals.
          </p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStepContent()}

          <div className="flex justify-between pt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center px-6 py-3 border border-military-300 rounded-lg text-military-700 hover:bg-military-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            )}
            <div className="ml-auto">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-military-600 text-white rounded-lg hover:bg-military-700 transition-colors"
                >
                  Next
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-military-600 text-white rounded-lg hover:bg-military-700 transition-colors"
                >
                  Confirm Booking
                  <Check className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleConsultation;