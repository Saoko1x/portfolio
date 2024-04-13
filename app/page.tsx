import Image from 'next/image';
import coding from 'public/images/home/coding.jpeg';
import coding2 from 'public/images/home/coding2.jpg';
import me from 'public/images/home/me.jpeg';
import meandnathan from 'public/images/home/meandnathan.jpeg';
import meandnathan2 from 'public/images/home/meandnathan2.jpg';
import methezen from 'public/images/home/methezen.jpeg';
import mecelebrating from 'public/images/home/mecelebrating.jpeg';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hi, i'm jorge 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a software engineer based in Chihuahua Mexico. I'm passionate about
        blockchain, web3, and cryptocurrency. I'm currently CTO at{' '}
        <span className="not-prose">
          <Badge href="https://www.the-zen.dev/">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="The Zen logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            The Zen
          </Badge>
        </span>
        , where I help build the future of work.
      </p>

      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={meandnathan2}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={mecelebrating}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={me}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={meandnathan}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={methezen}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={coding}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
