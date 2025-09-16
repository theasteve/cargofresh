import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageTruck from '@/images/laptop.jpg'
import heroBackground from '@/images/hero-bg.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-blue-900 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by Florida's leading food distributors
          </h2>
          <div className="h-px flex-auto bg-blue-700" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Keeping Florida's food supply fresh and safe"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our temperature-controlled logistics ensure your perishable goods reach their destination fresh, 
          maintaining the cold chain from pickup to delivery across the entire state of Florida.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Reliable refrigerated transportation across Florida."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From fresh produce to frozen goods, we ensure your temperature-sensitive products 
          are transported safely and efficiently throughout the Sunshine State.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageTruck}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                alt="CargoFresh Logistics refrigerated truck on a Florida highway with palm trees in the background"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Refrigerated Transportation">
              Our modern fleet of temperature-controlled trucks maintains the cold chain 
              for fresh produce, dairy, meat, and frozen goods throughout Florida.
            </ListItem>
            <ListItem title="Temperature Monitoring">
              Real-time temperature tracking and monitoring systems ensure your products 
              stay within safe temperature ranges during the entire journey.
            </ListItem>
            <ListItem title="Statewide Coverage">
              From Miami to Jacksonville, Tampa to Orlando - we provide reliable 
              refrigerated logistics services across all major Florida markets.
            </ListItem>
            <ListItem title="Food Safety Compliance">
              Our operations meet all FDA and USDA requirements for food transportation, 
              with proper documentation and handling procedures for perishable goods.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'CargoFresh Logistics - Florida\'s premier refrigerated food distribution company. Temperature-controlled transportation keeping your products fresh statewide.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={heroBackground}
            alt="CargoFresh Logistics truck fleet"
            className="w-full h-full object-cover"
            priority
            fill
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <Container className="relative w-full py-24">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl">
              CargoFresh Logistics - Keeping Florida Fresh, One Delivery at a Time.
            </h1>
            <p className="mt-6 text-xl text-white/90">
              We specialize in refrigerated food distribution across Florida, providing 
              reliable temperature-controlled transportation solutions that ensure freshness 
              and quality from farm to table.
            </p>
          </FadeIn>
        </Container>
      </div>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Florida Farms', logo: logoPhobiaDark }}
      >
        CargoFresh has been our trusted logistics partner for over three years. 
        Their refrigerated trucks always maintain perfect temperatures, and our produce 
        arrives fresh every time. Reliable, professional, and always on schedule.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
