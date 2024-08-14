import * as React from "react"
import Navigation from "./Navigation"
import Footer from "./Navigation/footer"

interface LayoutProps {
    active: string,
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ active, children }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
            <Navigation active={active} />
            <main className="">
                <div className="pt-28">
                    {children}
                </div>
            </main>
            </div>
            <Footer />
        </div>

    )
}

export default Layout
