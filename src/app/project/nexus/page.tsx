import Image from 'next/image';

export default function NexusProject() {
  return (
    <main className="mx-auto max-w-screen-2xl px-[24px] lg:px-[60px]">
      <article className="mx-auto max-w-[640px] py-[96px]">
        <header className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">Nexus</h1>
          <p className="text-xl text-gray-600">Interactive learning platform for students</p>
        </header>

        <div className="mb-8">
          <Image
            src="/nori.png"
            alt="Nexus Project"
            width={640}
            height={400}
            className="rounded-lg"
          />
        </div>

        <section className="prose prose-lg">
          <h2>Overview</h2>
          <p>
            Nexus is an innovative learning platform designed to enhance student engagement and
            facilitate interactive learning experiences. The platform combines modern pedagogical
            approaches with cutting-edge technology to create an immersive educational environment.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Interactive learning modules</li>
            <li>Real-time collaboration tools</li>
            <li>Progress tracking and analytics</li>
            <li>Personalized learning paths</li>
          </ul>

          <h2>Technology Stack</h2>
          <p>
            Built using modern web technologies including React, Next.js, and real-time data
            synchronization to ensure a smooth and responsive learning experience.
          </p>
        </section>
      </article>
    </main>
  );
}
