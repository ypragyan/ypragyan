import PageHeader from "../components/PageHeader";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import members from "../data/members.json";
import PersonCard from "../components/PersonCard";
import Head from "next/head";
import { constants} from "../data/constants";

export default function Members() {
  return (
    <>
      <Head>
        <title>Members | {constants.data}</title>
      </Head>
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <PageHeader
          title="Members"
          description="South Windsor TSA Club's members form an exceptional team of technology enthusiasts, with skills ranging from software development and programming to design and innovation."
        />
        {members.map((cls) => (
          <>
            {/* <HeadingWithIllustration title={cls.year} /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {cls.members.map(({ name, role }) => (
                <PersonCard key={name} name={name} role={role} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
