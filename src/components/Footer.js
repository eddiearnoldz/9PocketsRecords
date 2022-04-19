import SocialFollow from "./SocialMedia"

const Footer = () => {
  
  return (
    <>
      <footer className="static content-center">
          <ul>
              <div className="place-content-center text-sm md:flex block ">
                <li className="px-2"><p>9 Pockets Records</p></li>
                <li className="px-2"><p>joey@9pockets.co.uk</p></li>
                <li className="px-2"><p>+44 7772703882</p></li>
                <li className="px-2"><a href="https://goo.gl/maps/mzCTwWnos4HjF3ap9"><p>📍 London Fields, E8 3SE</p></a></li>
                <li className="px-2"><SocialFollow/></li>
              </div>
          </ul>
      </footer>
    </>
  )
}

export default Footer