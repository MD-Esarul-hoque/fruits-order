import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routs/Routs';
import Authpovider from './providers/AuthPovider';
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authpovider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>

    </Authpovider>


  </React.StrictMode>,
)
