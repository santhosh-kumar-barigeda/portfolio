'use client';

import { deleteContact } from '@/lib/actions';
import { Button } from './ui/button';
import { TrashIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
}

export const DeleteContact = ({ id }: Props) => {
  const router = useRouter();

  return (
    <Button
      variant='ghost'
      onClick={async () => {
        const res = await deleteContact(id);
        if (res.id) {
          router.refresh();
          toast.success('Deleted!');
        }
      }}
    >
      <TrashIcon className='size-4 text-rose-500' />
    </Button>
  );
};
