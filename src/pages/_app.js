import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '@/store/srote';
import { inter } from "@/assets/fonts/fonts";
import "@/assets/styles/globals.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
