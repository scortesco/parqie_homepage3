import { create } from 'zustand';
import { ApiError, joinWaitlist, type SignupSource } from '../lib/api';

const EMAIL_RE = /\S+@\S+\.\S+/;

type Status = 'idle' | 'submitting' | 'done';

interface WaitlistState {
  // Inputs that live outside the modal but prefill it.
  heroAddress: string;
  priorityEmail: string;

  // Modal.
  open: boolean;
  source: SignupSource;
  location: string;
  email: string;
  error: string;
  status: Status;
  /** Location that was actually submitted, for the confirmation text. */
  confirmedLocation: string;

  setHeroAddress: (v: string) => void;
  setPriorityEmail: (v: string) => void;
  setLocation: (v: string) => void;
  setEmail: (v: string) => void;
  openModal: (opts: { source: SignupSource; location?: string; email?: string }) => void;
  closeModal: () => void;
  submit: () => Promise<void>;
}

export const useWaitlist = create<WaitlistState>((set, get) => ({
  heroAddress: '',
  priorityEmail: '',
  open: false,
  source: 'nav',
  location: '',
  email: '',
  error: '',
  status: 'idle',
  confirmedLocation: '',

  setHeroAddress: (heroAddress) => set({ heroAddress }),
  setPriorityEmail: (priorityEmail) => set({ priorityEmail }),
  setLocation: (location) => set({ location }),
  setEmail: (email) => set({ email, error: '' }),

  openModal: ({ source, location, email }) =>
    set((s) => ({
      open: true,
      source,
      location: location ?? '',
      email: email ?? s.email,
      error: '',
      status: 'idle',
    })),

  closeModal: () => set({ open: false }),

  submit: async () => {
    const { email, location, source, status } = get();
    if (status === 'submitting') return;
    if (!EMAIL_RE.test(email)) {
      set({ error: 'Adresa de e-mail nu pare corectă.' });
      return;
    }
    set({ status: 'submitting', error: '' });
    try {
      const loc = location.trim();
      await joinWaitlist({ email: email.trim(), location: loc || undefined, source });
      set({ status: 'done', confirmedLocation: loc });
    } catch (e) {
      const invalid = e instanceof ApiError && e.status === 400;
      set({
        status: 'idle',
        error: invalid
          ? 'Adresa de e-mail nu pare corectă.'
          : 'Nu am reușit să te înscriem. Mai încearcă o dată în câteva secunde.',
      });
    }
  },
}));
