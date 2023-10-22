// src/routes/linkPreview.js
import { json } from '@sveltejs/kit';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom'; // This will be used to parse HTML

export async function POST({request}) {
    //const { url } = await request.json();
    const {url} = await request.json();

    try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const title = document.querySelector('title').textContent;
        const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
        const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content');

        return json({
            body: {
                title,
                description,
                image
            }
        });
    } catch (error) {
        console.error(error);
        return json({ }, { status: 500 });
    }
}
