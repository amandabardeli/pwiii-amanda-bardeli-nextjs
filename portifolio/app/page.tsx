import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Amanda Bardeli</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col relative text-white bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar />

        {/* Main cresce para ocupar o espaço */}
        <main className="flex-grow pt-24 px-6 max-w-5xl mx-auto">
          <section id="top" className="text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-violet-300">Amanda Bardeli</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
              Desenvolvedora em formação apaixonada por transformar ideias em código.
            </p>
            <a href="#projetos" className="mt-8 inline-block text-violet-400 hover:underline text-sm">
              Ver meus projetos ↓
            </a>
          </section>

          <section id="projetos" className="mb-20">
            <h2 className="text-3xl font-semibold text-center text-violet-300 mb-10">Projeto em Destaque</h2>

            <div className="bg-white/10 p-8 rounded-xl shadow-lg max-w-3xl mx-auto backdrop-blur-sm hover:shadow-violet-500/20 transition">
              <h3 className="text-2xl font-bold text-violet-200 mb-2">💇‍♀️ Malams Saloon</h3>
              <p className="text-gray-300 mb-4">
                Um sistema completo de agendamento para salões de beleza, com funcionalidades de login,
                cadastro, painel administrativo, e muito mais — feito com Laravel, Blade, Tailwind e MySQL.
              </p>

              <div className="mb-4 flex flex-wrap gap-2 text-sm text-violet-100">
                <span className="bg-white/20 px-2 py-1 rounded">Laravel</span>
                <span className="bg-white/20 px-2 py-1 rounded">Blade</span>
                <span className="bg-white/20 px-2 py-1 rounded">Tailwind CSS</span>
                <span className="bg-white/20 px-2 py-1 rounded">MySQL</span>
              </div>

              <a
                href="https://github.com/marianneoliveirxr/projeto_malams"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
              >
                Ver Projeto
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
