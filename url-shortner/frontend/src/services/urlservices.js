const API_URL = "https://literate-space-lamp-4j7jr6p644gpfv5j-4000.app.github.dev";


export async function shortenUrl(longUrl){

    const response = await fetch(`${API_URL}/shorten`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            longUrl: longUrl
        })

    });


    const data = await response.json();

    return data;
}