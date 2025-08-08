import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
const Contactform = ({ register, handleSubmit, errors, onSubmit, isSubmitting, isSuccess }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
          Your Message
        </Label>
        <Textarea 
          id="message"
          className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 min-h-[120px]"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center text-green-600 dark:text-green-400"
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            <span>Message sent!</span>
          </motion.div>
        )}
      </div>
    </form>
  );
};

export default Contactform;
