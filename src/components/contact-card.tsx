import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export function ContactCard({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6 w-full', className)} {...props}>
      <Card className='w-full max-w-xl mx-auto'>
        <CardHeader className='text-center px-4'>
          <CardTitle className='text-xl'>Get in touch</CardTitle>
          <CardDescription>Feel free to reach out to us, we are happy to assist!</CardDescription>
        </CardHeader>
        <CardContent className='px-4'>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
