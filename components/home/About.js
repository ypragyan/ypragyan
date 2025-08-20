export default function About({ aboutRef }) {
  return (
    <>
      <div className="flex justify-between mt-24" ref={aboutRef}>
        <div>
          <h2 className="text-4xl text-primary font-bold">About Us</h2>
          <div className="text-lg text-accent mt-12 md:mr-3 lg:mr-12">
            <p>
            Welcome to the South Windsor TSA Club! We are a passionate group of students dedicated to exploring the world of technology, science, and innovation.
            </p>
            <p className="mt-8">
            Our club focuses on fostering creativity, problem-solving, and teamwork. We participate in various competitions and events that challenge our skills and knowledge in areas such as coding, engineering, and entrepreneurship.
            </p>
            <p className="mt-8">
            With the guidance of experienced mentors and industry professionals, we strive to stay at the forefront of technological advancements and prepare ourselves for future careers in STEM fields.

            </p>
          </div>
        </div>
        <img
          src="/aboutim.jpg"
          alt="Illustration"
          height={1000}
          width={500}
          className="hidden lg:block"
        />
      </div>
    </>
  );
}
