import Layout from '../../../components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Thermometer, Clock } from 'lucide-react';

// This would typically come from a database or API
const dummyRecipes = [
  {
    slug: 'grilled-chicken-breast',
    title: 'Grilled Chicken Breast',
    temp: '400°F',
    time: '20 min',
    instructions: [
      'Preheat grill to 400°F',
      'Season chicken breasts with salt and pepper',
      'Grill for 6-8 minutes per side',
      'Let rest for 5 minutes before serving',
    ],
  },
  // Add more recipes here...
];

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = dummyRecipes.find((r) => r.slug === params.slug);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col p-6 sm:p-12 sm:w-4/5 max-w-3xl">
        <div className="">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {recipe.title}
          </h1>
          <div>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Airfyer
            </h2>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-6 py-8">
            <div className="flex items-center leading-7 [&:not(:first-child)]:mt-6">
              <Thermometer className="w-12 h-12 mr-2 text-gray-600 dark:text-gray-400" />
              <span className="dark:text-gray-300">{recipe.temp}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-10 h-10 mr-2 text-gray-600 dark:text-gray-400" />
              <span className="dark:text-gray-300">{recipe.time}</span>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-semibold dark:text-white mb-4">
              Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-800 dark:text-gray-300">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}
