import CirculoGrande from "./CirculoGrande"
import { FaMinus, FaPlus } from "react-icons/fa6"

const ComprarProduto = () => {

    return (
        <div className="w-1/2 py-4 flex-col self-center">
            <div className="flex h-4/6 items-center justify-evenly">
                <div className="flex flex-col items-center">
                    <span className="font-bold">Atual</span>
                    <span>R$ 0,00</span>
                </div>
                <div className="flex gap-2 items-center">
                    <CirculoGrande>
                        <FaMinus className="icon" />
                    </CirculoGrande>
                    <div className="border-[1px] w-[28px] h-[45px] flex items-center justify-center border-cor-principal">
                        <span className="text-cor-principal text-3xl">0</span>
                    </div>
                    <CirculoGrande>
                        <FaPlus className="icon" />
                    </CirculoGrande>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold">Acumulado</span>
                    <span>R$ 0,00</span>
                </div>
            </div>
        </div>
    )
}

export default ComprarProduto