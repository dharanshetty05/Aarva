"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // install lucide-react if not yet done

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/917795116095?text=Hi! I'd like to know more about Aarva Interiors"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
