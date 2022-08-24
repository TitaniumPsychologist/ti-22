const Sample = (props) => {
  return (
    <div className="p-3 rounded-lg text-white">
      <div className="p-2">
        <h2 className="font-bold text-center text-xl text-purple">
          <a href={props.link} target="_blank" rel="noreferrer noopener">{props.name}</a>
        </h2>
        {props.warning &&
          <p className="py-1"><strong>Warnings:</strong> {props.warning.map(warnings => (
            <span className="background-grey rounded-full px-2">!{warnings}!</span>
          ))}
          </p>}
        {props.genre &&
          <p className="py-1"><strong>Genre:</strong> {props.genre.map(genres => (
            <span className="background-dark rounded-full px-2">#{genres}</span>
          ))}
          </p>}
        {props.rating && <p className="py-1"><strong>Rating:</strong> {props.rating}</p>}
        <a className="bg-red-600 hover:bg-white rounded-full px-1 text-white hover:text-red-600" href={props.link} target="_blank" rel="noreferrer noopener">Read on AO3</a>
      </div>
      <div className="p-2 whitespace-pre-line h-48 overflow-auto" dangerouslySetInnerHTML={{ __html: props.summary }} />
    </div>
  )
}

export default Sample;