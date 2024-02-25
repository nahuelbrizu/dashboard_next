import { inter } from '@/app/ui/fonts';

export default function CustomersLayout({
     children,
   }: {
    children: React.ReactNode
}) {
    return <section className={`${inter.className}`}>{children}</section>
}