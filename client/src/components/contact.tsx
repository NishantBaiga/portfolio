import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Mail, Phone, Send, Loader2, CheckCircle, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SocialLinks from "./socialLinks";
import ContactInfo from "./contactInfo";
import Contactform from "./form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const WEB3FORMS_API_KEY = import.meta.env.VITE_APP_WEB3FORMACCESSKEY;


  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: WEB3FORMS_API_KEY,
        name: data.name,
        email: data.email,
        message: data.message,
      });
      console.log("Response:", response.data);

      if (response.data.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-8 md:p-12 lg:p-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Reach out to me
            through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send me a message
            </h2>
            {/*Contactform */}
            <Contactform
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              isSuccess={isSuccess}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Contact Information
              </h2>
              {/* Contact Information number and email */}
              <ContactInfo />
            </div>

            {/* Social Links */}
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
