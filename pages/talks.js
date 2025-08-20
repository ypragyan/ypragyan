import Head from "next/head";
import TalksHeader from "../components/talks/TalksHeader";
import YearTalks from "../components/talks/YearTalks";
import talks from "../data/talks";
import { constants} from "../data/constants";

export default function Talks() {
  return (
    <>
      <Head>
        <title>Talks | {constants.data}</title>
      </Head>
      <TalksHeader />
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        {talks.map(({ year, talks }, i) => (
          <YearTalks key={i} year={year} talks={talks} />
        ))}
      </div>
    </>
  );
}
