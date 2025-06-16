export default function Footer() {
  return (
    <footer
      id="contato"
      className="w-full bg-black/80 backdrop-blur-md text-violet-300 text-center py-4 text-lg font-semibold shadow-lg"
      style={{ borderTop: '4px solid #9f7aea' }}
    >
      <p>
        Contato:{" "}
        <a
          href="mailto:amanda.bardeli@gmail.com"
          className="underline hover:text-violet-400 transition"
        >
          amanda.bardeli@gmail.com
        </a>
      </p>
    </footer>
  );
}
