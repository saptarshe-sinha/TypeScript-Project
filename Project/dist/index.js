"use strict";
const getUserName = document.querySelector('#user'); // Result should be treated as "HTMLInputElement"
const formSubmit = document.querySelector('#form'); // Result should be treated as "HTMLFormElement"
const main_container = document.querySelector('.main-container'); // Result should be treated as "HTMLElement"
// Reusable fetch function
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    // console.log(response)
    if (!response.ok) {
        throw new Error(`Network response was not okay: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
// Displaying the card UI
const showResultUI = (user) => {
    const { avatar_url, login, html_url } = user;
    main_container.insertAdjacentHTML("beforeend", `<div class='card'>
            <img src=${avatar_url} alt=${login}/>
            <hr/>
            <div class="card-footer">
                <img src="${avatar_url}" alt="${login}">
                <a href="${html_url}">Github</a>
            </div>
        </div>
        `);
};
// Creating  a function to fetch userData
function fetchUserData(url) {
    myCustomFetcher(url, {})
        .then((userInfo) => {
        for (const user of userInfo) {
            showResultUI(user);
            // console.log("login: ", user.html_url)
        }
    });
}
// function call on page load or default function call
fetchUserData("https://api.github.com/users");
// Search Function
formSubmit.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = getUserName.value.toLowerCase();
    try {
        const url = "https://api.github.com/users";
        const allUserData = await myCustomFetcher(url, {});
        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });
        main_container.innerHTML = "";
        if (matchingUsers.length === 0) {
            main_container?.insertAdjacentHTML("beforeend", `<p class="empty-msg">No Matching Users Found.</p>`);
        }
        else {
            for (const user of matchingUsers) {
                showResultUI(user);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
