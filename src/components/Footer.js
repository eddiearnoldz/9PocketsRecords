import SocialFollow from "./SocialMedia"

const Footer = () => {
  return (
    <>
    <div className="md:flex bottom-10 fixed justify-center items-center text-white inset-x-0 space-x-5">
      <p>9Pockets</p>
      <p>joey@9pockets.co.uk</p>
      <p>+44 7772703882 </p>
      <p>📍 London Fields, E8 3SE</p>
      <SocialFollow/>
    </div>
    </>
    
  )
}

export default Footer