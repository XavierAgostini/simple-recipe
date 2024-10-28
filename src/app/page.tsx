// pages/index.tsx
import Link from 'next/link';
import recipes from './data/recipes.json';

const HomePage = () => {
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {Object.keys(recipes).map(slug => (
          <li key={slug}>
            <Link href={`/recipe/${slug}`}>
              <h2>{recipes[slug].title}</h2>
              <p><strong>Cooking Time:</strong> {recipes[slug].cookingTime}</p>
              <p><strong>Temperature:</strong> {recipes[slug].temperature.imperial} / {recipes[slug].temperature.metric}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
