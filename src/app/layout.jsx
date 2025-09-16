import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - CargoFresh Logistics',
    default: 'CargoFresh Logistics - Refrigerated Food Distribution Across Florida',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
