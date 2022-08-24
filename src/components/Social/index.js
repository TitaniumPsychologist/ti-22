const Social = () => {
  return (
    <div>
      <ul className="flex gap-2">
        <li>
          <a className="text-green" href='https://archiveofourown.org/users/TitaniumPsychologist/profile' target="_blank" rel="noreferrer noopener">AO3 Profile</a>
        </li>
        <li>
          <a className="text-green" href='https://titaniumpsychologist.tumblr.com/' target="_blank" rel="noreferrer noopener">Tumblr</a>
        </li>
        <li>
          <a className="text-green" href='https://twitter.com/ti22psych' target='_blank' rel="noreferrer noopener">Twitter</a>
        </li>
        <li>
          <a className="text-green" href='https://www.reddit.com/user/titaniumPsychologist/' target='_blank' rel='noreferrer noopener'>Reddit
            {/* <img src={require(`../../assets/icons/Reddit_Lockup_OnDark.svg`).default} alt="Reddit logo" width={100}></img> */}
          </a>
        </li>
        <li>
          <a className="text-green" href='https://github.com/TitaniumPsychologist' target='_blank' rel='noreferrer noopener'>GitHub</a>
        </li>
      </ul>
    </div>
  )
}

export default Social;