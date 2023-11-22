import { get, writable } from "svelte/store";
import { themesList } from "$lib/theme/list.js";
import { browser } from "$app/environment";
import { onMount } from "svelte";

let initialTheme;
initialTheme = browser && localStorage.getItem("client-theme") || "dark";
export const theme = writable(initialTheme);
// theme.set(initialTheme);
// initialTheme = browser && localStorage.getItem("client-theme") || "dark";
export function toggleTheme() {
    theme.update((currentTheme) => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        browser && localStorage.setItem("client-theme", newTheme);
        return newTheme;
    });
    applyTheme();
    console.log("toggling theme");
}
export function applyTheme() {
    console.log("Aa");
    if (browser) {
        const existingStyles = document.querySelectorAll('[data-theme-style]');
        existingStyles.forEach(styleElement => {
            styleElement.remove();
        });

        const tm = get(theme);
        if (tm === "light") {
            themesList.light.forEach(thm => {
                const styleElement = document.createElement('style');
                styleElement.textContent = `
                    :root {
                        --${thm.id}: ${thm.content};
                    }
                `;
                styleElement.setAttribute('data-theme-style', 'true');
                document.head.appendChild(styleElement);
            });
        } else if (tm === "dark") {
            themesList.dark.forEach(thm => {
                const styleElement = document.createElement('style');
                styleElement.textContent = `
                    :root {
                        --${thm.id}: ${thm.content};
                    }
                `;
                styleElement.setAttribute('data-theme-style', 'true');
                document.head.appendChild(styleElement);
            });
        }

        console.log("applying theme");
    }
}

applyTheme()
export function onThemeUpdate(callback) {
    theme.subscribe((newTheme) => {
        callback(newTheme);
    });
}