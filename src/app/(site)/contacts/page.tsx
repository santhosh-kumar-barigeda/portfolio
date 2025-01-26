import { Navbar } from '@/components/navbar';
import { getAllContacts } from '@/lib/actions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DeleteContact } from '@/components/delete-contact';
import { PasswordProtected } from '@/components/password-protected';

export default async function ContactsPage() {
  const contacts = await getAllContacts();

  return (
    <>
      <PasswordProtected>
        <div className='dark:bg-background bg-background'>
          <Navbar showLinks={false} />
          <div className='flex items-center justify-center min-h-screen p-4'>
            <div className='max-w-6xl mx-auto'>
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
      </PasswordProtected>
    </>
  );
}
