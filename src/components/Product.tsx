import React, { useEffect, useState } from 'react'
import { MealSearched } from './Navigation';
import '../styles/Product.scss';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

interface Props {
    product: MealSearched;
    getDataFromApi: (url: string) => Promise<any>;
    setProduct: React.Dispatch<React.SetStateAction<MealSearched>>;
}

function Product({ product, getDataFromApi, setProduct }: Props) {

    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const params = useParams();
    console.log('params from product:', params);

    const getProductInfo = async () => {
        setIsLoading(true);
        const data = await getDataFromApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.productId}`);
        setProduct(data.meals[0]);
        setIsLoading(false);
    }

    useEffect(() => {
        getProductInfo();
    },[params.productId]);

    return (
        isLoading ? <Loader /> : (
            <div className="product-container">
                <div className="product-card">
                    <h2>{product.strMeal}</h2>
                    <p className='product-p'><span className='product-subtitle'>Category:</span> {product.strCategory}</p>
                    {product.strArea && <p className="product-p"><span className='product-subtitle'>Area:</span> {product.strArea}</p>}
                    <div className="product-img-container">
                        <img src={product.strMealThumb} className="product-img" alt="product" />
                    </div>
                    <p className="product-p"><span className="product-subtitle">Ingredients: </span>
                        {product.strIngredient1 && `${product.strIngredient1}`}{product.strMeasure1 && ` ${product.strMeasure1}`}
                        {product.strIngredient2 && `${", " + product.strIngredient2}`}{product.strMeasure2 && ` ${product.strMeasure2}`}
                        {product.strIngredient3 && `${", " + product.strIngredient3}`}{product.strMeasure3 && ` ${product.strMeasure3}`}
                        {product.strIngredient4 && `${", " + product.strIngredient4}`}{product.strMeasure4 && ` ${product.strMeasure4}`}
                        {product.strIngredient5 && `${", " + product.strIngredient5}`}{product.strMeasure5 && ` ${product.strMeasure5}`}
                        {product.strIngredient6 && `${", " + product.strIngredient6}`}{product.strMeasure6 && ` ${product.strMeasure6}`}
                        {product.strIngredient7 && `${", " + product.strIngredient7}`}{product.strMeasure7 && ` ${product.strMeasure7}`}
                        {product.strIngredient8 && `${", " + product.strIngredient8}`}{product.strMeasure8 && ` ${product.strMeasure8}`}
                        {product.strIngredient9 && `${", " + product.strIngredient9}`}{product.strMeasure9 && ` ${product.strMeasure9}`}
                        {product.strIngredient10 && `${", " + product.strIngredient10}`}{product.strMeasure10 && ` ${product.strMeasure10}`}
                        {product.strIngredient11 && `${", " + product.strIngredient11}`}{product.strMeasure11 && ` ${product.strMeasure11}`}
                        {product.strIngredient12 && `${", " + product.strIngredient12}`}{product.strMeasure12 && ` ${product.strMeasure12}`}
                        {product.strIngredient13 && `${", " + product.strIngredient13}`}{product.strMeasure13 && ` ${product.strMeasure13}`}
                        {product.strIngredient14 && `${", " + product.strIngredient14}`}{product.strMeasure14 && ` ${product.strMeasure14}`}
                        {product.strIngredient15 && `${", " + product.strIngredient15}`}{product.strMeasure15 && ` ${product.strMeasure15}`}
                        {product.strIngredient16 && `${", " + product.strIngredient16}`}{product.strMeasure16 && ` ${product.strMeasure16}`}
                        {product.strIngredient17 && `${", " + product.strIngredient17}`}{product.strMeasure17 && ` ${product.strMeasure17}`}
                        {product.strIngredient18 && `${", " + product.strIngredient18}`}{product.strMeasure18 && ` ${product.strMeasure18}`}
                        {product.strIngredient19 && `${", " + product.strIngredient19}`}{product.strMeasure19 && ` ${product.strMeasure19}`}
                        {product.strIngredient20 && `${", " + product.strIngredient20}`}{product.strMeasure20 && ` ${product.strMeasure20}`}
                    </p>
                    <p className="product-p"><span className='product-subtitle'>Instructions: </span> {product.strInstructions}</p>
                    <div className="product-video">
                        <iframe src={`${product.strYoutube?.slice(0, 24) + 'embed/' + product.strYoutube?.slice(30)}`} width="100%" height="300" allowFullScreen name={product.strMeal} />
                        <a href={product.strYoutube}>Click here to see the video</a>
                    </div>
                </div>
            </div>
        )
    )
}

export default Product
