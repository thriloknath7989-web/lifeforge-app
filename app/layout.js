import './globals.css';

export const metadata = {
  title: 'LifeForge - Multi-SaaS Platform',
  description: 'Learn, Build, Track Habits & Share Portfolio',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
