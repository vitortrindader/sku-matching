import { Header } from '@/components/Header'
import { ItemList } from '@/components/ItemList'
import { Results } from '@/components/Results'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto">
        <div className="flex gap-4 p-4">
          <div className="w-1/3">
            <ItemList />
          </div>
          <div className="flex-1">
            <Results />
          </div>
        </div>
      </div>
    </main>
  )
}
