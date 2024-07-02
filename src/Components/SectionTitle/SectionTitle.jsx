

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mb-5 mt-32">
            <p className="text-yellow-600 text-xl font-semibold mb-3">{subHeading}</p>
            <h3 className="text-5xl   font-bold   text-rose-500 border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;