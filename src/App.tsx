import { GlobalTheme } from './styles/GlobalTheme'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme />
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
