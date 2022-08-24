import Social from "../Social";
import social from "../../utils/social";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-4 gap-2 justify-end sticky bottom-0 inset-x-0 bg-inherit p-4">
      <div className="grid col-span-3 md:grid-cols-5 gap-2">
        {social.map(social => (<Social
          link={social.link}
          name={social.name}
        />))}
      </div>
      <a className="col-span-1 md:col-span-1" href='https://ko-fi.com/B0B6DQ432' rel="noreferrer noopener" target='_blank'>
        <img className="h-10" src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com' />
      </a>
      <p className="col-span-4 md:col-span-4 text-right">site is powered by the energy supplied by several cups of coffee and a reservoir of spite</p>
    </div>
  )
}

export default Footer;