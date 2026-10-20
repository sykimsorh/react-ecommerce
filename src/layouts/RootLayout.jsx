import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Footer from "../components/Footer"


function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <TopBar />
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
        <Footer />
    </div>
  )
}

export default RootLayout
