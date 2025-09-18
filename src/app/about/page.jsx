import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Committed to excellence in cold chain logistics."
        invert
      >
        <p>
          We are driven by our core values that ensure every delivery maintains the highest standards.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Reliability" invert>
            Our temperature-controlled fleet operates 24/7 to ensure your perishable goods
            arrive fresh and on time, every time.
          </GridListItem>
          <GridListItem title="Quality" invert>
            We maintain the strictest food safety standards and FDA compliance,
            with real-time monitoring throughout the entire cold chain.
          </GridListItem>
          <GridListItem title="Service" invert>
            Our experienced team provides personalized logistics solutions
            tailored to your specific refrigerated transportation needs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export const metadata = {
  title: 'About Us',
  description:
    'CargoFresh Logistics provides reliable temperature-controlled transportation solutions for perishable goods across Florida, ensuring freshness and quality from farm to table.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Reliable cold chain logistics across Florida">
        <p>
          To provide reliable, temperature-controlled transportation solutions for perishable goods
          across Florida, ensuring freshness and quality from farm to table.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            CargoFresh Logistics was founded with a mission to revolutionize refrigerated
            transportation in Florida. We recognized the critical need for reliable,
            temperature-controlled logistics that maintain the integrity of perishable goods
            throughout the supply chain.
          </p>
          <p>
            Our team brings decades of combined experience in food distribution, logistics
            management, and cold chain technology. We understand that maintaining proper
            temperatures isn&apos;t just about equipment—it&apos;s about trust, reliability, and
            ensuring your products reach their destination in perfect condition.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="500+" label="Successful deliveries" />
          <StatListItem value="25+" label="Satisfied clients" />
          <StatListItem value="99.8%" label="On-time delivery rate" />
        </StatList>
      </Container>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
