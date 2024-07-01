import Navbar from "@/components/Navbar";
import WrapperRedux from "@/components/WrapperRedux";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav>
        <Navbar />
      </nav>
      <WrapperRedux>{children}</WrapperRedux>
    </section>
  );
}
