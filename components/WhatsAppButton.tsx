import { getWhatsAppLink } from "@/config/siteConfig";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton({ message }: { message: string }) {
  const whatsappUrl = getWhatsAppLink(message);

  if (!whatsappUrl) {
    return null;
  }

  return (
    <a
      aria-label="WhatsApp"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#25D366] bg-[#25D366] text-[#06351D] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1DB954] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
      href={whatsappUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}
