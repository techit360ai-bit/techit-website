import Link from "next/link";
import { footerNav, company } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-digital-blue-100 bg-digital-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-digital-blue-500">
              {company.name}
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs">{company.tagline}</p>
            <p className="mt-4 text-xs text-text-muted">{company.email}</p>
            <p className="text-xs text-text-muted">{company.phone}</p>
            <p className="text-xs text-text-muted">{company.location}</p>
          </div>

          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Solutions" links={footerNav.solutions} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Developers" links={footerNav.developers} />
          <FooterColumn title="Resources" links={footerNav.resources} />
        </div>

        <div className="mt-12 border-t border-digital-blue-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link key={item.label} href={item.href} className="text-xs text-text-muted hover:text-digital-blue-500">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-text-muted hover:text-digital-blue-500 transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
