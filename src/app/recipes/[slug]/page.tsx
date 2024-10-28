// src/app/pages/recipes/[slug]/page.tsx
import recipes from "../../data/recipes.json";

const RecipePage = async ({ params }: { params: { slug: string } }) => {
  // Explicitly await params in case Next.js needs async handling here
  const { slug } = await params;
  const recipe = recipes[slug];

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p><strong>Meat Type:</strong> {recipe.meatType}</p>
      <p><strong>Animal:</strong> {recipe.animal}</p>
      <p><strong>Cut:</strong> {recipe.cut}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
      <p>
        <strong>Temperature:</strong> {recipe.temperature.imperial} / {recipe.temperature.metric}
      </p>
      <p><strong>Kitchen Aid:</strong> {recipe.kitchenAid}</p>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;
