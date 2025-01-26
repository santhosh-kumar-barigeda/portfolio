'use client';

import { FormEvent, ReactNode, useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  children: ReactNode;
}

export const PasswordProtected = ({ children }: Props) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.NEXT_PUBLIC_CONTACTS_PASSWORD;
  const router = useRouter();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      router.refresh();
    } else {
      toast.error('Incorrect password');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className='flex items-center justify-center min-h-screen p-4 bg-background'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>Enter Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className=''>
            <Input type='password' value={password} onChange={handlePasswordChange} className='w-full mb-4' placeholder='Password' />
            <Button type='submit' className='w-full'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
