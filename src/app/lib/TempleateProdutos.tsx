import Image from "next/image";
import Link from "next/link";
import TempleateProdutoProps from "../Interfaces/Produtos";

export default function Templeate({ href, img, imgIcon, alt, descricaoBtn }: TempleateProdutoProps) {
    return (
        <div className="">
            <div className="">
                <div className="
                 lg:w-80 h-[390px] w-72 border-2
                 border-gray-800 rounded-md">
                    <div className="bg-gray-300">
                        <Image
                            src={img}
                            alt={alt}
                            width={250}
                            height={120}
                            className="m-auto pt-3"
                        />
                    </div>
                    <div>
                        <Link href={href}>
                            <button className="mt-3 w-32
                            border-2 border-gray-800 ml-24
                            pt-1 rounded-md flex items-center pl-2">
                                <Image
                                    src={imgIcon}
                                    alt="ola"
                                    width={28}
                                    height={12}
                                />
                                {descricaoBtn}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}