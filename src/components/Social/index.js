const Social = (props) => {
  return (
    <div className="mobile-hide col-span-1 text-center">
          <a className="text-green" href={props.link} target="_blank" rel="noreferrer noopener">{props.name}</a>
    </div>
  )
}

export default Social;