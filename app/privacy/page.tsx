import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Solutions That Work handles personal information.",
  alternates: { canonical: "/privacy" },
};

// Review this notice before going live — it is a sensible starting point, not legal advice.
export default function Privacy() {
  const h = "mt-10 text-xl font-semibold text-night";
  const p = "mt-3 leading-relaxed text-ink-700";
  return (
    <>
      <Header />
      <main id="main" className="bg-white"><div className="bg-night pb-16 pt-40 text-white"><div className="wrap max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-mint">Legal</p><h1 className="h2 mt-4">Privacy notice</h1></div></div><div className="wrap max-w-3xl pb-24 pt-6">
        <p className={p}>Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

        <h2 className={h}>Who I am</h2>
        <p className={p}>Solutions That Work is the trading name of {site.owner}, an independent professional based in the United Kingdom. I am the data controller for personal information collected through this website. You can contact me at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>

        <h2 className={h}>What I collect and why</h2>
        <p className={p}>If you get in touch, I receive the details you choose to share — typically your name, email address, company and message. I use them only to respond to your enquiry and, if we work together, to manage that relationship. The lawful basis is my legitimate interest in responding to enquiries, or steps taken at your request before entering a contract.</p>

        <h2 className={h}>Cookies and analytics</h2>
        <p className={p}>This website does not use tracking or advertising cookies, and does not run analytics that identify you. If that changes, this notice will be updated and consent requested where required.</p>

        <h2 className={h}>Service providers</h2>
        <p className={p}>The site is hosted by Vercel. If the contact form is connected to a form-handling service, your message passes through that provider before reaching my inbox. These providers process data on my behalf and may store it outside the UK under appropriate safeguards.</p>

        <h2 className={h}>How long I keep it</h2>
        <p className={p}>Enquiries that don’t lead to work are deleted within 12 months. Records relating to client work are kept for as long as needed for legal and accounting purposes.</p>

        <h2 className={h}>Your rights</h2>
        <p className={p}>Under UK GDPR you can ask to access, correct or delete your personal data, or object to how it is used. Email me and I’ll respond within one month. You can also complain to the Information Commissioner’s Office (ico.org.uk).</p>
      </div></main>
      <Footer />
    </>
  );
}
