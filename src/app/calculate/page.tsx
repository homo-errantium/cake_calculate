'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Noto_Sans_Duployan } from 'next/font/google';



export default function Calculate() {
    const [isReset, setIsReset] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [currentItem, setCurrentItem] = useState<string>('Ед.')
    const [res, setRes] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)


    // открытие меню выбора
    const handleOpen = (boolean:boolean): void => {
        setIsOpen(!boolean);
    }

    // выбор единицы измерения
    const handleChoose = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        setCurrentItem((event.target as HTMLButtonElement).value);
        setIsOpen(true);
    };

    // сброс полей
    const resetForm = (): void => {
        // const resetButton = document.getElementById('resetButton');
        const allInput = document.querySelectorAll('input');
        allInput.forEach((input) => {
            input.value = '';
        });
        setWeight(1);
        setIsReset(true);
    };


    // итоговый расчет 
    const calculatePrice = (): void => {
        const weight = document.getElementById(
            'weight'
        ) as HTMLInputElement;
        const quantity = document.getElementById(
            'quantity'
        ) as HTMLInputElement;
        const price = document.getElementById('price') as HTMLInputElement;

        const quantityValue = +quantity?.value;
        const priceValue = +price?.value;
        const weightValue = +weight?.value;
        const result = +(
            Math.round((priceValue / quantityValue) * 100) / 100
        ).toFixed(2);
        if (weightValue > 0) {
            setWeight(weightValue);
            setRes(result * weightValue);
        } else setRes(result);
        setIsReset(false);
    };



    return (
        <div className=''>
            <form
                action=''
                noValidate
                method='get'
                className='group shadow rounded-md p-5 md:p-10 flex flex-col container mx-auto mt-8 bg-[#caa998] border-box relative'
            >
                <fieldset className='flex flex-col gap-8 justify-between w-11/12 mb-8'>
                    {/* количество товара */}

                    <label
                        htmlFor='quantity'
                        className='flex flex-col justify-between items-center border-b-2 pb-1  text-[#4d220e] sm:flex-row'
                    >
                        Введите количество товара:
                        <input
                            className='rounded-md p-2'
                            type='number'
                            name='quantity'
                            id='quantity'
                            required
                            placeholder={`${currentItem}`}
                        />
                    </label>

                    {/* стоимости товара */}
                    <label
                        htmlFor='price'
                        className='flex flex-col  justify-between items-center border-b-2 pb-1 text-[#4d220e] sm:flex-row'
                    >
                        Введите стоимость товара:
                        <input
                            className='rounded-md p-2'
                            type='number'
                            name='price'
                            id='price'
                            required
                            placeholder='Руб.'
                        />
                    </label>

                    <label
                        htmlFor='weight'
                        className='flex flex-col  justify-between  items-center border-b-2 pb-1 text-[#4d220e] sm:flex-row'
                    >
                        Введите расчитываемый вес:
                        <input
                            type='number'
                            name='weight'
                            id='weight'
                            className='rounded-md p-2'
                            placeholder='Необходимое количество'
                        />
                    </label>
                </fieldset>

                {/* единицы измерения    */}
                <div className='hidden md:flex flex-col bg-white absolute z-10 right-10 rounded-md p-2 w-12 '>
                    <span
                        className='text-center'
                        onClick={() => handleOpen(isOpen)}
                    >
                        {currentItem}
                    </span>

                    <div
                        className={clsx('flex flex-col', {
                            hidden: isOpen,
                        })}
                    >
                        <button
                            className='hovered: bg-grey py-[3px] border-b-2 border-t-2'
                            value='шт.'
                            type='button'
                            id='item'
                            onClick={(e) => handleChoose(e)}
                        >
                            шт.
                        </button>
                        <button
                            className='py-[3px] border-b-2'
                            value='кг'
                            type='button'
                            id='kilogramm'
                            onClick={(e) => handleChoose(e)}
                        >
                            кг
                        </button>
                        <button
                            className='py-[3px] border-b-2'
                            value='гр.'
                            type='button'
                            id='gramm'
                            onClick={(e) => handleChoose(e)}
                        >
                            гр.
                        </button>
                        <button
                            className='py-[3px] border-b-2'
                            value='л'
                            type='button'
                            id='liter'
                            onClick={(e) => handleChoose(e)}
                        >
                            л
                        </button>
                        <button
                            className='py-[3px] border-b-2'
                            value='мл'
                            type='button'
                            id='milliliter'
                            onClick={(e) => handleChoose(e)}
                        >
                            мл
                        </button>
                    </div>
                </div>

                {/* кнопка рассчета */}
                <button
                    className=' bg-white  rounded-md p-2 group-invalid:pointer-events-none group-invalid:opacity-30 mb-4'
                    id='calcButton'
                    type='submit'
                    onClick={(event) => {
                        event.preventDefault();
                        calculatePrice();
                    }}
                >
                    Рассчитать
                </button>

                {/* вывод рассчетов */}
                <div className=' bg-white  rounded-md p-2 w-full mb-4 border-1 border-solid h-20 border-l-amber-600'>
                    {isReset ? <span className='opacity-50'>Результат</span> : (
                        <span>
                            {` ${res} руб. за ${weight > 0 ? weight : 1}  
                                ${currentItem}`}
                        </span>
                    )}
                </div>

                <button
                    className=' bg-white  rounded-md p-2 '
                    type='reset'
                    id='resetButton'
                    onClick={(event) => {
                        event.preventDefault();
                        resetForm();
                    }}
                >
                    Сбросить
                </button>
            </form>
        </div>
    );
}
