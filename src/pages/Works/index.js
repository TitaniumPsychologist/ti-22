// import component
import Sample from "../../components/Sample";
import works from "../../utils/works";

const Works = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Works</h1>
      <p>Please heed all warnings and tags prior to reading. Full warnings and summary found on work posted on Ao3.</p>
      <section
        // className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
        {works.map(sample => (
        <Sample
          name={sample.name}
          link={sample.link}
          // summary={sample.summary}
          genre={sample.genre}
          warning={sample.warning}
          rating={sample.rating}
        />
      ))}
      </section>
    </main>
  )
}

export default Works;