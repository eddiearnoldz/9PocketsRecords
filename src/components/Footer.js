import SocialFollow from "./SocialMedia"

const Footer = () => {
  return (
    <>
  <footer className="flex  text-center">
    <ul className="md:flex flex-wrap fixed md:justify-center items-center text-white inset-x-0 space-x-5 bottom-8">
        <li><p>9 Pockets Records</p></li>
        <li><p>joey@9pockets.co.uk</p></li>
        <li><p>+44 7772703882</p></li>
        <li><a href="https://goo.gl/maps/mzCTwWnos4HjF3ap9"><p>📍 London Fields, E8 3SE</p></a></li>
        <li><SocialFollow/></li>
    </ul>
</footer>
    
    </>
  )
}

export default Footer