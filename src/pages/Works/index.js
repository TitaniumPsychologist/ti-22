// import component
import Sample from "../../components/Sample";

const workStuff = [
  {
    name: "Duality of Light",
    link: "https://archiveofourown.org/works/37467820"
  },
  {
    name: "Gavin and Hank's After-Midnight Sanity Tour 2038",
    link: "https://archiveofourown.org/works/38637018"
  },
  {
    name: "Nothing",
    link: "https://archiveofourown.org/works/38421364"
  }
]

const Works = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Works</h1>
      <Sample name={workStuff[0].name} link={workStuff[0].link}/>
      <Sample name={workStuff[1].name} link={workStuff[1].link}/>
      <Sample name={workStuff[2].name} link={workStuff[2].link}/>
    </main>
  )
}

export default Works;