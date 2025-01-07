export default function About() {
  return (
    <div className="flex flex-col">
      <div className="p-6">
        <h4 className="text-[var(--text-90)]">About</h4>
      </div>
      <div className="flex flex-col gap-6 border-t border-[var(--border)] p-6">
        <p className="text-[17px] text-[var(--text-60)]">
          Hello! I&apos;m Eric, a designer and engineer. Currently pursuing an MSE in Computer
          Science at Penn, I graduated from the University of Pennsylvania in August 2022, where I
          studied International Relations and Computer Science. My research interests lie in
          human-computer interaction, specifically in developing tools that enhance creativity and
          improve the way we learn and understand.
        </p>
        <p className="text-[17px] text-[var(--text-60)]">
          When it comes to design, I&apos;ve worn many hats - from 0 to 1 blue sky projects, to
          tweaking interactions, to establishing design systems. I enjoy breaking down complex
          systemic problems and solving it from the elemental level.
        </p>
        <p className="text-[17px] text-[var(--text-60)]">
          I believe that interface are the most important layer between us and the systems we use as
          tools. I hope to develop an eye for detail, craft as a designer, and experiment with new
          interaction concepts to create useful and impactful experiences that can help us think and
          create better.
        </p>
      </div>
      <div className="flex flex-col gap-x-8 gap-y-12 border-t border-[var(--border)] p-6 sm:flex-row">
        <h4 className="text-[var(--text-40)] sm:w-1/3">Experience</h4>
        <div className="flex flex-col gap-8 sm:w-2/3">
          <div>
            <p className="text-[17px]">Product Designer</p>
            <p className="text-[17px] text-[var(--text-60)]">Konrad, 2023</p>
          </div>
          <div>
            <p className="text-[17px]">Associate Consultant Intern</p>
            <p className="text-[17px] text-[var(--text-60)]">Adobe, 2021</p>
          </div>
          <div>
            <p className="text-[17px]">Business Analyst Intern</p>
            <p className="text-[17px] text-[var(--text-60)]">ZeroEyes, 2020</p>
          </div>
          <div>
            <p className="text-[17px]">Foreign Commercial Service Intern</p>
            <p className="text-[17px] text-[var(--text-60)]">U.S. Consulate Guangzhou, 2019</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-x-8 gap-y-12 border-t border-[var(--border)] p-6 sm:flex-row">
        <h4 className="text-[var(--text-40)] sm:w-1/3">Projects and Awards</h4>
        <div className="flex flex-col gap-8 sm:w-2/3">
          <div>
            <p className="text-[17px]">University of Pennsylvania</p>
            <p className="text-[17px] text-[var(--text-60)]">Holden Furber Thesis Prize 2022</p>
          </div>
          <div>
            <p className="text-[17px]">Penn Social Entrepreneurship Movement</p>
            <p className="text-[17px] text-[var(--text-60)]">President</p>
          </div>
          <div>
            <p className="text-[17px]">Penn Student Design</p>
            <p className="text-[17px] text-[var(--text-60)]">Product Designer</p>
          </div>
          <div>
            <p className="text-[17px]">Penn Spark</p>
            <p className="text-[17px] text-[var(--text-60)]">Product Designer</p>
          </div>
          <div>
            <p className="text-[17px]">The Wharton School</p>
            <p className="text-[17px] text-[var(--text-60)]">Marketing Department Researcher</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-x-8 gap-y-12 border-t border-[var(--border)] p-6 sm:flex-row">
        <h4 className="text-[var(--text-40)] sm:w-1/3">Education</h4>
        <div className="flex flex-col gap-8 sm:w-2/3">
          <div>
            <p className="text-[17px]">University of Pennsylvania</p>
            <p className="text-[17px] text-[var(--text-60)]">Master of Science in Engineering</p>
            <p className="text-[17px] text-[var(--text-60)]">Computer Science</p>
          </div>
          <div>
            <p className="text-[17px]">University of Pennsylvania</p>
            <p className="text-[17px] text-[var(--text-60)]">Bachelor of Arts</p>
            <p className="text-[17px] text-[var(--text-60)]">International Relations</p>
            <p className="text-[17px] text-[var(--text-60)]">Minor in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
}
