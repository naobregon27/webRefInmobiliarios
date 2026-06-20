import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items, grouped = false, sections = [] }) {
  const [openKey, setOpenKey] = useState(grouped ? '0-0' : 0);

  if (grouped && sections.length > 0) {
    return (
      <div className="space-y-10">
        {sections.map((section, si) => (
          <div key={section.category}>
            <h3 className="text-lg font-bold text-referix-cyan mb-4">{section.category}</h3>
            <div className="space-y-3">
              {section.items.map((faq, fi) => {
                const key = `${si}-${fi}`;
                const isOpen = openKey === key;
                return (
                  <div key={key} className="glass-card overflow-hidden">
                    <button
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white pr-4">{faq.q}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="w-5 h-5 text-referix-cyan flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="px-5 pb-5 text-slate-400 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const isOpen = openKey === index;
        return (
          <div key={index} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenKey(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-white pr-4">{faq.q}</span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown className="w-5 h-5 text-referix-cyan flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="px-5 pb-5 text-slate-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
