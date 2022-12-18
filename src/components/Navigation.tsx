import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.scss';

export const debounceFunction = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any) => {
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

export interface MealSearched {
    idMeal: string
    strMeal: string
    strCategory: string
    dateModified?: string
    strArea?: string
    strCreativeCommonsConfirmed?: string
    strDrinkAlternate?: string
    strImageSource?: string
    strIngredient1?: string
    strIngredient2?: string
    strIngredient3?: string
    strIngredient4?: string
    strIngredient5?: string
    strIngredient6?: string
    strIngredient7?: string
    strIngredient8?: string
    strIngredient9?: string
    strIngredient10?: string
    strIngredient11?: string
    strIngredient12?: string
    strIngredient13?: string
    strIngredient14?: string
    strIngredient15?: string
    strIngredient16?: string
    strIngredient17?: string
    strIngredient18?: string
    strIngredient19?: string
    strIngredient20?: string
    strInstructions?: string
    strMealThumb?: string
    strMeasure1?: string
    strMeasure2?: string
    strMeasure3?: string
    strMeasure4?: string
    strMeasure5?: string
    strMeasure6?: string
    strMeasure7?: string
    strMeasure8?: string
    strMeasure9?: string
    strMeasure10?: string
    strMeasure11?: string
    strMeasure12?: string
    strMeasure13?: string
    strMeasure14?: string
    strMeasure15?: string
    strMeasure16?: string
    strMeasure17?: string
    strMeasure18?: string
    strMeasure19?: string
    strMeasure20?: string
    strSource?: string
    strTags?: string
    strYoutube?: string
}

interface Props {
    children?: React.ReactNode;
    getDataFromApi: (url: string) => Promise<any>
}

function Navigation(props: Props) {
    const { children, getDataFromApi } = props;
    const [show, setShow] = useState(false); // mobile navbar
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<MealSearched[]>([]);

    //handle search
    const searchInput = useRef<HTMLInputElement>(null);

    const handleSearch = async () => {
        if (searchInput.current) {
            if (searchInput.current.value !== "") {
                setSearchResults([]);
                const data = await getDataFromApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.current.value}`);
                setSearchResults(data.meals);
                setIsSearching(true);
                console.log("Rezultatele cautarii sunt:",data.meals);
            } else {
                setIsSearching(false);
            }
        }
    }

    return (
        <div className='navbar'>
            <div className="navbar-responsive">
                <h1 className="brand-name">Cooking Addict</h1>
                <div className="search-container">
                    <input onChange={debounceFunction(handleSearch, 500)} ref={searchInput} className='search-input' type="search" placeholder='search for a dish'></input>
                    <div className={`search-results ${isSearching ? 'display-flex' : ''}`}>
                        <h3>Search Results</h3>
                        {
                            searchResults? searchResults.map(result => {
                                return (
                                    <Link onClick={() => setIsSearching(false)} to={`/categories/${result.strCategory}/${result.strMeal}`} className='search-card' key={result.idMeal}>
                                        <h4>{result.strMeal}</h4>
                                        <img className='search-card-image' src={result.strMealThumb} alt="meal" style={{height: 150, width: 150}}/>
                                    </Link>
                                )
                            })

                            :

                            (
                                <p style={{margin: 20}}>{"Meal not found, sorry!! :("}</p>
                            )
                        }
                    </div>
                </div>
                <div onClick={() => setShow(!show)} className='toggle-button'>
                    <div className="toggle-button-div"></div>
                    <div className="toggle-button-div"></div>
                    <div className="toggle-button-div"></div>
                </div>
            </div>
            <ul className={`nav-container ${show ? '' : 'set-display'}`}>
                <li className='nav-item'>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/about">About</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;
