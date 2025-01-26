'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/hooks/use-contact-form';

export function ContactForm() {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Your Name' {...field} disabled={isSubmitting} suppressHydrationWarning />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='you@example.com' {...field} disabled={isSubmitting} suppressHydrationWarning />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder='Your message...' {...field} disabled={isSubmitting} suppressHydrationWarning />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}
