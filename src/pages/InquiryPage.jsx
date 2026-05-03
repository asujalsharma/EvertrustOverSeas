import CTASection from '../components/CTASection'
import InquiryForm from '../components/InquiryForm'
import PageHero from '../components/PageHero'

export default function InquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Share your sourcing requirement and let’s build the right export solution."
        description="Use this inquiry form for bulk orders, private-label projects, and market-specific sourcing needs."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <div className="card-panel p-7">
                <h2 className="text-2xl font-semibold text-evergreen">What you can request</h2>
                <p className="mt-4 text-sm leading-7 text-ink/68">
                  Bulk product pricing, private-label opportunities, customized sourcing, packaging
                  preferences, and distribution partnerships.
                </p>
              </div>
              <div className="card-panel p-7">
                <h2 className="text-2xl font-semibold text-evergreen">Why buyers choose us</h2>
                <p className="mt-4 text-sm leading-7 text-ink/68">
                  We combine responsive communication, premium presentation, and trust-led sourcing
                  support for serious import and export conversations.
                </p>
              </div>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
