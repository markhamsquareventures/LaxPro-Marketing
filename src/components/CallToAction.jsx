import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export function CallToAction() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#171717" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            Level up in under 30 minutes a day
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our waitlist and learn when you can join LaxPro!
          </p>
          <div className="mt-8 flex justify-center">
            {/* <AppStoreLink color="gray-900" /> */}
            <form
              className="flex w-full justify-center md:w-auto"
              method="POST"
              action="https://forms.reform.app/headless/1e147r/laxpro-waitlist/xpdyfq/submissions"
            >
              <TextField
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                id="d2609405-bf29-4772-ba08-1c33417c4613"
                name="answers[d2609405-bf29-4772-ba08-1c33417c4613]"
                required
                autoComplete="email"
                className="w-60 min-w-0 shrink"
              />
              <Button type="submit" color="gray" className="ml-4 flex-none">
                <span className="hidden lg:inline">Join our waitlist</span>
                <span className="lg:hidden">Join waitlist</span>
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

