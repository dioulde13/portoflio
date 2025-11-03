export default function Contact() {
  return (
    <section id="contact" className="w-11/12 md:w-3/4 my-12 text-center">
      <h3 className="text-2xl font-semibold text-primary mb-4">Contact</h3>

      <p className="text-gray-700 dark:text-gray-300">
        📧 Email :{" "}
        <a href="mailto:baldedioulde992@gmail.com" className="text-primary hover:underline">
          baldedioulde992@gmail.com
        </a>
      </p>

      <p className="mt-2 text-gray-700 dark:text-gray-300">
        📱 Téléphone : +224 620-50-31-10 / 662-60-91-80
      </p>

      <div className="mt-4 space-x-4">
        <a className="text-primary hover:underline" href="https://github.com/xxxxxxxx/" target="_blank">
          GitHub
        </a>
        <a className="text-primary hover:underline" href="https://www.linkedin.com/" target="_blank">
          LinkedIn
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mamadou Diouldé Baldé — Ingénieur Logiciel
      </p>
    </section>
  );
}
