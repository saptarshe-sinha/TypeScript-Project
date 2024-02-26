const getUserName = document.querySelector('#user') as HTMLInputElement; // Result should be treated as "HTMLInputElement"
const formSubmit = document.querySelector('#form') as HTMLFormElement; // Result should be treated as "HTMLFormElement"
const main_container = document.querySelector('.main-container') as HTMLElement // Result should be treated as "HTMLElement"

// Now defining the contract of an object
interface UserData {
    id: number,
    login: string,
    avatar_url: string,
    location: string,
    url: string,
    html_url: string,
}

// Reusable fetch function
async function myCustomFetcher<T>(
    url: string, 
    options?: RequestInit
):Promise<T> {
    const response = await fetch(url, options);
    // console.log(response)
    if (!response.ok) {
        throw new Error(`Network response was not okay: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return data;
}

// Displaying the card UI
const showResultUI = (user: UserData) => {
    const {avatar_url, login, html_url} = user;
    main_container.insertAdjacentHTML(
        "beforeend",
        `<div class='card'>
            <img src=${avatar_url} alt=${login}/>
            <hr/>
            <div class="card-footer">
                <img src="${avatar_url}" alt="${login}">
                <a href="${html_url}">Github</a>
            </div>
        </div>
        `
    )
}

// Creating  a function to fetch userData
function fetchUserData(url: string){
    myCustomFetcher<UserData[]>(url, {})
    .then((userInfo) => {
        for(const user of userInfo) {
            showResultUI(user)
            // console.log("login: ", user.html_url)
        }
    })
}

// function call on page load or default function call
fetchUserData("https://api.github.com/users");


// Search Function
formSubmit.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchTerm = getUserName.value.toLowerCase();

    try {
        const url = "https://api.github.com/users"
        const allUserData = await myCustomFetcher<UserData[]>(url, {})
        const matchingUsers = allUserData.filter((user)=> {
            return user.login.toLowerCase().includes(searchTerm);
        })

        main_container.innerHTML = "";

        if(matchingUsers.length === 0){
            main_container?.insertAdjacentHTML(
                "beforeend",
                `<p class="empty-msg">No Matching Users Found.</p>`
            )
        }else{
            for(const user of matchingUsers) {
                showResultUI(user)
            }
        }
    } catch (error) {
        console.log(error)
    }

})