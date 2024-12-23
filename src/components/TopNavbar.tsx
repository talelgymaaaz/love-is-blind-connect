import React, { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import CartIcon from "./navigation/CartIcon";
import MobileMenu from "./navigation/MobileMenu";
import MobileMenuOverlay from "./navigation/MobileMenuOverlay";
import { menuItems } from "@/constants/menuItems";
import StoreLocationsModal from "./StoreLocationsModal";
import ContactModal from "./ContactModal";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedItem(null);
  };

  const toggleSubmenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="font-['Montserrat'] font-light">
      <nav className="bg-primary px-6 py-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>

            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => setIsStoreModalOpen(true)}
                className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300"
              >
                <MapPin size={18} />
                TROUVER UNE BOUTIQUE
              </button>
            </div>

            <div className="flex items-center gap-4 sm:hidden">
              <CartIcon />
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="flex items-center gap-2 text-sm text-white whitespace-nowrap hover:text-accent transition-colors duration-300"
            >
              <Phone size={18} />
              CONTACTEZ-NOUS
            </button>
            
            <CartIcon />
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={toggleMenu}
        menuItems={menuItems}
        expandedItem={expandedItem}
        onToggleSubmenu={toggleSubmenu}
        onStoreClick={() => setIsStoreModalOpen(true)}
        onContactClick={() => setIsContactModalOpen(true)}
      />

      <MobileMenuOverlay isOpen={isOpen} onClose={toggleMenu} />

      <StoreLocationsModal
        isOpen={isStoreModalOpen}
        onOpenChange={setIsStoreModalOpen}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
};

export default TopNavbar;
