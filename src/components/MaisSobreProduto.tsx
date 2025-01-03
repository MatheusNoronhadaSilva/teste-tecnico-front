import { FaInfo } from 'react-icons/fa6';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import CirculoMedio from "./CirculoMedio"
import img from "../assets/img2.jpg"

const MaisSobreProduto = () => {

    return (
        <div className='w-[695px] min-h-[85px] border-b-[1px] self-center border-gray-300 flex-col items-center justify-center'>
            <div className="w-full h-[62px] flex items-center justify-center gap-5">
                <CirculoMedio>
                    <FaInfo className='icon' />
                </CirculoMedio>
                <CirculoMedio>
                    <FaSearch className='icon' />
                </CirculoMedio>
                <div className='h-full gap-2 items-center flex'>
                    <div className='border-[1px] h-[54px] w-14 border-cor-principal'>
                        <img src={img} alt="" className='h-full w-full object-contain' />
                    </div>
                    <div className='border-[1px] h-[54px] w-14 border-cor-principal'>
                        <img src={img} alt="" className='h-full w-full object-contain' />
                    </div>
                    <div className='border-[1px] h-[54px] w-14 border-cor-principal'>
                        <img src={img} alt="" className='h-full w-full object-contain' />
                    </div>
                </div>
                <CirculoMedio>
                    <FaShoppingCart className='icon' />
                </CirculoMedio>
            </div>
            <div className='flex w-full items-center justify-center'>
                <span className='text-gray-500 text-md'>Preços ilustrativos</span>
            </div>
        </div>
    )
}

export default MaisSobreProduto