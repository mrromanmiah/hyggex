import { FaPlus } from "react-icons/fa6";

const Publish = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 py-10">
                <button className="rounded-full px-5 py-6" style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
                    <img src="https://i.ibb.co/h7k89BR/logo.png" className="w-7" alt="logo" />
                </button>
                <div>
                    <h6 className="text-xs font-semibold">Published by</h6>
                    <h1 className="flex text-2xl text-[#06286E] font-semibold">Hygge<span className="font-extrabold text-[#06286E]">X</span></h1>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className='bg-gradient-to-b from-[#06286E] to-[#164EC0] rounded-full p-2 text-white text-2xl font-black'><FaPlus /></button>
                <h1 className="text-2xl font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">Create Flashcard</h1>
            </div>
        </div>
    );
};

export default Publish;