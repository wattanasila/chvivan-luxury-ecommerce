import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="h-screen bg-white text-black flex items-center justify-center">
          <h1 className="text-4xl font-serif">Welcome to chvivan</h1>
        </section>
      </main>
    </>
  );
}