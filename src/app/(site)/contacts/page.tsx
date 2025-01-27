'use client';

import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DeleteContact } from '@/components/delete-contact';
import { getAllContacts } from '@/lib/actions';
import { Contact } from '@prisma/client';
import { RefreshCwIcon } from 'lucide-react';

export default function ContactsPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.NEXT_PUBLIC_CONTACTS_PASSWORD;
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);

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

  const fetchData = async () => {
    const data = await getAllContacts();

    if (contacts) {
      setContacts(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <div className='dark:bg-background bg-background'>
        <Navbar showLinks={false} />
        <div className='flex items-center justify-center min-h-screen p-4'>
          <div className='max-w-6xl mx-auto'>
            <Button className='mb-10' size='sm' onClick={async () => await fetchData()}>
              <span>Refresh</span>
              <RefreshCwIcon className='size-4' />
            </Button>
            <Table className='w-full max-w-6xl'>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead>Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className='text-center'>
                      No contacts available.
                    </TableCell>
                  </TableRow>
                ) : (
                  contacts.map(({ id, name, email, message, createdAt }) => (
                    <TableRow key={id}>
                      <TableCell className='font-medium text-nowrap'>{name}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{message}</TableCell>
                      <TableCell className='text-nowrap'>{new Date(createdAt).toLocaleString()}</TableCell>
                      <TableCell>
                        <DeleteContact id={id} />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
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
    </>
  );
}
