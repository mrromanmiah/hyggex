import { GoHome } from "react-icons/go";

const Breadcrumbs = () => {
    return (
        <div className="text-sm font-medium breadcrumbs mt-8">
            <ul>
                <li className="text-lg "><a><GoHome /></a></li>
                <li><a>Flashcard</a></li>
                <li><a>Mathematics</a></li>
                <li className="text-[#06286E] font-bold">Relation and Function</li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;