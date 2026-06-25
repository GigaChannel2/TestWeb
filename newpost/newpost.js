// import fs from "fs";

const input = document.getElementById("input");
const output = document.getElementById("output");
const createbtn = document.getElementById("create");
const converter = new showdown.Converter();

function convertMarkdown() {
    try {
        const markdownText = input.value;
        const html = converter.makeHtml(markdownText);
        output.innerHTML = html;
    } catch (error) {
        output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

input.addEventListener('input', convertMarkdown);

// Initial conversion
convertMarkdown();

createbtn.addEventListener("click", ()=>{
    // fs.writeFileSync("posts/post.md", "# Hello\n\nIni post baru.");
    const file = new File(
        ["Hello, world!"], // File content as an array of strings or blobs
        "example.txt", // File name
        {
        type: "text/plain", // MIME type
        lastModified: Date.now() // Optional: Last modified timestamp
        }
    );
});
