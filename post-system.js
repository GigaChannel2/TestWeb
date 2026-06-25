const page = document.getElementById("page");
const converter = new showdown.Converter();

let post = document.getElementById("post");

const slug = new URL(location)
.searchParams
.get("p");

if(slug){
    mdConvert();
}

async function mdConvert() {

    let res = await fetch(`posts/${slug}.md`);

    if (!res.ok) {
        res = await fetch("posts/notfound.md");
    }

    const md = await res.text();

    post.innerHTML = converter.makeHtml(md);

}

// async function mdConvert() {
//     try {
//         let fetcher = await fetch(`posts/${slug}.md`);

//         if (!fetcher.ok) {
//             throw new Error("Post not found");
//         }

//         let md = await fetcher.text();
//         let html = converter.makeHtml(md);

//         post.innerHTML = html;
//     } catch (error) {
//         console.log(error);

//         let notFoundfetch = await fetch(`posts/notfound.md`);
//         let notFoundmd = notFoundfetch.text();

//         post.textContent = converter.makeHtml(notFoundmd);
//         // post.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
//     }
    
//     // console.log(md);
// }

// console.log(slug);
