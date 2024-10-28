// pages/index.tsx
import Link from 'next/link';
import recipes from './data/recipes.json';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
      <title>Air Fryer Recipes - Quick and Easy Cooking</title>
        <meta
          name="description"
          content="Explore a variety of air fryer recipes including chicken, beef, pork, and fish cuts. Perfect for quick, easy, and healthy cooking."
        />
        <meta property="og:title" content="Air Fryer Recipes - Quick and Easy Cooking" />
        <meta
          property="og:description"
          content="Browse our collection of delicious air fryer recipes featuring popular cuts of chicken, beef, pork, and fish. Fast and healthy options for every meal!"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path-to-main-page-image.jpg" /> */}
      </Head>
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
