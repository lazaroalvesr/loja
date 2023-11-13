import Templeate from "../lib/TempleateProdutos";
import TitleTempleate from "../lib/TitleTempleate";

export default function TempleateProduto() {
    return (
        <div className="lg:max-w-6xl m-auto ml-12 lg:ml-32 mt-12">
            <TitleTempleate title="Destaques" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-40 mt-12">
                <Templeate
                    img="/img/camisa_1_bg.png"
                    href="https://www.amazon.com.br/dp/B0BTHS6827/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0BTHS6827&pd_rd_w=CyfnF&content-id=amzn1.sym.dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_p=dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_r=QGEQVZBPWW3S3BZMWB8C&pd_rd_wg=nigW5&pd_rd_r=38e6dc37-03d7-40e0-9a32-fa9501941cce&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
                    alt="Blusa vermelha"
                    descricaoBtn="Amazon"
                    imgIcon="/img/amazon_icon.png"
                />

                <Templeate
                    img="/img/camisa_1_bg.png"
                    href="https://www.amazon.com.br/dp/B0BTHS6827/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0BTHS6827&pd_rd_w=CyfnF&content-id=amzn1.sym.dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_p=dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_r=QGEQVZBPWW3S3BZMWB8C&pd_rd_wg=nigW5&pd_rd_r=38e6dc37-03d7-40e0-9a32-fa9501941cce&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
                    alt="Blusa vermelha"
                    descricaoBtn="Amazon"
                    imgIcon="/img/amazon_icon.png"
                />

                <Templeate
                    img="/img/camisa_1_bg.png"
                    href="https://www.amazon.com.br/dp/B0BTHS6827/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0BTHS6827&pd_rd_w=CyfnF&content-id=amzn1.sym.dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_p=dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_r=QGEQVZBPWW3S3BZMWB8C&pd_rd_wg=nigW5&pd_rd_r=38e6dc37-03d7-40e0-9a32-fa9501941cce&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
                    alt="Blusa vermelha"
                    descricaoBtn="Amazon"
                    imgIcon="/img/amazon_icon.png"
                />

                <Templeate
                    img="/img/camisa_1_bg.png"
                    href="https://www.amazon.com.br/dp/B0BTHS6827/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0BTHS6827&pd_rd_w=CyfnF&content-id=amzn1.sym.dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_p=dd14805d-2347-4e14-a8a3-4a68eee2b6c8&pf_rd_r=QGEQVZBPWW3S3BZMWB8C&pd_rd_wg=nigW5&pd_rd_r=38e6dc37-03d7-40e0-9a32-fa9501941cce&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
                    alt="Blusa vermelha"
                    descricaoBtn="Amazon"
                    imgIcon="/img/amazon_icon.png"
                />
            </div>
        </div>
    )
}