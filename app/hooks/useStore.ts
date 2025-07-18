import { create } from "zustand"

export const useStore = create((set) => ({
  isToggled: false,
  project: null,
  setIsToggledStore: (isToggled) => set({ isToggled: isToggled }),
  setProject: (project) => set({ project: project }),
}))
