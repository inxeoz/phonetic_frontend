import { writable } from "svelte/store";

interface WordData {
    text: string;
    phonetic: string;
}

export const phoneticMap = writable<WordData[]>([
    { text: "i", phonetic: "/ˈa‍ɪ/" },
    { text: "am", phonetic: "am" },
    { text: "the", phonetic: "/ðə, ði/" },
    { text: "boy", phonetic: "/bˈɔ‍ɪ/" },
]);
