import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';

import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const { name } = useParams();
    const navi = useNavigate();

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals)
        });
    }, [name]);

    function goBack() {
        navi(-1);
    }

    return (
        <>
            <button className="goback btn" onClick={goBack}>Go Back</button>
            {!meals.length ? (
                <Preloader />
            ) : (
                <MealList meals={meals} />
            )}
        </>
    );
}

export { Category };