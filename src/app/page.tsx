import MainLayout from '@/components/templates/MainLayout';
import CharacterGrid from '@/components/organisms/CharacterGrid';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Rick and Morty Characters
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Explore the multiverse of Rick and Morty characters
          </p>
        </div>
        
        <CharacterGrid />
      </div>
    </MainLayout>
  );
}
