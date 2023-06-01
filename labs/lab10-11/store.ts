import { create } from "zustand";

const useStore = create((set) => ({
    countries: [],
    setCountries: (newCountries: any) =>
        set((state: any) => ({
            countries: [...newCountries],
        })),
    cities: [],
    setCities: (newCities: any) =>
        set((state: any) => ({
            cities: [...newCities],
        })),

    activeCountry: null,
    setActiveCountry: (newActiveCountry: any) =>
        set((state: any) => ({
            activeCountry: newActiveCountry,
        })),
}));

export default useStore;
