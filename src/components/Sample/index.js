const Sample = (props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{props.name}</h2>
      <a href={props.link} target="_blank" rel="noreferrer noopener">Link To Fic</a>
    </div>
  )
}

export default Sample;