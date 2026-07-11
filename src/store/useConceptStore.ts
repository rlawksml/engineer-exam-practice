import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConceptStatus } from "@/data/types";

interface ConceptState {
  cardStatus: Record<string, ConceptStatus>;
  currentCard: Record<string, number>;
  setCardStatus: (cardId: string, status: ConceptStatus) => void;
  setCurrentCard: (sectionId: string, index: number) => void;
  resetSection: (sectionId: string, cardIds: string[]) => void;
  resetAllConcepts: () => void;
}

const useConceptStore = create<ConceptState>()(
  persist(
    (set) => ({
      cardStatus: {},
      currentCard: {},

      setCardStatus: (cardId, status) => {
        set((state) => ({
          cardStatus: { ...state.cardStatus, [cardId]: status },
        }));
      },

      setCurrentCard: (sectionId, index) => {
        set((state) => ({
          currentCard: { ...state.currentCard, [sectionId]: index },
        }));
      },

      resetSection: (sectionId, cardIds) => {
        set((state) => {
          const nextStatus = { ...state.cardStatus };
          cardIds.forEach((id) => delete nextStatus[id]);

          const nextCurrent = { ...state.currentCard };
          delete nextCurrent[sectionId];

          return {
            cardStatus: nextStatus,
            currentCard: nextCurrent,
          };
        });
      },

      resetAllConcepts: () => {
        set({ cardStatus: {}, currentCard: {} });
      },
    }),
    {
      name: "concept-store",
    }
  )
);

export default useConceptStore;
