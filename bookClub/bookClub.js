async function getUser() {    
    let response = await fetch("https://raw.githubusercontent.com/qspeakorg/qspeakorg.org/main/bookClub/booklist.json");

    return await response.json();

};

async function renderUser(){
    let users = await getUser();
    let html = '';

    if (users.length == 0){
        let htmlSegment = `<p>Nothing here yet!</p>`;
        html += htmlSegment;
    }

    users.forEach(user => {


        let htmlSegment = `<div class = users>
                            <div class = title>${user.title.toUpperCase()}</div>
                            <div>by ${user.author}</div>
                            <div>${user.stars == 5 ? `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>` 
                                : user.stars == 4 ? `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span>`
                                : user.stars == 3 ? `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                                : user.stars == 2 ? `<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                                : `<span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star"></span>`
                            }
                            </div>
                            
                            <div class=reviewCont>
                                <div class=top>
                                    <div>
                                        <div>Reviewed by: ${user.reviewer}</div>
                                        <div class=date>Date Finished: ${user.finishDate}</div>
                                    </div>
                                    <div class=right>
                                        <div>Age Rating: ${user.rating}</div>
                                        <div>${user.triggers ? "Triggers:" : ""} ${user.triggers ? user.triggers : ""}</div>
                                    </div>
                                </div>
                                <div class=review>${user.review}</div>
                            </div>

                            </div>`;
                            html += htmlSegment;
    });

    let container = document.getElementById("list");
    container.innerHTML = html;
}

renderUser();
