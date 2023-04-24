const button=document.querySelector("button");

button.addEventListener("click",(e) =>{
    button.remove();
});

const imgtag=document.createElement("img");
imgtag.setAttribute("src","https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8");

imgtag.setAttribute("alt" , "picsum");
document.body.prepend(imgtag);

const sectionselect=document.querySelectorAll("images-list");

function renderresultjs() {
    const result=result.map((ress)=>{ return`
    <div class="container">
        <div class="webImage">
            <img src="${ress.webImage.url}">
        </div>
        <div class="titles">
        <p class=${ress.title}></p>
        <h2 class=${ress.longTitle}></h2>
        </div>
        <div class="pink & green button>
        <button class="green">see more details</button>
        <button class="pink">remove card</button>
        </div>
    </div>`;
    });
    sectionselect.innerHTML = imgfromJS.join("");
};