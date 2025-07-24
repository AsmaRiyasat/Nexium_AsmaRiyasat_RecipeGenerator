'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      const user = data?.user;

      if (!user) {
        router.push('/login');
      } else {
        setUserEmail(user.email || '');
      }
    };

    getUser();
  }, [router]);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">🎉 Dashboard</h1>
      <p className="mt-2">Welcome, {userEmail}!</p>
    </main>
  );
}
