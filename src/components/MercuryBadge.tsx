import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MercuryBadgeProps {
  className?: string;
}

export function MercuryBadge({ className = '' }: MercuryBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to="/mercury/"
        className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#16344a] bg-gradient-to-r from-[rgba(0,194,255,0.15)] to-[rgba(0,255,163,0.15)] hover:from-[rgba(0,194,255,0.25)] hover:to-[rgba(0,255,163,0.25)] transition-all duration-300 no-underline ${className}`}
        aria-label="Подробнее о работе в системе Меркурий и электронных ВСД"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="flex-shrink-0"
        >
          {/* Shield outline */}
          <path
            d="M12 2L4 6V11C4 16 7.4 20.7 12 21C16.6 20.7 20 16 20 11V6L12 2Z"
            fill="#9be8ff"
            opacity="0.2"
          />
          <path
            d="M12 2L4 6V11C4 16 7.4 20.7 12 21C16.6 20.7 20 16 20 11V6L12 2Z"
            stroke="#9be8ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Checkmark */}
          <path d="M10.2 13.8L8.2 11.7L9.6 10.3L10.9 11.6L14.6 7.9L16 9.3L10.2 13.8Z" fill="#00ffa3" />
        </svg>
        <span className="text-sm font-medium text-foreground">
          Работаем в «Меркурий» — эВСД на каждую партию
        </span>
      </Link>
    </motion.div>
  );
}
