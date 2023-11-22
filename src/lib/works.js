import {createClient} from "microcms-js-sdk";

export const cms_domain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
export const cms_key = import.meta.env.VITE_MICROCMS_API_KEY;

export const client = createClient({
    serviceDomain: cms_domain,
    apiKey: cms_key
});