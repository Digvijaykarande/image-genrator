const form = document.querySelector("form");
const searchbtn = document.getElementById("search-btn");
// const showmore=document.getElementById("show-more-btn");
const thedata=document.querySelector("#results");
const homepage=document.getElementById("homepage");
const page=1;
// searchbtn.addEventListener("click", async (event) => {
    searchbtn.addEventListener("click", async function generateimage(event){
    event.preventDefault(); 
    const inputdata = document.getElementById("serch-input").value;
    const api_key = "pRcB_Mc8Momt56e2WfZQVcY2uBIo_gPJP_1YN5Sb1Es";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${api_key}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        let alldata = "";
        homepage.style.display="none";
        data.results.forEach(result => {
            alldata += `
                <div id="allresults"><center>
                    <img src="${result.urls.regular}" class="images" alt="the image">
                    <a href="${result.links.download}"download id="download-btn">⇩</a>
                    <h4 class="description">${result.alt_description}</h4>
                    </center>
                </div>`;
        });
        
        thedata.innerHTML = alldata;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

});
function showmore(){
    console.log("show me more")
    page++;
    generateimage();

}
