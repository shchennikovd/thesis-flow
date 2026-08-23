export function canTransition(fromStatus: string, toStatus: string): boolean {
  if (fromStatus === 'pending' && toStatus === 'in_progress') return true;
  if (fromStatus === 'pending' && toStatus === 'approved') return false;
  return false;
}