import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

/**
 * 1. Interface IGlobalStore
 * 2. create
 * 3. persist with async from react-native-async-storage
 */

interface IGlobalStore {
  words: IWord[]
  add: (task: IWord) => void
  update: (words: IWord[]) => void
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      words: [],
      add: (word) => {
        const { words } = get()
        const updated = [...words, word]
        set({
          words: updated
        })
      },
      update: (updated) => {
        set({
          words: updated,
        })
      },
    }),
    {
      name: "letrando-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useGlobalStore;