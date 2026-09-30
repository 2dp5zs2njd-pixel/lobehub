import { agentDisplayName, type AgentNameFields } from '@lobechat/types';

export const inboxDisplayName = (agent: AgentNameFields | null | undefined): string => {
  const name = agentDisplayName(agent, 'EK');
  return name === 'Lobe' || name === 'Lobe AI' ? 'EK' : name;
};
