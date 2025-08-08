import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  const WHATSAPP_NUMBER = "+917489355967"; // Replace with your actual number
  const EMAIL_ADDRESS = "nishantbaiga@gmail.com"; // Replace with your email
  return (
    <div className="space-y-6">
      {/* Email */}
      <div className="flex items-start">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
          <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-medium text-gray-700 dark:text-gray-300">
            Email
          </h3>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {EMAIL_ADDRESS}
          </a>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start">
        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
          <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="font-medium text-gray-700 dark:text-gray-300">
            WhatsApp
          </h3>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:underline"
          >
            {WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
