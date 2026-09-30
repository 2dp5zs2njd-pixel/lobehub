import { describe, expect, it } from 'vitest';

import { inboxDisplayName } from './inboxDisplayName';

describe('inboxDisplayName', () => {
  it.each(['Lobe', 'Lobe AI'])('shows EK for the default name %s', (name) => {
    expect(inboxDisplayName({ name })).toBe('EK');
  });

  it('preserves a custom name', () => {
    expect(inboxDisplayName({ name: 'Alex' })).toBe('Alex');
  });
});
