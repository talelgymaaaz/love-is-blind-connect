import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ isOpen, onOpenChange }: ContactModalProps) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+21650813355', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#471818]/80 backdrop-blur-md border-none shadow-lg w-[95vw] max-w-[425px] p-4 md:p-6 rounded-xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl md:text-2xl font-semibold text-center">Contactez-nous</DialogTitle>
          <DialogDescription className="text-center text-white/90 text-sm md:text-base">
            Envoyez-nous un message ou contactez-nous via WhatsApp
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 md:gap-6 py-2 md:py-4">
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div className="space-y-2">
              <Input
                id="subject"
                placeholder="Sujet"
                className="bg-white/10 border-gray-200 h-10 md:h-11"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Votre message"
                className="min-h-[80px] md:min-h-[100px] bg-white/10 border-gray-200"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-10 md:h-11">
              Envoyer
            </Button>
          </form>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300/30" />
            </div>
            <div className="relative flex justify-center text-xs md:text-sm">
              <span className="bg-[#471818] px-2 text-gray-300">Ou</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 h-10 md:h-11"
            >
              <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Contactez-nous sur WhatsApp</span>
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;