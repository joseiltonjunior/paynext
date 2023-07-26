import { FindClient } from '@/components/FindClient'
import { Progress } from '@/components/Progress/Index'
import { Total } from '@/components/Total'

export function Home() {
  return (
    <div className="max-w-3xl">
      <h1 className="font-bold text-blue-600 leading-6">Vendas</h1>

      <h3 className="font-bold text-green-400 leading-8">Nova vendas</h3>

      <Progress currentIndex={2} />

      <Total value={114.75} />

      <FindClient />
    </div>
  )
}
