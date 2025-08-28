export type Project = {
  id: string;
  name: string;
};

export type Issue = {
  id: string;
  projectId: string;
  name: string;
};

export type User = {
  id: string;
  role: 'member' | 'teamlead' | 'admin';
  fullName: string;
};