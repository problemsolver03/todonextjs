import Navbar from "@/components/Navbar";
import WrapperRedux from "@/components/WrapperRedux";

// utilising this layout file for a custom layout post login
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="bg-slate-100 min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <WrapperRedux>{children}</WrapperRedux>
    </section>
  );
}
