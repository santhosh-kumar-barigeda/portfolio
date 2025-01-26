import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createContact } from '@/lib/actions';
import { toast } from 'sonner';

export const createContactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters long.',
  }),
});

export type CreateContactFormType = z.infer<typeof createContactFormSchema>;

export function useContactForm() {
  const form = useForm<CreateContactFormType>({
    resolver: zodResolver(createContactFormSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit = async (data: CreateContactFormType) => {
    try {
      const res = await createContact(data);
      if (res.id) {
        toast.success(`Success! I'll reach out to you soon, ${data.name}.`);
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return { form, onSubmit, isSubmitting: form.formState.isSubmitting };
}
