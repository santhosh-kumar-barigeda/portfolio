'use server';

import { CreateContactFormType } from '@/hooks/use-contact-form';
import { prisma } from './prisma';

export const createContact = async (data: CreateContactFormType) => await prisma.contact.create({ data });
export const deleteContact = async (id: string) => await prisma.contact.delete({ where: { id } });
export const getAllContacts = async () => await prisma.contact.findMany({ orderBy: { updatedAt: 'desc' } });
