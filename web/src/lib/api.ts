export type SignupSource = 'nav' | 'hero' | 'priority' | 'zone';

export interface WaitlistRequest {
  email: string;
  location?: string;
  source: SignupSource;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
  }
}

const BASE = import.meta.env.VITE_API_BASE_URL ?? '';

export async function joinWaitlist(body: WaitlistRequest): Promise<void> {
  const res = await fetch(`${BASE}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new ApiError(`Waitlist signup failed (${res.status})`, res.status);
  }
}
