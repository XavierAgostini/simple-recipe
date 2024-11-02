'use client';

import { useState } from 'react';
import Layout from '../components/layout';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Head from 'next/head';

const cookingMethods = ['Air Fryer', 'Oven', 'Stovetop', 'Grill'];
const foodTypes = ['Chicken', 'Beef', 'Pork', 'Fish', 'Vegetables'];

const dummyRecipes = [
  { title: 'Grilled Chicken Breast', temp: '400°F', time: '20 min' },
  { title: 'Oven-Roasted Vegetables', temp: '425°F', time: '30 min' },
  { title: 'Air Fryer Fish Fillets', temp: '375°F', time: '12 min' },
  { title: 'Stovetop Beef Stew', temp: 'Low heat', time: '2 hours' },
];

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <Layout>
      <Head>
        <title>Air Fryer Recipes - Quick and Easy Cooking</title>
        <meta
          name="description"
          content="Explore a variety of air fryer recipes including chicken, beef, pork, and fish cuts. Perfect for quick, easy, and healthy cooking."
        />
        <meta
          property="og:title"
          content="Air Fryer Recipes - Quick and Easy Cooking"
        />
        <meta
          property="og:description"
          content="Browse our collection of delicious air fryer recipes featuring popular cuts of chicken, beef, pork, and fish. Fast and healthy options for every meal!"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path-to-main-page-image.jpg" /> */}
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Cooking Methods
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {cookingMethods.map((method) => (
            <Card
              key={method}
              className={`cursor-pointer ${selectedMethod === method ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedMethod(method)}
            >
              <CardContent className="p-4">
                <p className="text-center dark:text-white">{method}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 dark:text-white">Food Types</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {foodTypes.map((type) => (
            <Card
              key={type}
              className={`cursor-pointer ${selectedType === type ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              <CardContent className="p-4">
                <p className="text-center dark:text-white">{type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedMethod && selectedType && (
          <div>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Recipes</h2>
            <ul className="space-y-4">
              {dummyRecipes.map((recipe) => (
                <li key={recipe.title}>
                  <Link
                    href={`/recipes/${encodeURIComponent(recipe.title.toLowerCase().replace(/ /g, '-'))}`}
                  >
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold dark:text-white">
                            {recipe.title}
                          </h3>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="mr-4">{recipe.temp}</span>
                            <span>{recipe.time}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}
