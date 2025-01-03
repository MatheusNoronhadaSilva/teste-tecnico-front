import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; // Importa a seta para a esquerda da biblioteca FontAwesome
import CirculoPequeno from './CirculoPequeno';

const Header = () => {

    return (
        <div className="w-full  flex bg-cor-principal items-center px-[20px] py-[8px] justify-between">
            <IoIosArrowBack style={{ height: 'auto', width: '30px', color: 'white' }} />
            <div className='h-full flex gap-2 items-center'>
                <CirculoPequeno  className="bg-white">
                    <IoIosArrowBack style={{ height: 'auto', width: '20px', color: '#809caa'}}/>
                </CirculoPequeno>
                <div className='bg-white max-w-[500px] max rounded-lg flex p-[3px] items-center justify-center'>
                    <span className='text-cor-principal font-bold text-lg text-nowrap'>(2) ABAJURES</span>
                </div>
                <CirculoPequeno className='bg-white'>
                    <IoIosArrowForward style={{ height: 'auto', width: '20px', color: '#809caa'}}/>
                </CirculoPequeno>
            </div>
            <CirculoPequeno className='bg-white'>
                <span className='text-cor-principal font-bold text-xl'>F</span>
            </CirculoPequeno>
        </div>
    )
}

export default Header