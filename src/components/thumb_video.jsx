
function Thumb(thumb, icon, title, user, visu, time) {
    return (
    <div className="font-semibold text-[18px] relative ml-[0.30rem]">
        <div className="grid mr-[0.50rem]">
            <img src={thumb} className="2xl:w-[21rem] md:w-[29rem] rounded-md hover:cursor-pointer"/>
            <div className="w-[21rem] max-h-20 mt-2 flex">
                <img src={icon} className="xl:w-[2.3rem] xl:h-[2.3rem] md:w-[1.9rem] md:h-[1.9rem] rounded-full mr-3 hover:cursor-pointer"/>
                    <div>
                        <div className="w-[17rem] text-wrap hover:cursor-pointer">{title}</div>
                        <div className="text-[12px] text-white/65 hover:cursor-pointer">{user}</div>
                        <div className="text-[12px] text-white/65 hover:cursor-pointer">{visu} visualizações • há {time}</div>
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Thumb;