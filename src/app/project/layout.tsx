import Footer from '@/components/Footer';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  // Since this is a server component, we'll let the page components
  // handle their own project data and navigation
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
