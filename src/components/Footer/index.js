import Social from "../Social";

const Footer = () => {
  return (
    <div className="flex gap-2 justify-end sticky bottom-0 inset-x-0 bg-inherit p-4">
      <Social />
      <a href='https://ko-fi.com/B0B6DQ432' rel="noreferrer" target='_blank'>
        <img className="h-10" src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com' />
      </a>
      <p>site is powered by the energy supplied by several cups of coffee and a reservoir of spite</p>
    </div>
  )
}

export default Footer;