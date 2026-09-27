export interface CourseModule {
  id: string;
  code: string;
  title: string;
  description: string;
  category: 'Math' | 'Core' | 'Systems' | 'Hardware';
  topics: string[];
  tools: string[];
  status: 'COMPLETED' | 'IN_PROGRESS';
}

export interface CapabilityVector {
  id: string;
  vectorId: string;
  categoryTag: string;
  statusTag: string;
  statusType: 'primary' | 'tertiary' | 'outline';
  title: string;
  description: string;
  tags?: string[];
  footerStandard: string;
}

export interface BlueprintProject {
  id: string;
  code: string;
  tag: string;
  category: string;
  title: string;
  subtitle: string;
  schematicType: string;
  techStack: string;
  statusReadout: string;
  statusType: 'primary' | 'tertiary';
  description: string;
  architectureDetails: string[];
  metrics: Record<string, string>;
  githubSlug?: string;
  liveUrl?: string;
}

export interface CredentialItem {
  id: string;
  index: string;
  title: string;
  badge: string;
  description: string;
  completedDate: string;
  status: 'ISSUED' | 'CERTIFICATE PENDING';
  hours?: string;
  verificationHash: string;
  issuer: string;
}

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
  timestamp?: string;
}
