import type { Metadata } from "next";
import LegalPage, { Section } from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How SwapaPost collects, uses, shares and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated={SITE.lastUpdated}
      intro={
        <>
          This policy explains what personal information {SITE.name} collects, why we collect it,
          who can see it, and the choices you have. {SITE.name} is operated by {SITE.legalEntity}{" "}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </>
      }
    >
      <Section title="1. Information we collect">
        <p><strong>Account details.</strong> Your name, email address, phone number, home town and password.</p>
        <p>
          <strong>Profile details.</strong> Your current location, preferred location, company name, job
          title and specialization. You can also choose to add a profile photo, a LinkedIn profile URL, a
          mobile number for swap partners, and your address.
        </p>
        <p>
          <strong>Office ID verification.</strong> A photo of your employee ID card. We read the text on the
          card to confirm your name, employee ID number and company.
        </p>
        <p>
          <strong>Activity.</strong> The swap requests you send, receive, accept or reject, the searches and
          filters you use to find matches, and whether you are currently active.
        </p>
        <p>
          <strong>Device and usage data.</strong> Basic technical information such as device type, app
          version and error logs, used to keep the service working. With your permission, the app uses your
          camera to scan your office ID and your camera or photos to add a profile photo.
        </p>
      </Section>

      <Section title="2. How we use your information">
        <ul>
          <li>To create and secure your account, including texting one-time verification codes to your phone.</li>
          <li>To find and recommend colleagues at other branches you could swap work locations with.</li>
          <li>To verify your office ID, using automated checks and manual review.</li>
          <li>To deliver swap requests and notify you when someone responds.</li>
          <li>To prevent fraud, fake profiles and misuse of the service.</li>
          <li>To respond to your support requests and improve {SITE.name}.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </Section>

      <Section title="3. What other users can see">
        <p>
          <strong>In recommendations,</strong> other users can see your name, profile photo, job title,
          company, preferred location and whether you are active.
        </p>
        <p>
          <strong>When you send a swap request,</strong> the recipient can see your name, job title, company
          and location before deciding whether to accept.
        </p>
        <p>
          <strong>After a swap request is accepted,</strong> both people can see each other&rsquo;s contact
          details: email address, mobile number and LinkedIn profile, if you have added one. If you leave the
          optional mobile number blank, your registered sign-up number is shared instead.
        </p>
        <p>Your office ID image and address are not shown to other users. Your ID image is seen only by our verification team.</p>
      </Section>

      <Section title="4. Who else we share it with">
        <ul>
          <li>
            <strong>Service providers</strong> who host our servers, send verification codes and help us
            run the app, only to the extent they need it to provide that service.
          </li>
          <li>
            <strong>Authorities,</strong> when required by law or to protect the safety and rights of our
            users.
          </li>
        </ul>
        <p>We never share your information with your employer.</p>
      </Section>

      <Section title="5. How long we keep it">
        <p>
          We keep your information while your account is active. To delete your account, email{" "}
          <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>. We will then delete or anonymise your
          personal information, except where we must keep some records to meet legal
          obligations or resolve disputes.
        </p>
      </Section>

      <Section title="6. Security">
        <p>
          We use reasonable technical and organisational measures to protect your information. No method of
          storage or transmission is completely secure, so we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="7. Your rights">
        <p>You can ask us to:</p>
        <ul>
          <li>Give you a summary of the personal information we hold about you.</li>
          <li>Correct or update inaccurate information. Most details can be edited in your profile.</li>
          <li>Delete your account and personal information.</li>
          <li>Withdraw consent you have given, for example for an optional field.</li>
        </ul>
        <p>
          To make a request, email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
        </p>
      </Section>

      <Section title="8. Age requirement">
        <p>
          {SITE.name} is for working professionals aged {SITE.minimumAge} or over. We do not knowingly
          collect information from anyone under {SITE.minimumAge}.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          If we make significant changes, we will update the date above and let you know in the app before
          they take effect.
        </p>
      </Section>

      <Section title="10. Grievance Officer and contact">
        <p>
          For questions or complaints about your personal information, contact our Grievance Officer at{" "}
          <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> or {SITE.phone}.
        </p>
        <p>
          {SITE.legalEntity}, {SITE.address}
        </p>
      </Section>
    </LegalPage>
  );
}
