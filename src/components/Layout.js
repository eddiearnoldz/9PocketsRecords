import NavBar from "./NavBar"
import Footer from "./Footer"
import { Children } from "react"

const Layout = ({children}) => {
return (
  <>
  <div className="flex flex-col h-screen">
  <NavBar/>
  <main className="flex-grow">
  {children}
  </main>
  <Footer/>
  </div>

  </>
)
}

export default Layout