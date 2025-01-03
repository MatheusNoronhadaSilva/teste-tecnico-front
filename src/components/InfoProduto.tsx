import CirculoMedio from "./CirculoMedio"
import { HiOutlineSwitchVertical } from "react-icons/hi"

type TrocarOrdemProps = {
    onSwitch: () => void;
};

const InfoProduto: React.FunctionComponent<TrocarOrdemProps> = ({ onSwitch }) => {
    return(
        <div className="w-1/2 h-2/6 flex py-2 justify-between self-center text-[19px] items-center ">
        <CirculoMedio>
            <HiOutlineSwitchVertical className="icon cursor-pointer" onClick={onSwitch} />
        </CirculoMedio>
        <span>Camisa</span>
        <div>
            <span className="text-cor-principal font-bold">REF: </span>
            <span>100BMG69</span>
        </div>
        <div>
            <span className="text-cor-principal font-bold">R$ </span>
            <span>9.50</span>
        </div>
    </div>
    )
}

export default InfoProduto