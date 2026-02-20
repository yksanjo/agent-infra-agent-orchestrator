import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentOrchestrator } from '../src/index.js';

describe('AgentOrchestrator', () => {
  it('should initialize', async () => {
    const instance = new AgentOrchestrator();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentOrchestrator();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
