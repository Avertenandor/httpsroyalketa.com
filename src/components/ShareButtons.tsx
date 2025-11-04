import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Share2, MessageCircle, Send } from 'lucide-react';

interface ShareButtonsProps {
  title?: string;
  url?: string;
  className?: string;
}

export function ShareButtons({ title, url, className = '' }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'ROYAL KETA — Премиальный рыбоводный завод';

  const handleShare = async (platform?: 'telegram' | 'whatsapp' | 'native') => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    switch (platform) {
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
          '_blank',
          'noopener,noreferrer'
        );
        break;
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share({
              title: shareTitle,
              url: shareUrl,
            });
          } catch (err) {
            console.log('Share cancelled or error:', err);
          }
        } else {
          // Fallback: copy to clipboard
          try {
            await navigator.clipboard.writeText(shareUrl);
            alert('Ссылка скопирована в буфер обмена!');
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        }
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <span className="text-sm text-foreground-muted mr-2">Поделиться:</span>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare('telegram')}
        className="hover:text-[#0088cc] hover:bg-[#0088cc]/10"
      >
        <Send className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare('whatsapp')}
        className="hover:text-[#25D366] hover:bg-[#25D366]/10"
      >
        <MessageCircle className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare('native')}
        className="hover:text-gold hover:bg-gold/10"
      >
        <Share2 className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
