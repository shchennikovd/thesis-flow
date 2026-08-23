import { describe, it, expect } from 'vitest';
import { canTransition } from './workflow.rules'; // Относительный импорт внутри одного модуля

describe('Workflow State Machine', () => {
  it('разрешает переход из pending в in_progress', () => {
    expect(canTransition('pending', 'in_progress')).toBe(true);
  });

  it('запрещает прямой переход из pending в approved', () => {
    expect(canTransition('pending', 'approved')).toBe(false);
  });
});