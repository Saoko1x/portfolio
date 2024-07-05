import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        I've had the privilege of contributing to a diverse array of projects
        that have not only sharpened my skills but also deepened my passion for
        front-end and blockchain development. Here are a few highlights from my
        professional journey:
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Freelancer
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Just me
        </p>
        <p>
          As a freelancer, I work with Next.js, React, React Native, Expo, and
          frontend technologies because I am passionate about creating perfect,
          revolutionary, innovative, and pixel-perfect designs. This dedication
          to excellence in design is a core component of my approach, ensuring
          that every project I undertake is both aesthetically pleasing and
          functionally superior.
        </p>
        <ul>
          <li>
            One of my most memorable projects as a freelancer was collaborating
            with a prominent e-commerce platform to revamp their user interface
            and enhance the overall user experience. By implementing
            cutting-edge design principles and leveraging the latest front-end
            technologies, I was able to deliver a visually striking, highly
            intuitive interface that significantly boosted user engagement and
            conversion rates.
          </li>
          <li>
            Additionally, my expertise in React Native enabled me to develop a
            groundbreaking mobile application for a leading healthcare provider,
            streamlining patient data management and enhancing the efficiency of
            medical professionals. This innovative solution not only optimized
            workflow processes but also improved patient outcomes, thus
            underscoring the transformative power of technology in the
            healthcare sector.
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">The Zen</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">COO</p>
        <p>
          Joining <a href="https://www.the-zen.dev/">The Zen</a> was a pivotal
          moment in my career journey, where I embraced the challenge of driving
          business growth through strategic guidance and innovative solutions
          across a diverse array of projects. From the outset, I immersed myself
          in the dynamic landscape of blockchain technologies, leveraging my
          expertise to analyze market trends and evaluate blockchain platforms,
          thus ensuring optimal implementation strategies for our clients.
        </p>
        <ul>
          <li>
            One of my proudest achievements at The Zen was orchestrating a
            remarkable 20% increase in client investment efficiency by
            spearheading the adoption of decentralized finance (DeFi) solutions.
            This transformative shift not only enhanced our clients' financial
            operations but also solidified our position as pioneers in
            harnessing the potential of blockchain technology.
          </li>
          <li>
            Moreover, my role extended beyond mere advisory as I delved into the
            burgeoning realm of non-fungible tokens (NFTs), devising innovative
            marketplace strategies that directly contributed to revenue growth
            for two of our esteemed clients within a mere six-month period. This
            hands-on approach underscored my commitment to delivering tangible,
            measurable results that directly impact our clients' bottom line.
          </li>
        </ul>
      </div>
    </section>
  );
}
