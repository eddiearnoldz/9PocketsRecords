import SocialFollow from "./SocialMedia"

const Footer = () => {
  return (
    <>
    <footer className=" ">
        <div className="grid place-items-center h-screen static ">
        <ul>
            <div className="text-center text-sm flex ">
              <li><p>9 Pockets Records</p></li>
              <li><p>joey@9pockets.co.uk</p></li>
              <li><p>+44 7772703882</p></li>
              <li><a href="https://goo.gl/maps/mzCTwWnos4HjF3ap9"><p>📍 London Fields, E8 3SE</p></a></li>
              <li><SocialFollow/></li>
            </div>
            
        </ul>
      </div>
    </footer>
  
    
    </>
  )
}

export default Footer