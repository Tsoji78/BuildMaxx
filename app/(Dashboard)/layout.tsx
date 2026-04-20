// app/(dashboard)/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

/*
  This layout wraps every page inside app/(dashboard)/.
  The (dashboard) folder name is a Next.js "route group" — the
  parentheses mean it does NOT create a URL segment, so your
  routes stay as /, /portfolio, /contact, etc.

  Rendering order for any page in this group:
    RootLayout (html/body/Providers)
      └── DashboardLayout (Header + main + Footer)
            └── PageTransition
                  └── page.tsx
*/
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}