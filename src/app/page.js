import Login from "../components/Login";

// main landing page
export default function Home() {
  return (
    <main className="bg h-screen w-full relative">
      <div className="py-12">
        <Login />
      </div>
    </main>
  );
}
