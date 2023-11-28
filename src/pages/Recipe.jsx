import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { getMealById } from "../api";


function Recipe() {
   const navi = useNavigate();
   const { id } = useParams();
   const [recipe, setRecipe] = useState([]);

   useEffect(() => {
      getMealById(id).then((data) => {
         setRecipe(data.meals[0])
      });
   }, [id]);



   return <>
      <div className="recipe_wrapper">
         <button className="goback btn" onClick={() => navi(-1)}>Go Back</button>
         {!recipe.idMeal ? (
            <Preloader />
         ) : (
            <div className="recipe">
               <h1>{recipe.strMeal}</h1>
               <img src={recipe.strMealThumb} alt={recipe.strMeal} />
               <p>{recipe.strInstructions}</p>
               <h3><a href={recipe.strYoutube} target='_blank'>YouTube {recipe.strMeal}</a></h3>

            </div>
         )}
      </div>

   </>
}

export { Recipe }