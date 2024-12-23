import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { savePersonalization, removePersonalization, getPersonalizations } from '@/utils/personalizationStorage';

interface PersonalizationInputProps {
  itemId: number;
  onUpdate: () => void;
}

const PersonalizationInput = ({ itemId, onUpdate }: PersonalizationInputProps) => {
  const [isPersonalized, setIsPersonalized] = useState(() => {
    const personalizations = getPersonalizations();
    return !!personalizations[itemId];
  });
  const [text, setText] = useState(() => {
    const personalizations = getPersonalizations();
    return personalizations[itemId] || '';
  });
  const [isEditing, setIsEditing] = useState(!text);

  const handleSave = () => {
    if (text.trim()) {
      savePersonalization(itemId, text.trim());
      setIsEditing(false);
      onUpdate();
    }
  };

  const handleRemove = () => {
    removePersonalization(itemId);
    setText('');
    setIsPersonalized(false);
    onUpdate();
  };

  if (!isPersonalized) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="w-full mt-2 text-sm bg-[#700100] hover:bg-[#590000] text-white border-[#700100] hover:border-[#590000] transition-all duration-300 shadow-sm hover:shadow-md"
        onClick={() => setIsPersonalized(true)}
      >
        + Ajouter une personnalisation
      </Button>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mt-2 space-y-2"
    >
      {isEditing ? (
        <div className="space-y-2">
          <Textarea
            placeholder="Entrez votre texte de personnalisation ici..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="text-sm text-black resize-none focus:ring-[#700100] focus:border-[#700100] bg-white border-gray-300 rounded-md shadow-sm hover:border-[#700100] transition-all duration-300"
            rows={3}
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-[#700100] hover:bg-[#590000] text-white shadow-sm hover:shadow-md transition-all duration-300"
              onClick={handleSave}
            >
              Confirmer
            </Button>
            <Button
  size="sm"
  variant="outline"
  className="flex-1 border-[#700100] bg-white text-[#700100] hover:bg-red-500 hover:text-white transition-all duration-300"
  onClick={() => {
    if (!text) {
      setIsPersonalized(false);
    } else {
      setIsEditing(false);
    }
  }}
>
  Annuler
</Button>

          </div>
        </div>
      ) : (
        <div className="bg-gray-50 p-3 rounded-lg relative group border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-sm text-gray-600 pr-8">Personalisation: {text}</p>
          <div className="absolute right-2 top-2 flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#700100] hover:text-[#590000] hover:bg-[#700100]/10"
              onClick={() => setIsEditing(true)}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PersonalizationInput;