import '@general/reset.scss';
import '@general/globals.scss';
import '@general/error.scss';
import '@general/footer.scss';
import '@homepage/header.scss';
import '@homepage/post-list.scss';
import '@homepage/setup-repo.scss';
import '@posts/post.scss';
import '@slices/image-caption.scss';
import '@slices/quote.scss';

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
