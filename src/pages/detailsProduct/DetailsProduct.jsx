import { drawings } from "../../service/Data.json";
import { useParams } from 'react-router-dom';
import './Module.scss'

export const DetailsProduct = () => {
    const { id } = useParams();

    const product = drawings.find((drawings) => drawings.id === parseInt(id));

    console.log('soy los detalles:', product);

    return(
        <>
        soy el detalle
        </>
    )
}