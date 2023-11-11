'use client';

import Image from "next/image";
import { useState } from 'react'

export default function Header() {
    const [ativo, setAtivo] = useState(false);

    function AtivaMenu() {
        setAtivo((ativo) => !ativo)
    }

    return (
        <div className="lg:max-w-6xl m-auto">
            <header className="flex lg:justify-around items-center">
                <Image
                    src={'/img/logo.png'}
                    alt="ola"
                    width={110}
                    height={120}
                    className="ml-4 lg:ml-0"

                />
                <nav className="flex">
                    <button
                        className={` lg:hidden absolute  ${ativo ? 'right-0' : 'right-0'
                            } top-12 z-50`}
                        onClick={(e) => {
                            e.stopPropagation();
                            AtivaMenu();
                        }}
                    >
                        <span className={`hamburguer   ${ativo ? 'ativo' : ''} z-50 right-6`}></span>
                    </button>
                    <ul className={` flex gap-4 absolute transition-all lg:static lg:h-auto 
              right-0 m-auto items-center justify-center 
              left-0 top-[90px]  ${ativo ? 'w-[390px] bg-white  md:w-full z-50 rounded-xl flex-col' : 'h-0 overflow-hidden'
                        }    lg:flex-row text-center lg:text-left lg-top-0 `}
                    >
                        <li className="p-2 cursor-pointer">Camisas</li>
                        <li className="p-2 cursor-pointer">Calças</li>
                        <li className="p-2 cursor-pointer">Relógios</li>
                        <li className="p-2 cursor-pointer">Sapatos</li>
                        <li className="p-2 cursor-pointer">Acessórios</li>
                        <li className="p-2 cursor-pointer">Beleza</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}