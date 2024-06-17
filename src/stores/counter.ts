import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const counterState = create(
	persist(
		(set, get) => ({
			counter: 0,
			increase: () => set({ counter: (get() as { counter: number }).counter + 1 }),
		}),
		{
			name: 'CounterState',
			storage: createJSONStorage(() => localStorage),
		}
	)
)

export default counterState