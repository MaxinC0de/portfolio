import { create } from "zustand"

export const useStore = create((set) => ({
  isToggled: false,
  project: null,
  setIsToggledStore: (isToggled) => set({ isToggled: isToggled }),
  setProject: (project) => set({ project: project }),
  infos: false,
  setInfos: (boolean) => set({ infos: boolean }),
  modalImage: null,
  setModalImage: (src) => set({ modalImage: src }),
}))

export const useContactStore = create((set) => ({
  contactIsToggled: false,
  setContactIsToggled: (boolean) => set({ contactIsToggled: boolean }),
}))
