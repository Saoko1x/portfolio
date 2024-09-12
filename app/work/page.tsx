import type { Metadata } from 'next';
import Link from 'next/link';

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
        development. Here are a few highlights from my professional journey:
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href={'https://www.the-zen.dev/'} target="_blank">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">The Zen</h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          COO and Fullstack developer
        </p>
        <p>
          Joining The Zen was a pivotal moment in my career journey, where I
          embraced the challenge of driving business growth through strategic
          guidance and innovative solutions across a diverse array of projects.
          From the outset, I immersed myself in the dynamic landscape of
          blockchain technologies, leveraging my expertise to analyze market
          trends and evaluate blockchain platforms, thus ensuring optimal
          implementation strategies for our clients.
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
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href={'https://www.vrakka.com/es'} target="_blank">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">Vrakka</h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Developer
        </p>
        <p>
          Global digital platform that connects users to the wellness industry
          and rewards them in the process
        </p>
        <ul>
          <li>
            Developed a dashboard using React and Next.js for managing and
            uploading tasks within a mobile application focused on productivity
            and rewards tracking.
          </li>
          <li>
            Created a mobile application with React Native and Expo aimed at
            enhancing productivity and user analytics within companies,
            featuring course assignments, challenges, expense tracking, and more
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href={'https://bitafitness.vercel.app/'} target="_blank">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            Bita Fitness
          </h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Developer
        </p>
        <p>
          Gym in Chihuahua that offers a full membership 7 days a week, with the
          best technology and equipment for your workout.
        </p>
        <ul>
          <li>
            I developed a complete functional website for one of the biggest
            gyms in Chihuahua city, created with React and Next js focusing on
            the loading animations for a better user experience and higher
            retention of online customers.
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href={'https://www.hashcapital.io/'} target="_blank">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            Hash Capital
          </h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Developer
        </p>
        <p>
          Welcome to Hash Capital, your decentralized broker in the digital
          financial world. We pride ourselves in offering an innovative and
          transparent alternative to the traditional financial intermediation
          model. As a broker, we are committed to empowering our clients and
          democratizing access to financial markets.
        </p>
        <ul>
          <li>
            I developed a web application using React and Next.js, integrating
            libraries for connecting web wallets3 such as MetaMask and Phantom.
          </li>
          <li>
            I implemented custom smart contracts for the purchase of NFTs, which
            represented shares of a company. Each purchase assigned ownership
            percentages to buyers through a hierarchical tree-based distribution
            scheme, optimizing investor participation in the platform.
          </li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href={'https://www.mixhub.art/'} target="_blank">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">Mixhub</h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Developer and Founder
        </p>
        <p>
          Mixhub started as a revolutionary idea in the web3 boom with Solana. I
          created a platform with the idea of connecting artists with users,
          i.e. tokenizing music pieces to get a certain value on your favorite
          song.
        </p>
        <ul>
          <li>
            I developed the whole application with React and Next JS,
            integrating libraries for its connection with the web3 wallet,
            either metamask or phantom.
          </li>
          <li>
            I designed, built and launched an xNFT, that is, an executable NFT
            that plays your songs obtained in a fully customized player, created
            with React Native and web3 libraries.
          </li>
        </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link href={'https://www.meva-store.com/'} target="_blank">
          <h2 className="font-medium text-xl mb-1 tracking-tighter">
            Meva Store
          </h2>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack Developer
        </p>
        <p>
          Trendy products that bring everything for aromatherapy, home
          appliances, audio and video, personal care and much more, right to
          your fingertips with easy shopping.
        </p>
        <ul>
          <li>
            I worked with the Shopify platform, integrating components or
            sections in liquid for a greater UI/UX within the site.
          </li>
          <li>
            I built an automation to upload products for sale and have a control
            of tags, descriptions and optimized titles.
          </li>
        </ul>
      </div>

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
    </section>
  );
}
