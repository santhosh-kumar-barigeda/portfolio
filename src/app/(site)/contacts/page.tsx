'use client';

import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

// UI Components
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Icons
import { RefreshCwIcon, TrashIcon } from 'lucide-react';

// Actions
import { deleteContact, getAllContacts } from '@/lib/actions';

// Types
import { Contact } from '@prisma/client';

export default function ContactsPage() {
  // States
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Constants
  const correctPassword = process.env.NEXT_PUBLIC_CONTACTS_PASSWORD;
  const router = useRouter();

  // Handlers
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

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
    if (data) setContacts(data);
  };

  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated]);

  // Render authenticated view
  if (isAuthenticated) {
    return (
      <div className='dark:bg-background bg-background'>
        <Navbar showLinks={false} />
        <div className='flex items-center justify-center min-h-screen p-4 overflow-scroll'>
          <div className='max-w-6xl mx-auto'>
            {/* Refresh Button */}
            <Button className='mb-10' size='sm' onClick={fetchData}>
              <span>Refresh</span>
              <RefreshCwIcon className='size-4' />
            </Button>

            {/* Contacts Table */}
            <Table className='w-full max-w-6xl overflow-scroll'>
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
                    <TableCell colSpan={5} className='text-center'>
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
                        <Button
                          variant='ghost'
                          onClick={async () => {
                            const res = await deleteContact(id);
                            if (res.id) {
                              await fetchData();
                              toast.success('Deleted!');
                            }
                          }}
                        >
                          <TrashIcon className='size-4 text-rose-500' />
                        </Button>
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

  // Render password prompt
  return (
    <div className='flex items-center justify-center min-h-screen p-4 bg-background'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>Enter Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Input type='password' value={password} onChange={handlePasswordChange} className='w-full mb-4' placeholder='Password' />
            <Button type='submit' className='w-full'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
