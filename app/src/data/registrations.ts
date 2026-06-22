import { Registration } from '@/types';

export const mockRegistrations: Registration[] = [
  {
    id: 'reg-001',
    fullName: 'Abdii Guddisaa',
    phone: '0911223344',
    city: 'Nekemte',
    course: 'Video Editing',
    message: 'Barachuu nan barbaada.',
    status: 'new',
    submittedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 'reg-002',
    fullName: 'Lalisaa Tolaa',
    phone: '0922334455',
    city: 'Gimbi',
    course: 'Photography',
    message: '',
    status: 'contacted',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 'reg-003',
    fullName: 'Ayyaantuu Margaa',
    phone: '0933445566',
    city: 'Ambo',
    course: 'Cinematography',
    message: 'Yoom jalqaba?',
    status: 'registered',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 'reg-004',
    fullName: 'Galaanaa Tarreessaa',
    phone: '0944556677',
    city: 'Nekemte',
    course: 'Photo Editing',
    message: '',
    status: 'completed',
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  }
];
