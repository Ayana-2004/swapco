import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that apply when you use SwapaPost.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated={SITE.lastUpdated}
      intro={
        <>
          These terms apply when you use the {SITE.name} app and website, operated by {SITE.legalEntity}.
          By creating an account, you agree to them.
        </>
      }
    >
      <Section title="1. What SwapaPost does">
        <p>
          {SITE.name} helps you swap your work location with a colleague in the same company and role who
          works at another branch, so both of you can request a transfer to each other&rsquo;s city.
        </p>
        <p>
          <strong>{SITE.name} is not a party to any transfer.</strong>{" "}
          We do not guarantee that a match will
          lead to a swap, and we have no influence over your employer. Every transfer request goes through
          your company&rsquo;s own HR process, and the decision is entirely your employer&rsquo;s.
        </p>
      </Section>

      <Section title="2. Who can use it">
        <ul>
          <li>You must be at least {SITE.minimumAge} years old.</li>
          <li>You must be currently employed at the company you list on your profile.</li>
          <li>You may hold only one account, and it must be in your own name.</li>
        </ul>
      </Section>

      <Section title="3. Your account">
        <p>
          Keep your profile accurate and up to date, especially your location, preferred location, company
          and job title, since matches depend on them. You are responsible for keeping your password safe and
          for everything that happens under your account.
        </p>
      </Section>

      <Section title="4. Office ID verification">
        <p>
          You agree to submit only your own genuine employee ID. We may reject a submission, ask you to
          verify again, or remove verification if we believe an ID is not genuine or does not match your
          profile.
        </p>
      </Section>

      <Section title="5. Swap requests and contact details">
        <p>
          When you accept a swap request, your contact details are shared with that person, and theirs with
          you. Use them only to discuss the swap. You must not:
        </p>
        <ul>
          <li>Harass, spam or threaten other users.</li>
          <li>Share another user&rsquo;s contact details with anyone else.</li>
          <li>Use {SITE.name} for recruitment, sales, marketing or any purpose other than finding a swap.</li>
          <li>Create fake profiles or impersonate anyone.</li>
          <li>Copy, scrape or collect data from the app.</li>
        </ul>
      </Section>

      <Section title="6. Suspension and closing your account">
        <p>
          You can ask us to delete your account at any time by emailing{" "}
          <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. We may suspend or close an account that breaks these
          terms, gives false information or puts other users at risk.
        </p>
      </Section>

      <Section title="7. Your content">
        <p>
          You keep ownership of the information and photos you add. You allow us to store and display them as
          needed to run {SITE.name}, as described in our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </Section>

      <Section title="8. Disclaimers">
        <p>
          {SITE.name} is provided &ldquo;as is&rdquo;. We verify office IDs to reduce fake profiles, but we
          cannot guarantee that every detail other users provide is accurate. Use your own judgement before
          acting on a match.
        </p>
      </Section>

      <Section title="9. Limitation of liability">
        <p>
          To the extent permitted by law, {SITE.legalEntity} is not liable for any indirect or consequential
          loss, or for any outcome of a transfer request, including a refusal by your employer.
        </p>
      </Section>

      <Section title="10. Governing law">
        <p>
          These terms are governed by the laws of {SITE.governingLaw}. Any dispute will be handled by the
          courts of {SITE.jurisdiction}.
        </p>
      </Section>

      <Section title="11. Changes to these terms">
        <p>
          We may update these terms. If the changes are significant, we will let you know in the app before
          they take effect. Continuing to use {SITE.name} after that means you accept the updated terms.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          Questions about these terms? Email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>{" "}
          or visit our <Link href="/contact">contact page</Link>.
        </p>
      </Section>
    </LegalPage>
  );
}
