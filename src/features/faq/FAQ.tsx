"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";

const faqData = [
  {
    question: "What is a Verifiable Credential?",
    answer:
      "A Verifiable Credential is a tamper-proof digital document that proves claims about an entity (person, organization, or thing). ACTA uses the W3C Verifiable Credentials standard, ensuring your credentials are interoperable, secure, and verifiable across different systems. Each credential is cryptographically signed and stored on the Stellar blockchain for permanent verification.",
  },
  {
    question: "Why Stellar and Soroban?",
    answer:
      "Stellar provides fast, low-cost transactions perfect for credential issuance. Soroban, Stellar's smart contract platform, enables programmable logic for credential management, revocation, and verification. This combination offers enterprise-grade security with minimal fees ($1 USDC per credential), making it accessible for organizations of all sizes.",
  },
  {
    question: "How is a credential verified?",
    answer:
      "Verification happens on-chain through the Stellar blockchain. When someone shares a credential (via link or QR code), the verifier checks the credential's status, signature, and expiration directly on-chain. This process is public, tamper-proof, and doesn't require the issuer to be online. Verification is instant and independent of any centralized service.",
  },
  {
    question: "Does ACTA store sensitive data?",
    answer:
      "No. ACTA follows privacy-by-design principles. Only the credential status, issuer information, and metadata are stored on-chain. Personal data remains encrypted and under the holder's control. The blockchain stores verification proofs, not the actual sensitive information, ensuring compliance with privacy regulations like GDPR.",
  },
  {
    question: "How does on-chain registration work?",
    answer:
      "When you issue a credential, ACTA creates a smart contract on Soroban that records the credential's unique identifier, status, and verification metadata. This registration is permanent and immutable. The credential holder receives a verifiable link or QR code that points to this on-chain record, enabling instant verification without relying on the issuer.",
  },
  {
    question: "What goes on-chain?",
    answer:
      "Only essential verification data goes on-chain: credential status (active/revoked), issuer DID, credential hash, expiration date, and revocation status. Personal data and credential content remain off-chain and encrypted. This approach balances transparency for verification with privacy for credential holders.",
  },
  {
    question: "Do I need blockchain knowledge?",
    answer:
      "No, you only need to create a wallet and we handle all the blockchain complexity for you. ACTA provides a user-friendly interface for issuing, managing, and verifying credentials. Our templates and documentation make it easy to get started without any technical expertise.",
  },
  {
    question: "Are there templates available?",
    answer:
      "Yes. Start from our base templates or customize your own. We provide templates for common use cases like certifications, contribution badges, escrows, diplomas, professional licenses, and more. Templates can be customized to match your organization's branding and requirements.",
  },
  {
    question: "Is verification public?",
    answer:
      "Yes. On-chain state makes verification public and tamper-proof via link or QR code, independent of the issuer. Anyone with the credential link can verify its authenticity and status. However, the credential content itself remains private and encrypted, visible only to authorized parties.",
  },
  {
    question: "What about pricing?",
    answer:
      "Super simple: $1 USDC per credential. If you're an early partner, you get free credits or even free tiers. This covers the on-chain registration and lifetime verification. There are no monthly fees, subscription costs, or hidden charges.",
  },
  {
    question: "How secure is the system?",
    answer:
      "Built on Stellar blockchain with enterprise-grade encryption. Your credentials are protected on-chain with cryptographic signatures. The system uses industry-standard security practices, including secure key management, encrypted storage, and regular security audits. Smart contracts are audited and follow best practices for blockchain security.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card/30 rounded-xl border-border/50 px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
