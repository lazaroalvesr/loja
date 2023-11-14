'use client';

import Image from "next/image";
import { useState } from 'react'
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignInButton, UserButton } from '@clerk/nextjs';
import Link from "next/link";

export default function Header() {
    const [ativo, setAtivo] = useState(false);

    function AtivaMenu() {
        setAtivo((ativo) => !ativo)
    }

    return (
        <div className="lg:max-w-6xl m-auto">
            <header className="flex lg:justify-around items-center">
                <Link href={'/'}>
                    <Image
                        src={'/img/logo.png'}
                        alt="ola"
                        width={110}
                        height={120}
                        className="ml-4 lg:ml-0"

                    />
                </Link>
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
              left-0 top-[90px]  ${ativo ? 'w-[390px] bg-[#e1e4e7]  md:w-full z-50 rounded-xl flex-col h-screen' : 'h-0 overflow-hidden'
                        }    lg:flex-row text-center lg:text-left lg-top-0 `}
                    >
                        <li className="p-2 cursor-pointer">
                            <Link href={'/Camisas'}>
                                Camisas
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer">
                            <Link href={'/Calcas'}>
                                Calças
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer">
                            <Link href={'/Relogios'}>
                                Relógios
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer">
                            <Link href={'/Sapatos'}>
                                Sapatos
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer">
                            <Link href={'/Acessorios'}>
                                Acessórios
                            </Link>
                        </li>
                        <li className="p-2 cursor-pointer">
                            <Link href={'/Beleza'}>
                                Beleza
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="ml-20 lg:ml-0 flex gap-2 items-center" >
                    <div className="cursor-pointer ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    <div >
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    <div className="ml-2">
                        <SignedOut>
                            <SignInButton mode="modal" >
                                <button
                                    className="border rounded-md border-gray-400 px-3 py-2">
                                    Login
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </div>
            </header >
        </div >
    )
}