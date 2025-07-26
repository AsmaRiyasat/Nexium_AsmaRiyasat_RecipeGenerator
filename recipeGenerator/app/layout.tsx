// // app/layout.tsx
// import './globals.css';
// import { AuthProvider } from '@/context/AuthProvider';

// export const metadata = {
//   title: 'Recipe Generator',
//   description: 'AI Recipe Generator',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[url('/chocolate-4455840_1280.jpg')] bg-cover bg-center bg-no-repeat text-white">
//         <AuthProvider>
//           <main className="min-h-screen flex items-center justify-center p-6">
//             {children}
//           </main>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
// import './globals.css';
// import { AuthProvider } from '@/context/AuthProvider';
// import React from "react";
// import { AboutDialog } from "@/components/AboutDialog";

// export default function Page() {
//   return (
//     <div className="flex justify-end p-4">
//       <AboutDialog />
//     </div>
//   );
// }


// export const metadata = {
//   title: 'Recipe Generator',
//   description: 'AI Recipe Generator',
// };


// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-[url('/chocolate-4455840_1280.jpg')] bg-cover bg-center bg-no-repeat text-white">
//         <AuthProvider>
//           <main className="min-h-screen flex flex-col items-center justify-center p-6">
//             {/* 🌟 Header */}
//             <header className="w-full text-center ">
//               <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
//                 Recipe Generator AI
//               </h1>
//             </header>

//             {/* 🔥 Main Page Content */}
//             {children}
//           </main>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }
import './globals.css';
import { AuthProvider } from '@/context/AuthProvider';
import React from "react";
import { AboutDialog } from "@/components/AboutDialog";

export const metadata = {
  title: 'Recipe Generator',
  description: 'AI Recipe Generator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[url('/chocolate-4455840_1280.jpg')] bg-cover bg-center bg-no-repeat text-white">
        <AuthProvider>
          <main className="min-h-screen flex flex-col items-center justify-center p-6">
            
            {/* 🌟 Header */}
            <header className="w-full text-center relative">
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                Recipe Generator AI
              </h1>

              {/* ℹ️ About Icon - Top Right */}
              <div className="absolute right-4 top-0">
                <AboutDialog />
              </div>
            </header>

            {/* 🔥 Main Page Content */}
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
