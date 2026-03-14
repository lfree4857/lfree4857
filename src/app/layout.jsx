import ClientProvider from './ClientProvider';
import '../index.css';
import '../App.css';

export const metadata = {
  title: 'innovators',
  description: 'Web site created using create-react-app migrated to Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/bootstarp/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/super-classes.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/mobile.css" />
        <link rel="stylesheet" href="/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
