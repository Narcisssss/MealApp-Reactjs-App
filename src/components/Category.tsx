import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Meal } from '../App';
import '../styles/Category.scss';
import Loader from './Loader';
import { MealSearched } from './Navigation';

interface Props {
    children?: React.ReactNode
    currentCategory: string
    getDataFromApi: (url: string) => Promise<any>
}

function Category(props: Props) {
    const { currentCategory, getDataFromApi, } = props
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [category, setCategory] = useState<Meal[]>([]);

    const  params  = useParams();
    console.log('paramaterii din category:', params);

    const getMealsFromCurrentCategory = async (categoryName: string) => {
        setIsLoading(true);
        const categoryClicked = await getDataFromApi(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`);
        setCategory(categoryClicked.meals);
        setIsLoading(false);
    }

    useEffect(() => {
        getMealsFromCurrentCategory(currentCategory);
    }, [])

    return (
        <div className="category-container">
            {
                category.map(meal => {
                    return (
                        isLoading ? <Loader /> : (
                            <Link to={meal.strMeal} className="meal-card" key={meal.idMeal}>
                                <h3>{meal.strMeal}</h3>
                                <img className='meal-thumbnail' src={meal.strMealThumb} style={{ width: 200, height: 200 }} alt="meal" />
                            </Link>
                        )
                    )
                })
            }
        </div>
    )
}

export default Category;