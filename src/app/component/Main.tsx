import Slide from './Slide';
import TempleateProduto from "./TempleateProdutos";

export default function Main() {
    return (
        <div>
            <div>
                <Slide />
            </div>
            <div className='-ml-28'>
                <TempleateProduto />
            </div>
        </div >
    )
}