
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { formatInTimeZone } from "date-fns-tz";

// Define country data with codes, flags and validation rules
const countries = [
  { code: "+1", name: "United States", flag: "🇺🇸", digits: 10 },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧", digits: 10 },
  { code: "+91", name: "India", flag: "🇮🇳", digits: 10 },
  { code: "+86", name: "China", flag: "🇨🇳", digits: 11 },
  { code: "+81", name: "Japan", flag: "🇯🇵", digits: 10 },
  { code: "+49", name: "Germany", flag: "🇩🇪", digits: 11 },
  { code: "+33", name: "France", flag: "🇫🇷", digits: 9 },
  { code: "+61", name: "Australia", flag: "🇦🇺", digits: 9 },
  { code: "+7", name: "Russia", flag: "🇷🇺", digits: 10 },
  { code: "+55", name: "Brazil", flag: "🇧🇷", digits: 11 },
];

// Define response type for form submissions
interface FormSubmissionResponse {
  result: string;
  message?: string;
  error?: string;
}

export const WaitlistSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [companySize, setCompanySize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (value: string, selectedCountryCode: string) => {
    // Remove any non-digit characters
    const digitsOnly = value.replace(/\D/g, "");
    setPhone(digitsOnly);
    
    // Find the selected country's validation rules
    const country = countries.find(c => c.code === selectedCountryCode);
    
    if (!country) return;
    
    if (digitsOnly.length === 0) {
      setPhoneError("");
    } else if (digitsOnly.length !== country.digits) {
      setPhoneError(`Phone number must be ${country.digits} digits for ${country.name}`);
    } else {
      setPhoneError("");
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCode = e.target.value;
    setCountryCode(newCode);
    // Re-validate phone with new country code
    validatePhone(phone, newCode);
  };

  // Function to get IST formatted timestamp
  const getISTTimestamp = () => {
    const now = new Date();
    return formatInTimeZone(now, 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
  };

  // Function to directly post the form data instead of using JSONP
  const submitFormDirect = (formData: Record<string, string>): Promise<FormSubmissionResponse> => {
    return new Promise((resolve, reject) => {
      // Updated URL of the Google Apps Script
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwnETcQhav9p8yzHx64zSDbwt8iWsEth7HlSkdPepAg6vwzxaITLHhw3QmA9tsEsxgtkA/exec';
      
      // Add IST timestamp to form data
      formData["Timestamp"] = getISTTimestamp();
      
      // Create a form data object for the fetch request
      const formDataObj = new FormData();
      formDataObj.append('data', JSON.stringify(formData));
      
      // Use fetch API to post data directly
      fetch(scriptURL, {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors' // This is needed for cross-origin requests to Google Apps Script
      })
      .then(() => {
        // Because of no-cors mode, we can't read the response
        // Instead, we assume success (will need to check the sheet separately)
        resolve({
          result: "possible_success",
          message: "Your submission was received. We'll reach out to confirm soon."
        });
      })
      .catch(error => {
        console.error('Direct submission error:', error);
        reject(new Error("Could not connect to the server. Please try again."));
      });
    });
  };

  // Fallback method using form submission through a hidden iframe (for browsers that block direct fetch)
  const submitFormFallback = (formData: Record<string, string>): Promise<FormSubmissionResponse> => {
    return new Promise((resolve, reject) => {
      // Updated URL of the Google Apps Script
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwnETcQhav9p8yzHx64zSDbwt8iWsEth7HlSkdPepAg6vwzxaITLHhw3QmA9tsEsxgtkA/exec';
      
      // Add IST timestamp to form data
      formData["Timestamp"] = getISTTimestamp();
      
      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a unique name for the iframe
      const iframeName = 'gtmcentric_iframe_' + Date.now();
      iframe.name = iframeName;
      
      // Create a form that will be submitted in the iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = scriptURL;
      form.target = iframeName;
      
      // Add a hidden input for the form data
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'data';
      input.value = JSON.stringify(formData);
      form.appendChild(input);
      
      // Set a timeout in case the iframe method also fails
      const timeoutId = setTimeout(() => {
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
        reject(new Error("Request timed out. Please try again."));
      }, 20000);
      
      // Handle iframe load event
      iframe.onload = () => {
        clearTimeout(timeoutId);
        
        // We don't have direct access to the response in the iframe due to CORS
        // So we'll assume success after load, but show a disclaimer
        document.body.removeChild(iframe);
        
        // Since we can't verify the actual response, we'll provide a cautious success message
        resolve({
          result: "possible_success",
          message: "Your submission was received, but we couldn't confirm its status. We'll reach out to confirm."
        });
      };
      
      // Handle iframe error
      iframe.onerror = () => {
        clearTimeout(timeoutId);
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
        reject(new Error("Could not complete submission. Please try again."));
      };
      
      // Append the form to the document, submit it, then remove it
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if there's a validation error
    if (phoneError) {
      toast({
        title: "Validation Error",
        description: phoneError,
        variant: "destructive",
      });
      return;
    }
    
    // Set submitting state to show loading indicator
    setIsSubmitting(true);
    
    try {
      // Prepare the form data
      const formData = { 
        "First Name": firstName,
        "Last Name": lastName,
        "Company Name": companyName,
        "Email": email, 
        "Phone": `${countryCode}${phone}`, 
        "Company Size": companySize 
      };
      
      // First attempt using direct fetch
      try {
        const result = await submitFormDirect(formData);
        console.log("Direct submission successful:", result);
        
        toast({
          title: "Success!",
          description: "Thank you for joining our waitlist. We'll be in touch soon.",
        });
        
        // Clear form
        setFirstName("");
        setLastName("");
        setCompanyName("");
        setEmail("");
        setPhone("");
        setCountryCode("+1");
        setCompanySize("");
        
      } catch (directError) {
        console.warn("Direct submission failed, trying fallback method:", directError);
        
        // If direct fetch fails, try the iframe fallback method
        try {
          const fallbackResult = await submitFormFallback(formData);
          console.log("Fallback submission response:", fallbackResult);
          
          // Show different toast message for unconfirmed submission
          if (fallbackResult.result === "possible_success") {
            toast({
              title: "Submission Received",
              description: fallbackResult.message,
            });
            
            // Clear form
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setEmail("");
            setPhone("");
            setCountryCode("+1");
            setCompanySize("");
          } else {
            toast({
              title: "Success!",
              description: "Thank you for joining our waitlist. We'll be in touch soon.",
            });
            
            // Clear form
            setFirstName("");
            setLastName("");
            setCompanyName("");
            setEmail("");
            setPhone("");
            setCountryCode("+1");
            setCompanySize("");
          }
        } catch (fallbackError) {
          console.error("Both submission methods failed:", fallbackError);
          throw new Error("We couldn't process your submission after multiple attempts. Please try again later.");
        }
      }
      
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 md:py-12 relative" id="waitlist-form">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-lg mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold sm:text-4xl text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Get in Early—Unlock Exclusive Benefits
          </h2>
          <div className="mt-6 space-y-4 text-left">
            {[
              "Free beta access starting April 2025.",
              "50% off for the first 6 months on any plan - starting at just $5/user/month (regular $10).",
              "Priority support during launch.",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center text-foreground/90">
                <Check className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          <form
            id="waitlist-form"
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 mt-8 space-y-4"
            aria-label="GTMCentric waitlist signup form"
          >
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                  required
                  aria-label="First Name"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                  required
                  aria-label="Last Name"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
              required
              aria-label="Company Name"
            />
            <input
              type="email"
              placeholder="Company Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
              required
              aria-label="Company Email"
            />
            <div className="flex gap-4">
              <select
                className="px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                value={countryCode}
                onChange={handleCountryCodeChange}
                aria-label="Country Code"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <div className="flex-1 flex flex-col">
                <input
                  type="tel"
                  placeholder="Mobile number"
                  value={phone}
                  onChange={(e) => validatePhone(e.target.value, countryCode)}
                  className={`w-full px-4 py-3 text-foreground bg-muted/50 border ${
                    phoneError ? "border-red-500" : "border-white/10"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm`}
                  required
                  aria-label="Mobile Number"
                />
                {phoneError && (
                  <p className="text-xs text-red-500 mt-1 text-left" role="alert">{phoneError}</p>
                )}
              </div>
            </div>
            <select
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className="w-full px-4 py-3 text-foreground bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
              required
              aria-label="Company Size"
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201+">201+ employees</option>
            </select>
            <button
              type="submit"
              className="w-full px-6 py-3 text-white transition-all bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#1A1F2C]"
              disabled={isSubmitting}
              aria-label="Reserve your spot on the GTMCentric waitlist"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <>
                  Reserve Your Spot Now
                  <ArrowRight className="inline-block w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
