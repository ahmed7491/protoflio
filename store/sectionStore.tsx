import { create } from "zustand";

interface ActiveStatus {
  activeSection: string | undefined;
  setActiveSection: (value: string | undefined) => void;
}

export const useSectionStore = create<ActiveStatus>((set) => ({
  activeSection: undefined,
  setActiveSection: (value) => set({ activeSection: value }),
}));
