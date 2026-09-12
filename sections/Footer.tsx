import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getEmailLink, siteConfig } from "@/config/siteConfig";
import type { Translation } from "@/lib/types";

type FooterContact = {
  label: string;
  value: string;
  href: string;
  external: boolean;
  whatsapp?: boolean;
};

function isFooterContact(contact: FooterContact | null): contact is FooterContact {
  return contact !== null;
}

export function Footer({ t }: { t: Translation }) {
  const emailUrl = getEmailLink();
  const whatsappUrl = siteConfig.whatsapp.url;
  const contacts: FooterContact[] = [
    emailUrl
      ? {
          label: t.footer.emailLabel,
          value: siteConfig.email,
          href: emailUrl,
          external: false,
        }
      : null,
    siteConfig.phone.href
      ? {
          label: t.footer.phoneLabel,
          value: siteConfig.phone.label,
          href: siteConfig.phone.href,
          external: false,
        }
      : null,
    siteConfig.instagram.url
      ? {
          label: t.footer.instagramLabel,
          value: siteConfig.instagram.label,
          href: siteConfig.instagram.url,
          external: true,
        }
      : null,
    whatsappUrl
      ? {
          label: t.footer.whatsappLabel,
          value: "WhatsApp",
          href: whatsappUrl,
          external: true,
          whatsapp: true,
        }
      : null,
  ].filter(isFooterContact);

  return (
    <footer className="border-t border-[rgba(8,46,99,0.1)] bg-[#F7F7F5] py-7 sm:py-9">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 md:grid-cols-[0.75fr_2.25fr] md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#071B33]">
              {siteConfig.shortName.toUpperCase()}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#082E63]/50">
              {siteConfig.slogan}
            </p>
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:items-start">
            {contacts.map((contact) => (
              <div key={contact.label}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#C99B3C]">
                  {contact.label}
                </p>
                <a
                  className={`mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold transition sm:mt-2 ${
                    contact.whatsapp
                      ? "text-[#128C4A] hover:text-[#0F7A40]"
                      : "text-[#0B2340]/72 hover:text-[#C99B3C]"
                  }`}
                  href={contact.href}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  target={contact.external ? "_blank" : undefined}
                >
                  {contact.whatsapp ? <WhatsAppIcon className="h-4 w-4" /> : null}
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 border-t border-[rgba(8,46,99,0.1)] pt-4 sm:mt-6">
          <a
            className="mb-3 inline-flex text-sm font-semibold text-[#082E63] underline-offset-4 transition hover:text-[#C99B3C] hover:underline"
            href="/site-zhasau-astana"
          >
            {t.footer.astanaLink}
          </a>
          <p className="max-w-[calc(100%-3.5rem)] text-sm text-[#0B2340]/50 sm:max-w-none">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
