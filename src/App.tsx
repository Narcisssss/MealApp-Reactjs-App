import Navigation from "./components/Navigation";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import './App.module.scss';
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Category from "./components/Category";
import { MealSearched } from "./components/Navigation";
import Footer from "./components/Footer";

export interface Categories {
  idCategory: string
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string
}

export interface Meal {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

const App: React.FC = () => {

  const params = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // fetching data from api when component is rendered

  const [categories, setCategories] = useState<Categories[]>([]);

  const getDataFromApi = async (url: string) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error(`Sorry!!! Could not get products: ${error}`);
    }
  };

  const getCategories = async () => {
    setIsLoading(true);
    const data = await getDataFromApi("https://www.themealdb.com/api/json/v1/1/categories.php");
    setIsLoading(false);
    console.log(data.categories);
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  // handle click category

  const [currentCategory, setCurrentCategory] = useState<string>("Empty");

  //handle click on product

  const[product, setProduct] = useState<MealSearched>({
    idMeal: "",
    strMeal: "ceva",
    strCategory: "",
  });

  useEffect(() => {
    console.log('Noul product este:',product);
  },[product])

  return (
    <div className="app">
      <Navigation getDataFromApi={getDataFromApi} />
      <Routes>
        <Route path="" >
          <Route index element={<Home isLoading={isLoading} categories={categories} setCurrentCategory={setCurrentCategory} />} />
          <Route path='categories/:categoryId'>
            <Route index element={<Category currentCategory={currentCategory} getDataFromApi={getDataFromApi} /> } />
            <Route path=":productId" element={<Product product={product} getDataFromApi={getDataFromApi}  setProduct={setProduct}/>}/>
          </Route>   
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Navigate to=""></Navigate>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;