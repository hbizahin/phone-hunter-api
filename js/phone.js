const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  // create a variable to get every element in the loop
  const phoneContainer = document.getElementById("phone-container");
// clear phone container cards before adding new cards
    phoneContainer.textContent=''

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }


    // display only first 12 phones if not show All
    if (!isShowAll){
        phones = phones.slice(0,12);
    }


  phones.forEach((phone) => {
    // create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 p-4 shadow-xl`;
    // set inner html
    phoneCard.innerHTML = `
        <figure>
                  <img
                    src="${phone.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-center">
                    <button class="btn btn-primary">Show Details</button>
                  </div>
                </div>
              </div>
        `;
    // append child
    phoneContainer.appendChild(phoneCard);
  });
};

// handle search button
const handleSearch = (isShowAll) => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
//   loadPhone diye ami searchText er parameter ta function tay send korechi
};

// handle show all
const handleShowAll = () => {
    handleSearch(true);
}
