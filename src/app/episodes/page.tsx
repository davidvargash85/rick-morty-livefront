import MainLayout from '@/components/templates/MainLayout';
import EpisodeList from '@/components/organisms/EpisodeList';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Episodes
          </h1>
        </div>
        
        <EpisodeList />
      </div>
    </MainLayout>
  );
}
