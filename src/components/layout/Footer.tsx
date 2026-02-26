import Image from "next/image";
import Link from "next/link";
import { ACTA_OFFICIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <Image
            src="/Acta-logo.png"
            alt="ACTA Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-xl font-bold">ACTA</span>
        </div>

        {/* Official Links Section */}
        <div className="w-full">
          <h3 className="text-sm font-semibold text-foreground mb-3 text-center">
            Official Links
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href={ACTA_OFFICIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={ACTA_OFFICIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              X (Twitter)
            </Link>
            <Link
              href={ACTA_OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
            <Link
              href={ACTA_OFFICIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={ACTA_OFFICIAL_LINKS.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href={ACTA_OFFICIAL_LINKS.dapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              DApp
            </Link>
            <Link
              href={ACTA_OFFICIAL_LINKS.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          © 2025 ACTA. The new infrastructure for digital trust.
        </div>
      </div>
    </div>
  );
}
