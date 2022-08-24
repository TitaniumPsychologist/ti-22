const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="w-3/4">
        <p className="py-2">Hobbyist writer since around 2004, most of it in the form of fanfiction.</p>
        <p className="py-2">Why am I calling myself TitaniumPsychologist? Well, one day I was studying from one of my psychology textbooks in the kitchen, looked over at one of my titanium pots, and thought to myself, "Yes. That."</p>
        <p className="py-2">Fandoms that I have written fanfiction for include:
        </p>
        <ul className="list-disc">
          <li>
            Avatar: the Last Airbender, from Nickelodeon
          </li>
          <li>Frozen, from Disney</li>
          <li>Detroit: Become Human, from Quantic Dream</li>
        </ul>
        <p className="py-2">However, due to complications, I've since ditched my old account and pseudonym and am now posting stuff under the TitaniumPsychologist moniker.</p>
      </div>
    </div>
  )
}

export default About;