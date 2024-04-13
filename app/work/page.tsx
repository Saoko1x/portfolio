import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">The Zen</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">COO</p>
        <p>
          Joining <a href="hhttps://www.the-zen.dev/">The Zen</a> was a pivotal
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
