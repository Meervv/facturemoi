import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Navfooter = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full">
            </main>
            <Footer />
        </div>
    )
}

export default Navfooter;