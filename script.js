async function searchMeal() {
    const searchInput = document.getElementById('search-input').value;

    if (searchInput.trim() === '') {
        alert('Please enter a meal name');
        return;
    }

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayMeals(data.meals);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMeals(meals) {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';

    if (!meals) {
        alert('No results found');
        return;
    }

    // Display only the first 5 results
    meals.slice(0, 5).forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';

        const mealName = document.createElement('h3');
        mealName.textContent = meal.strMeal;

        const mealImage = document.createElement('img');
        mealImage.src = meal.strMealThumb;
        mealImage.alt = meal.strMeal;

        mealDiv.appendChild(mealName);
        mealDiv.appendChild(mealImage);

        mealContainer.appendChild(mealDiv);
    });
}


