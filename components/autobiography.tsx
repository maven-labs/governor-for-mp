"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const, delay },
  },
});

function Autobiography() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-sand overflow-hidden"
    >
      <div className="">
        <motion.div
          variants={fadeUp(0.26)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="py-16">
            <div className="container grid gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
              <div className="">
                <Image
                  src="/images/about-governor.avif"
                  alt="Abdul Rauf Sulemana — Governor — in a formal portrait"
                  width={1024}
                  height={768}
                  className="aspect-4/3 object-cover rounded-xl"
                />
              </div>
              <div className="">
                <h2 className="font-heading font-black text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-none uppercase">
                  Husband, father, community development advocate
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed">
                  <p>
                    Abdul Rauf Sulemana is a native of Kumbungu in the Kumbungu
                    District of Ghana. He completed his basic education in
                    Kumbungu and proceeded to Business Senior High School
                    (BISCO) for his secondary education. He then pursued a
                    Diploma in Procurement and Supply Chain Management at
                    Sunyani Polytechnic (now Sunyani Technical University).
                  </p>
                  <p>
                    He also holds a MSc in Procurement and Logistics Management
                    from the University of Professional Studies, Accra (UPSA),
                    BSc in Procurement and Logistics Management from Kwame
                    Nkrumah University of Science and Technology (KNUST)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="container grid gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
              <div className="">
                <h2 className="font-heading font-black text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-none uppercase">
                  Desire to make a <span className="text-gold">difference</span>
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed">
                  <p>
                    Governor served as the foundation President of the
                    Departmental Students Association for Purchasing and Supply.
                    He later contested for the position of SRC President and,
                    after a rigorous vetting process, emerged as the best
                    candidate, though he did not win the election.
                  </p>
                  <p>
                    Governor believes in servant leadership. Putting people
                    first, unlocking potential, ensuring equal opportunity, and
                    building habitable communities through effective governance.
                  </p>
                </div>
              </div>
              <div className="">
                <Image
                  src="/images/young-governor.avif"
                  alt="A younger Governor Sulemana during his student years"
                  width={1024}
                  height={768}
                  className="aspect-4/3 object-top object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="container grid gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
              <div className="">
                <Image
                  src="/images/campaign.avif"
                  alt="Governor on the campaign trail engaging with Kumbungu constituents"
                  width={1024}
                  height={768}
                  className="aspect-4/3 object-cover rounded-xl"
                />
              </div>
              <div className="">
                <h2 className="font-heading font-black text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-none uppercase">
                  The man for <span className="text-gold">the people</span>
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed">
                  <p className="">
                    As Member of Parliament for Kumbungu, Governor's vision is
                    to:
                  </p>
                  <ul className="space-y-1 list-disc pl-8">
                    <li>
                      {" "}
                      Build strong local and international partnerships that
                      benefit communities.
                    </li>
                    <li>
                      Create meaningful job opportunities for youth and empower
                      women through vocational training and startup support.
                    </li>
                    <li>
                      Improve education, sanitation, and healthcare access.
                    </li>
                    <li>
                      Establish processing plants to reduce post-harvest losses
                      in Kumbungu.
                    </li>
                    <li>
                      Promote “Youth in Agriculture” through a pre-school
                      agriculture program that trains young farmers, provides
                      fertilizers and seedlings, and builds practical farming
                      skills.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="container grid gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
              <div className="">
                <h2 className="font-heading font-black text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-none uppercase">
                  <span className="text-gold">The leader</span> of the people
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed">
                  <p>
                    Growing up in Kumbungu gave Governor a first-hand view of
                    the gap between what is promised to Ghanaians and what
                    actually reaches the North. While studying and working in
                    Accra and Kumasi, he watched peers from the south access
                    opportunities his community could only dream of — better
                    schools, better roads, better jobs.
                  </p>
                  <p>
                    Attending school in and working in the south, Governor
                    realised that his people back home lack the equal
                    opportunities promised to all Ghanaians. Education,
                    healthcare, clean water, and jobs that can sustain families
                    and communities are the pillars of a prosperous nation and
                    the North lags in all of these.
                  </p>
                </div>
              </div>
              <div className="">
                <Image
                  src="/images/market-campaign.avif"
                  alt="Governor speaking with traders at a local market in Kumbungu"
                  width={1024}
                  height={768}
                  className="aspect-4/3 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="container grid gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
              <div className="">
                <Image
                  src="/images/zamigu-youth.avif"
                  alt="Governor with youth supporters at a community gathering in Zamigu"
                  width={1024}
                  height={768}
                  className="aspect-4/3 object-cover rounded-xl"
                />
              </div>
              <div className="">
                <h2 className="font-heading font-black text-primary text-[clamp(2rem,4.5vw,3.5rem)] leading-none uppercase">
                  Building <span className="text-gold">the movement</span>
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed">
                  <p>
                    Abdul Rauf Sulemana's prominent presence in the Kumbungu
                    political landscape continues to inspire young party
                    faithful to work assiduously and selflessly for the NPP.
                    Presenting "Governor" as the candidate for 2028 is not just
                    a strategic choice—it is the clear path toward securing
                    victory for the NPP in Kumbungu.
                  </p>
                  <p>
                    Governor is urging all members of Kumbungu to join him in
                    this fight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Autobiography;
