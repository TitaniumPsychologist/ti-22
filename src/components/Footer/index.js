import Social from "../Social";

const Footer = () => {
  return (
    <div className="flex gap-2 justify-end sticky bottom-0 inset-x-0 bg-slate-900">
      <Social />
      <p>site is powered by the energy supplied by several cups of coffee and a reservoir of spite</p>
    </div>
  )
}

export default Footer;