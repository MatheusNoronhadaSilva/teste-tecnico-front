import { FaEquals } from "react-icons/fa6"
import CirculoPequeno from "./CirculoPequeno"

const DisponibilidadeProduto = () => {

    return (
        <div className="h-full bg-cor-principal flex items-center justify-center w-full">
            <div className="w-1/2 h-full items-center self-center flex pt-3 justify-center gap-6">
                <div className="flex items-center w-12 h-[35px] relative rounded-lg justify-center bg-white">
                    <span className="text-cor-principal text-xl font-normal">1</span>
                    <div className="border-[1px] border-white bg-cor-principal rounded-full px-[10px] py-1 absolute top-[-20px] right-[-15px]">
                        <span className="text-white font-bold">G</span>
                    </div>
                </div>
                <div className="flex items-center w-12 h-[35px] relative rounded-lg justify-center bg-white">
                    <span className="text-cor-principal text-xl font-normal">1</span>
                    <div className="border-[1px] border-white bg-cor-principal rounded-full px-[10px] py-1 absolute top-[-20px] right-[-15px]">
                        <span className="text-white font-bold">GG</span>
                    </div>
                </div>
                <div className="flex items-center w-12 h-[35px] relative rounded-lg justify-center bg-white">
                    <span className="text-cor-principal text-xl font-normal">1</span>
                    <div className="border-[1px] border-white bg-cor-principal rounded-full px-[10px] py-1 absolute top-[-20px] right-[-15px]">
                        <span className="text-white font-bold">M</span>
                    </div>
                </div>
                <div className="flex items-center w-12 h-[35px] relative rounded-lg justify-center bg-white">
                    <span className="text-cor-principal text-xl font-normal">1</span>
                    <CirculoPequeno className="border-[1px] border-white bg-cor-principal px-[10px] py-1 absolute top-[-20px] right-[-15px]">
                        <span className="text-white font-bold">P</span>
                    </CirculoPequeno>
                </div>
                <FaEquals style={{color: 'white', height: '30px', width: '30px'}}/>
                <div className="flex items-center w-12 h-[35px] relative rounded-lg justify-center bg-white">
                    <span className="text-cor-principal text-xl font-normal">4</span>
                    <span className="absolute text-white font-medium top-[-20px] text-xs">PACK</span>
                </div>
            </div>
        </div>
    )
}

export default DisponibilidadeProduto