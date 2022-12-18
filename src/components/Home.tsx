import React from 'react'
import { Categories } from '../App';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import Loader from './Loader';

interface Props {
    isLoading: boolean
    children?: React.ReactNode
    categories: Categories[]
    setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}

// handle click category

function Home(props: Props) {
    const {
     categories, setCurrentCategory, isLoading
    } = props;

    return (
        isLoading ? <Loader /> : (
            <div className='home-container' >
                <div className='categories-container'>
                    {
                        categories.map(category => {
                            return (
                                <Link to={`/categories/${category.strCategory}`} className='category-card' key={category.idCategory}>
                                    <h3 className='category-title'>{category.strCategory}</h3>
                                    <img alt='category' className='category-thumb' src={category.strCategoryThumb} style={{ width: 250, height: 200 }}></img>
                                    <p>{category.strCategoryDescription.split(' ').length > 20 ? category.strCategoryDescription.split(' ').slice(0,20).join(' ') + '...' : category.strCategoryDescription}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div >
        )
    )
}

export default Home;