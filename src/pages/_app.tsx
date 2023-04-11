import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Calculator from '../components/Calculator';

export default function App({ Component, pageProps }: AppProps) {
  return <Calculator />;
}