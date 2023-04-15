import React, { useEffect, useState } from 'react';
import './DietPlan.css'
export default function DietPlan() {
  const bmi = 20;
  const [bmistr, setBmistr] = useState('normal');
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);

  async function makeApiRequest(item) {
    const query = encodeURIComponent(item);
    const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '63ce52481bmsh060c4542c6f3a69p16986cjsndbf2c9cf69ab',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  async function getBreakfastItems(items) {
    const results = await Promise.all(items.map(makeApiRequest));
    setBreakfastItems(results);
  }

  async function getLunchItems(items) {
    
    const results = await Promise.all(items.map(makeApiRequest));
    setLunchItems(results);
  }


  async function getDinnerItems(items) {
    
    const results = await Promise.all(items.map(makeApiRequest));
    setDinnerItems(results);
  }

  useEffect(() => {
    let breakfast=[];
    let lunch=[];
    let dinner=[];
    if (bmi > 30) {
      breakfast = [
        "1 cup of oatmeal made with 1 cup of unsweetened almond milk",
        "1/4 cup of blueberries",
        "1 tablespoon of almond butter",
        "1 small apple",
        "1 cup of black coffee or green tea"
      ];
      lunch = [
        "1 large salad made with mixed greens, cherry tomatoes, cucumber, and 1/2 cup of cooked quinoa or tofu, dressed with a light vinaigrette",
        "1 small serving of whole grain crackers",
        "1 small orange or pear",
        "1 cup of herbal tea"
      ];
      dinner = [
        "1 cup of cooked lentils or chickpeas",
        "1/2 cup of brown rice",
        "1 cup of roasted vegetables (such as broccoli, cauliflower, and carrots)",
        "1 small whole grain dinner roll"
      ];
    }
    else if(bmi<18.5){
      breakfast = [
        "2 whole eggs scrambled with cheese",
        "2 slices of whole grain toast with avocado",
        "1 cup of berries or 1 banana",
        "1 cup of whole milk"
      ];
      lunch = [
        "Grilled chicken breast or salmon fillet (6 oz.)",
        "1 large sweet potato with butter",
        "1 cup of steamed green beans or broccoli",
        "1 whole grain roll",
        "1 cup of whole milk"
      ];
      dinner = [
        "1 serving of spaghetti or other pasta with meat sauce or vegetarian sauce (at least 4 oz. of protein)",
        "1 small side salad with mixed greens, tomatoes, cucumber, and vinaigrette dressing",
        "1 whole grain roll",
        "1 cup of whole milk"
      ];
      
    }
    else if(bmi>18.5 & bmi<25){
      breakfast = [
        "1 cup cooked steel-cut oats made with non-dairy milk",
        "1 tablespoon of chia seeds",
        "1/2 cup of mixed berries",
        "1 tablespoon of almond butter",
        "1 small banana",
        "1 cup of green tea"
      ];
      lunch = [
        "1 serving of lentil soup made with mixed vegetables, such as carrots, celery, and kale.",
        "1 whole grain pita bread",
        "1 small side salad made with mixed greens, cherry tomatoes, and cucumber, topped with a light vinaigrette dressing.",
        "1 cup of herbal tea"
      ];
      dinner = [
        "1 serving of vegetable stir-fry made with mixed vegetables, such as bell peppers, onions, broccoli, and mushrooms, stir-fried in 1 tablespoon of sesame oil and served with 1 cup of cooked brown rice.",
        "1 small side of steamed edamame",
        "1 cup of herbal tea"
      ];
    } 
    else {
      breakfast = [
        '1 cup of oatmeal with 1/2 cup of berries and 1 tablespoon of honey',
        '1 cup of low-fat yogurt'
      ];
      
    }
    getBreakfastItems(breakfast);
    getLunchItems(lunch);
    getDinnerItems(dinner);
  }, []);

  useEffect(() => {
    
    
  }, [bmi]);
  let totalCalories = 0;
  let totalFat = 0;
  let totalCarbs = 0;
  let totalProtein = 0;

  breakfastItems.forEach(item => {
    totalCalories += item[0].calories;
    totalFat += item[0].fat_total_g;
    totalCarbs += item[0].carbohydrates_total_g;
    totalProtein += item[0].protein_g;
  });
  
  lunchItems.forEach(item => {
    totalCalories += item[0].calories;
    totalFat += item[0].fat_total_g;
    totalCarbs += item[0].carbohydrates_total_g;
    totalProtein += item[0].protein_g;
  });

  dinnerItems.forEach(item => {
    totalCalories += item[0].calories;
    totalFat += item[0].fat_total_g;
    totalCarbs += item[0].carbohydrates_total_g;
    totalProtein += item[0].protein_g;
  });
  return (
    <div>
      <p className='info'>
        Proper dietary nutrition is crucial for postpartum women as it aids in
        their recovery process and can reduce the risk and severity of
        postpartum depression. After giving birth, a woman's body undergoes
        significant changes and requires a balance of essential nutrients to
        restore energy levels and support overall health.
      </p>
      <p className='info'>
        A well-balanced diet consisting of whole foods, lean protein, fruits,
        and vegetables can also help with breastfeeding, which requires
        additional calories and nutrients. Specific nutrients like iron,
        calcium, vitamin D, and omega-3 fatty acids are particularly important
        for postpartum women as they aid in replenishing blood loss, improving
        bone and brain health, and reducing inflammation.
      </p>
      <br />
      <p className='info'>Here are a few dietary suggestions based on your medical information:</p>
      <h2 className='title'>Total Nutrients:</h2>
      <div className='Tnut'>
        <div className='calcont'>
        <p>Calories: {totalCalories.toFixed(2)}</p>
        <p>Protein: {totalProtein.toFixed(2)}g</p>
        <p>Fat: {totalFat.toFixed(2)}g</p>
        <p>Carbohydrates: {totalCarbs.toFixed(2)}g</p>
        </div>
      </div>
      <h2 className='title'>Breakfast:</h2>
      <div className='cont-BF'>
      {breakfastItems.map((item, index) => (
        <div key={index} className='bf'>
          <h3>{item.label}</h3>
          <p>Name: {item[0].name}</p>
          <p>Calories: {item[0].calories}</p>
          <p>Fat: {item[0].fat_total_g}</p>
          <p>Protein:{item[0].protein_g}</p>
          <p>Carbohydrates:{item[0].carbohydrates_total_g}</p>
        </div>
      ))}
      </div>
      <h2 className='title'>Lunch:</h2>
      <div className='cont-LC'>
      {lunchItems.map((item, index) => (
        <div key={index} className='ln'>
          <h3>{item.label}</h3>
          <p>Name: {item[0].name}</p>
          <p>Calories: {item[0].calories}</p>
          <p>Fat: {item[0].fat_total_g}</p>
          <p>Protein:{item[0].protein_g}</p>
          <p>Carbohydrates:{item[0].carbohydrates_total_g}</p>
        </div>
      ))}
      </div>
      <h2 className='title'>Dinner:</h2>
      <div className='cont-DR'>
      {dinnerItems.map((item, index) => (
        <div key={index} className='dn'>
          <h3>{item.label}</h3>
          <p>Name: {item[0].name}</p>
          <p>Calories: {item[0].calories}</p>
          <p>Fat: {item[0].fat_total_g}</p>
          <p>Protein:{item[0].protein_g}</p>
          <p>Carbohydrates:{item[0].carbohydrates_total_g}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
  
}
