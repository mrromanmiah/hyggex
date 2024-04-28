
import { GoHome } from "react-icons/go";
import AllTabs from "../components/tabs/AllTabs";

const Home = () => {
    return (
        <div className="lg:px-20">
            <div className="text-sm font-medium breadcrumbs mt-8">
                <ul>
                    <li className="text-lg "><a><GoHome /></a></li>
                    <li><a>Flashcard</a></li>
                    <li><a>Mathematics</a></li>
                    <li className="text-[#06286E] font-bold">Relation and Function</li>
                </ul>
            </div>
            <div>
                <h1 className="text-3xl font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text mt-8">Relations and Functions ( Mathematics )</h1>
            </div>
            <div>
                <AllTabs></AllTabs>
            </div>
            <div>
                <div className="carousel w-full mt-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;