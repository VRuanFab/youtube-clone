
function Categories() {

    const arrList = ["p-[0.3rem] pl-3 pr-3 w-fit text-[14px] font-medium bg-white/15 rounded-md mr-[15%] hover:cursor-pointer hover:bg-white/20"]

    return (
        <div className="flex mt-5">

            <div className={arrList[0]}>
                Tudo
            </div>

            <div className={arrList[0]}>
                Jogos
            </div>

            <div className={arrList[0]}>
                Música
            </div>

            <div className={arrList[0]}>
                Jogos
            </div>
        </div>
    );
}

export default Categories;