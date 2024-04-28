

const Faq = () => {
    return (
        <div className="mx-40">
            <h1 className="text-4xl font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text mt-20 mb-10 flex items-center justify-center text-center mx-auto">FAQ</h1>

            <div className="collapse collapse-arrow border border-[#06286E] mb-6">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-lg font-semibold text-black px-6">
                    Can education flashcards be used for all age groups?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border border-[#06286E] mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-semibold text-black">
                    How do education flashcards work?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border border-[#06286E] mb-6">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-lg font-semibold text-black">
                    Can education flashcards be used for test preparation?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;