import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const ProdutoDemonstracao = () => {

    return(
        <div className="min-h-[61%] border-b-[3px] border-cor-principal relative w-full">
            <div className='absolute bottom-[40px] left-[20px] h-12 p-1 pr-2 w-12 bg-cor-principal rounded-full flex items-center justify-center'>
                <IoIosArrowBack className='icon'/>
            </div>
            <img src="https://api.forca-de-vendas.integrador.e-catalogos.net/images/2007/2007-1724344351045.jpg" alt="" className='h-full w-full object-contain' />
            <div className='absolute bottom-[40px] right-[20px] h-12 p-1 pl-2 w-12 bg-cor-principal rounded-full flex items-center justify-center'>
                <IoIosArrowForward className='icon'/>
            </div>
        </div>
    )
}

export default ProdutoDemonstracao