import { describe, it, expect } from 'vitest';
import { canTransition } from './stage-transition';

describe('Workflow State Machine (Transitions)', () => {
  it('разрешает переход из pending в in_progress', () => {
    expect(canTransition('pending', 'in_progress')).toBe(true);
  });

  it('запрещает прямой переход из pending в approved', () => {
    expect(canTransition('pending', 'approved')).toBe(false);
  });

  it('разрешает переход из in_progress в submitted', () => {
    expect(canTransition('in_progress', 'submitted')).toBe(true);
  });

  it('запрещает переход из approved обратно в revision', () => {
    expect(canTransition('approved', 'revision')).toBe(false);
  });
});