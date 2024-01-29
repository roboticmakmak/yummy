// ////////////////////////////////// All this is just from page ///////////////////////////////////////////////////////////
async function getAllRecipes() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  if (response.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  const responseData = await response.json();
  return responseData.meals;
}
$("#food-letter").on("input", function () {
  let inputValue = $(this).val().toUpperCase();


  if (inputValue.length > 1) {
    inputValue = inputValue.slice(0, 1);
    $(this).val(inputValue);
  }
});
let allRecipes = await getAllRecipes();
console.log(await allRecipes);

const container = document.querySelector("#meals .container");
container.innerHTML = "";

let row = document.createElement("div");
row.classList.add("row", "text-white", "gx-3", "gy-3");

await allRecipes.forEach((recipe) => {
  const col = document.createElement("div");
  col.classList.add("col-md-3");
  const mealElement = document.createElement("div");
  mealElement.classList.add(
    "meal",
    "position-relative",
    "overflow-hidden",
    "rounded-2",
    "cursor-pointer"
  );
  mealElement.setAttribute("data-id", recipe.idMeal);
  const imgElement = document.createElement("img");
  imgElement.classList.add("w-100");
  imgElement.src = recipe.strMealThumb;
  imgElement.alt = recipe.strMeal;

  const mealLayerElement = document.createElement("div");
  mealLayerElement.classList.add(
    "meal-layer",
    "position-absolute",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "text-black",
    "p-2"
  );
  mealLayerElement.innerHTML = `<h3>${recipe.strMeal}</h3>`;

  mealElement.appendChild(imgElement);
  mealElement.appendChild(mealLayerElement);
  col.appendChild(mealElement);
  row.appendChild(col);
});
container.appendChild(row);
///////////////////////////////////////////////////// Front page Wp it work well el7amdolela ///////////////////////////////////////////////


async function getRecipeByDetailsByID(mealID) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  if (response.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
    console.log("Success");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.meals;
}

var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
var isSidebarOpen = true;

$(".nav-btn").click(function (e) {
  if (isSidebarOpen) {
    $(".side-navbar").animate(
      {
        left: 0,
      },
      400
    );
    $(".sidebar ul").slideDown(1600, function () {});
  } else {
    $(".side-navbar").animate(
      {
        left: -sideNavbarWidth,
      },
      400
    );
    $(".sidebar ul").slideUp(500, function () {});
  }
  isSidebarOpen = !isSidebarOpen;
});

$(".btn-close").click(function (e) {
  $(".sidebar-toggler").animate(
    {
      left: sideNavbarWidth - 10 + sidebarButtonLayer * 2,
    },
    400
  );
  isSidebarOpen = !isSidebarOpen;
});

let categories;

$(".Categories").click(async function (e) {
  console.log("Hi2");
  $("#Categories").show();
  $(".meal").hide();
  $("#area").hide();
  $("#contact-us").hide();
  $("#meal-details")
  $("#Ingredients").hide();
  $(".search").hide();
  $(".dd").hide();

  categories = await getCategories();
  console.log(await categories);
  displayAllCategories(await categories);





  $(".col-md-3").click(async function (e) {
    $("#Categories").hide();
    var CategoryName = $(this).find("h4").text();
    console.log(CategoryName);
    let allRecipes = await getRecipesByCategory(CategoryName);
    console.log(await allRecipes);
``
console.log("Hi3");

const container = document.querySelector("#meals .container");
container.innerHTML = "";

let row = document.createElement("div");
row.classList.add("row", "text-white", "gx-3", "gy-3");

await allRecipes.forEach((recipe) => {
  const col = document.createElement("div");
  col.classList.add("col-md-3");
  const mealElement = document.createElement("div");
  mealElement.classList.add(
    "meal",
    "position-relative",
    "overflow-hidden",
    "rounded-2",
    "cursor-pointer"
  );
  mealElement.setAttribute("data-id", recipe.idMeal);
  const imgElement = document.createElement("img");
  imgElement.classList.add("w-100");
  imgElement.src = recipe.strMealThumb;
  imgElement.alt = recipe.strMeal;

  const mealLayerElement = document.createElement("div");
  mealLayerElement.classList.add(
    "meal-layer",
    "position-absolute",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "text-black",
    "p-2"
  );
  mealLayerElement.innerHTML = `<h3>${recipe.strMeal}</h3>`;

  mealElement.appendChild(imgElement);
  mealElement.appendChild(mealLayerElement);
  col.appendChild(mealElement);
  row.appendChild(col);
});
container.appendChild(row);





$(".col-md-3").click(async function (e) {
  var nextMeal_id = $(this).find(".meal").data("id");
  let x = await getRecipeByDetailsByID(nextMeal_id);
console.log(await x)

  const container2 = document.querySelector("#meal-details .container .row .col-md-4 .img");
  const container3 = document.querySelector("#meal-details .container .row .col-md-8 .instructions");
  const container4 = document.querySelector("#meal-details .container .row .col-md-4 .oriname");
  const container5 = document.querySelector("#meal-details .container .row .col-md-8 .zapa");
  const container6 = document.querySelector("#meal-details .container .row .col-md-8 .zapa2");
  const container7 = document.querySelector("#meal-details .container .row .col-md-8 .srz");
  const container8 = document.querySelector("#meal-details .container .row .col-md-8 .yt");



  container2.src = x[0].strMealThumb;
  container2.style.width = "100%"
  container2.style.maxHeight = "100%";
  container3.innerHTML = `<h2><strong>Instructions:</strong></h2><p>${x[0].strInstructions}</p>`;
  container4.innerHTML = `<p>${x[0].strMeal}</p>`;
  container5.innerHTML = `<h2><strong>Area:</strong></h2><p>${x[0].strArea}</p>`;
  container6.innerHTML = `<h2><strong>category:</strong></h2><p>${x[0].strCategory}</p>`;
  container7.innerHTML = `<a href="${x[0].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>`;
  container8.innerHTML = `<a href="${x[0].strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>`;










  
  $(".meal").hide();
  $(".dd").show();
  $("#Categories").hide();
  $(".meal").hide();
  $("#area").hide();
  $("#contact-us").hide();
  $("#meal-details")
  $("#Ingredients").hide();
  $(".search").hide();
});
 });
});














async function getRecipesByIngredients(area) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${area}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  if (response.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
    console.log("Success");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.meals;
}





















async function getRecipesByCategory(zzs) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${zzs}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loader").removeClass("d-none");
    $(".loader").addClass("d-block");
  }
  if (response.ok) {
    $(".loader").removeClass("d-block");
    $(".loader").addClass("d-none");
    console.log("Success");
  } else {
    $(".loader").removeClass("d-none");
    $(".loader").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.meals;
}

async function getCategories() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loader").removeClass("d-none");
    $(".loader").addClass("d-block");
  }
  if (response.ok) {
    $(".loader").removeClass("d-block");
    $(".loader").addClass("d-none");
    console.log("Success");
  } else {
    $(".loader").removeClass("d-none");
    $(".loader").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.categories;
}

function displayAllCategories(categories) {
  const container = document.querySelector("#Categories .container");
  container.innerHTML = ""; 

  let row = document.createElement("div");
  row.classList.add("row", "text-white", "gx-3", "gy-3");

  categories.forEach((category) => {
    const col = document.createElement("div");
    col.classList.add("col-md-3", "overflow-hidden");

    const categoryElement = document.createElement("div");
    categoryElement.classList.add(
      "category",
      "position-relative",
      "overflow-hidden",
      "rounded-2",
      "cursor-pointer"
    );
    categoryElement.setAttribute("data-id", category.idCategory);
    const imgElement = document.createElement("img");
    imgElement.classList.add("w-100");
    imgElement.src = category.strCategoryThumb;
    imgElement.alt = category.strCategory;

    const categoryLayerElement = document.createElement("div");
    categoryLayerElement.classList.add(
      "category-layer",
      "position-absolute",
      "d-flex",
      "flex-column",
      "justify-content-center",
      "align-items-center",
      "text-black",
      "p-2"
    );
    const categoryDescription = category.strCategoryDescription
      .split(" ")
      .slice(0, 20)
      .join(" ");
    categoryLayerElement.innerHTML = `<h4>${category.strCategory}</h4> <p>${categoryDescription}</p>`;

    categoryElement.appendChild(imgElement);
    categoryElement.appendChild(categoryLayerElement);
    col.appendChild(categoryElement);
    row.appendChild(col);
  });

  container.appendChild(row);


  
}


$(".col-md-3").click(async function (e) {
  var nextMeal_id = $(this).find(".meal").data("id");
  let x = await getRecipeByDetailsByID(nextMeal_id);


  const container2 = document.querySelector("#meal-details .container .row .col-md-4 .img");
  const container3 = document.querySelector("#meal-details .container .row .col-md-8 .instructions");
  const container4 = document.querySelector("#meal-details .container .row .col-md-4 .oriname");
  const container5 = document.querySelector("#meal-details .container .row .col-md-8 .zapa");
  const container6 = document.querySelector("#meal-details .container .row .col-md-8 .zapa2");
  const container7 = document.querySelector("#meal-details .container .row .col-md-8 .srz");
  const container8 = document.querySelector("#meal-details .container .row .col-md-8 .yt");



  container2.src = x[0].strMealThumb;
  container2.style.width = "100%"
  container2.style.maxHeight = "100%";
  container3.innerHTML = `<h2><strong>Instructions:</strong></h2><p>${x[0].strInstructions}</p>`;
  container4.innerHTML = `<p>${x[0].strMeal}</p>`;
  container5.innerHTML = `<h2><strong>Area:</strong></h2><p>${x[0].strArea}</p>`;
  container6.innerHTML = `<h2><strong>category:</strong></h2><p>${x[0].strCategory}</p>`;
  container7.innerHTML = `<a href="${x[0].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>`;
  container8.innerHTML = `<a href="${x[0].strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>`;
  
  $("#Categories").hide();
  $(".meal").hide();
  $(".dd").show();
  $(".meal").hide();
  $("#area").hide();
  $("#contact-us").hide();
  $("#meal-details")
  $("#Ingredients").hide();
  $(".search").hide();

});


// ///////////////////////////////////////////////// Finish Category /////////////////////////////////////////////////////

async function getRecipesByArea(zer) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${zer}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  if (response.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
    console.log("Success");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.meals;
}

// //////////////////////////////////////////////// Area ///////////////////////////////////////////////////////
var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
var isSidebarOpen = true;

$(".Area").click(async function (e) {
  console.log("Hi2");

  $(".meal").hide();



  const areaContainer = document.querySelector("#area .container .row");
  areaContainer.innerHTML = "";
  
  for (var i = 0; i < 25; i++) {
    console.log(await allRecipes[i].strArea);
    const col = document.createElement("div");
    col.classList.add("col-md-4");
  
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-house-chimney");
  
    const areaName = document.createElement("div");
    areaName.classList.add("area-name", "text-white");
    areaName.textContent = allRecipes[i].strArea;
  
    col.appendChild(icon);
    col.appendChild(areaName);
    areaContainer.appendChild(col);
  } 
  $("#Categories").hide();
  $("#area").show();
  $(".meal").hide();
  $("#contact-us").hide();
  $("#meal-details")
  $("#Ingredients").hide();
  $(".search").hide();
  $(".dd").hide();



  $(".col-md-4").click(async function (e) {
    const clickedIcon = $(e.currentTarget).find(".fa-house-chimney");
    const tyus = $(e.currentTarget).find(".area-name").text();

// sos

    $("#area").hide();
    $(".meal").hide();
    $("#contact-us").hide();
    $("#meal-details")
    $("#Ingredients").hide();
    $(".search").hide();
    $(".dd").hide();
    $("#Categories").hide();



    let allRecipesz = await getRecipesByArea(tyus);
    console.log(await allRecipesz);
    const container = document.querySelector("#meals .container");
    container.innerHTML = "";
    
    let row = document.createElement("div");
    row.classList.add("row", "text-white", "gx-3", "gy-3");
    
    await allRecipesz.forEach((recipe) => {
      const col = document.createElement("div");
      col.classList.add("col-md-3");
      const mealElement = document.createElement("div");
      mealElement.classList.add(
        "meal",
        "position-relative",
        "overflow-hidden",
        "rounded-2",
        "cursor-pointer"
      );
      mealElement.setAttribute("data-id", recipe.idMeal);
      const imgElement = document.createElement("img");
      imgElement.classList.add("w-100");
      imgElement.src = recipe.strMealThumb;
      imgElement.alt = recipe.strMeal;
    
      const mealLayerElement = document.createElement("div");
      mealLayerElement.classList.add(
        "meal-layer",
        "position-absolute",
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "text-black",
        "p-2"
      );
      mealLayerElement.innerHTML = `<h3>${recipe.strMeal}</h3>`;
      mealElement.appendChild(imgElement);
      mealElement.appendChild(mealLayerElement);
      col.appendChild(mealElement);
      row.appendChild(col);
      $(".meal").show();
    });
    container.appendChild(row);

    $(".col-md-3").click(async function (e) {
      console.log("WP ?")
      var nextMeal_id = $(this).find(".meal").data("id");
      let x = await getRecipeByDetailsByID(nextMeal_id);
    
    
      const container2 = document.querySelector("#meal-details .container .row .col-md-4 .img");
      const container3 = document.querySelector("#meal-details .container .row .col-md-8 .instructions");
      const container4 = document.querySelector("#meal-details .container .row .col-md-4 .oriname");
      const container5 = document.querySelector("#meal-details .container .row .col-md-8 .zapa");
      const container6 = document.querySelector("#meal-details .container .row .col-md-8 .zapa2");
      const container7 = document.querySelector("#meal-details .container .row .col-md-8 .srz");
      const container8 = document.querySelector("#meal-details .container .row .col-md-8 .yt");
    
    
    
      container2.src = x[0].strMealThumb;
      container2.style.width = "100%"
      container2.style.maxHeight = "100%";
      container3.innerHTML = `<h2><strong>Instructions:</strong></h2><p>${x[0].strInstructions}</p>`;
      container4.innerHTML = `<p>${x[0].strMeal}</p>`;
      container5.innerHTML = `<h2><strong>Area:</strong></h2><p>${x[0].strArea}</p>`;
      container6.innerHTML = `<h2><strong>category:</strong></h2><p>${x[0].strCategory}</p>`;
      container7.innerHTML = `<a href="${x[0].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>`;
      container8.innerHTML = `<a href="${x[0].strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>`;
      $(".meal").hide();
      $(".dd").show();
    });
  });
 });

 ////////////////////////////////////////////////// Finish Area //////////////////////////////////////////////////////////

//////////////////////////////////////////////////Ingrediance //////////////////////////////////////////////////////////
var sideNavbarWidth = $(".side-navbar").outerWidth();
var sidebarButtonLayer = $(".toggle-layer").width();
var isSidebarOpen = true;

$(".Ingredients").click(async function (e) {

console.log("Ya welcome")
$(".meal").hide();


const areaContainer = document.querySelector("#Ingredients .container .row");
areaContainer.innerHTML = "";





async function getAllRecipes5() {
  const response5 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );

  viewLoading();

  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }

  if (response5.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }

  const responseData5 = await response5.json();
  return responseData5.meals;
}
//  maybe here 
let allRecipes = await getAllRecipes5();
console.log(allRecipes);
$("#Ingredients").show();
$("#Categories").hide();
$(".meal").hide();
$("#area").hide();
$("#contact-us").hide();
$("#meal-details")
$(".search").hide();
$(".dd").hide();

for (var i = 0; i < 25; i++) {
  const col = document.createElement("div");
  col.classList.add("col-md-4");

  const icon = document.createElement("i");

  const iconClasses = ["fa-solid", "fa-drumstick-bite"];
  iconClasses.forEach(className => icon.classList.add(className));

  icon.classList.add("text-white");

  icon.style.fontSize = "50px";

  const IngredientsName = document.createElement("div");
  IngredientsName.classList.add("Ingredients-name", "text-white");
  IngredientsName.textContent = allRecipes[i].strIngredient;

  const IngredientsNam2 = document.createElement("div");
  IngredientsNam2.classList.add("Ingredients2-name", "text-white");

  const descriptionWords = allRecipes[i].strDescription.split(' ');
  const slicedDescription = descriptionWords.slice(0, 10).join(' ');

  IngredientsNam2.textContent = slicedDescription;

  col.appendChild(icon);
  col.appendChild(IngredientsName);
  col.appendChild(IngredientsNam2);
  areaContainer.appendChild(col);
}


$(".col-md-4").click(async function (e) {
  $("#Ingredients").hide();
  const clickedIcon = $(e.currentTarget).find(".fa-drumstick-bite");
  const IngredientsName = $(e.currentTarget).find(".Ingredients-name").text();
  console.log(IngredientsName);

  let allRecipesz = await getRecipesByIngredients(IngredientsName);
  console.log(await allRecipesz);
  const container = document.querySelector("#meals .container");
  container.innerHTML = "";
  
  let row = document.createElement("div");
  row.classList.add("row", "text-white", "gx-3", "gy-3");
  
  await allRecipesz.forEach((recipe) => {
    const col = document.createElement("div");
    col.classList.add("col-md-3");
    const mealElement = document.createElement("div");
    mealElement.classList.add(
      "meal",
      "position-relative",
      "overflow-hidden",
      "rounded-2",
      "cursor-pointer"
    );
    mealElement.setAttribute("data-id", recipe.idMeal);
    const imgElement = document.createElement("img");
    imgElement.classList.add("w-100");
    imgElement.src = recipe.strMealThumb;
    imgElement.alt = recipe.strMeal;
  
    const mealLayerElement = document.createElement("div");
    mealLayerElement.classList.add(
      "meal-layer",
      "position-absolute",
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "text-black",
      "p-2"
    );
    mealLayerElement.innerHTML = `<h3>${recipe.strMeal}</h3>`;
    mealElement.appendChild(imgElement);
    mealElement.appendChild(mealLayerElement);
    col.appendChild(mealElement);
    row.appendChild(col);
    $(".meal").show();
  });
  container.appendChild(row);
  $(".col-md-3").click(async function (e) {
    var nextMeal_id = $(this).find(".meal").data("id");
    let x = await getRecipeByDetailsByID(nextMeal_id);
  
  
    const container2 = document.querySelector("#meal-details .container .row .col-md-4 .img");
    const container3 = document.querySelector("#meal-details .container .row .col-md-8 .instructions");
    const container4 = document.querySelector("#meal-details .container .row .col-md-4 .oriname");
    const container5 = document.querySelector("#meal-details .container .row .col-md-8 .zapa");
    const container6 = document.querySelector("#meal-details .container .row .col-md-8 .zapa2");
    const container7 = document.querySelector("#meal-details .container .row .col-md-8 .srz");
    const container8 = document.querySelector("#meal-details .container .row .col-md-8 .yt");
  
  
  
    container2.src = x[0].strMealThumb;
    container2.style.width = "100%"
    container2.style.maxHeight = "100%";
    container3.innerHTML = `<h2><strong>Instructions:</strong></h2><p>${x[0].strInstructions}</p>`;
    container4.innerHTML = `<p>${x[0].strMeal}</p>`;
    container5.innerHTML = `<h2><strong>Area:</strong></h2><p>${x[0].strArea}</p>`;
    container6.innerHTML = `<h2><strong>category:</strong></h2><p>${x[0].strCategory}</p>`;
    container7.innerHTML = `<a href="${x[0].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>`;
    container8.innerHTML = `<a href="${x[0].strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>`;
    $(".meal").hide();
    $(".dd").show();
  });
});
 });
// /////////////////////////////////////////// End of Ingredients //////////////////////////////////



///////////////////////////////////////////// Begining of Search //////////////////////////////////
async function getRecipesByNamez(esm) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${esm}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  if (response.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
    console.log("Success");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.meals;
}

$(".Search").click(function (e) {
  $(".search").show();
  $(".meal").hide();
  $("#Categories").hide();
  $(".meal").hide();
  $("#area").hide();
  $("#contact-us").hide();
  $("#meal-details")
  $("#Ingredients").hide();
$(".dd").hide();

});
////////////////////////////
async function getRecipesByLetter(harf) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${harf}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      },
    }
  );
  viewLoading();
  function viewLoading() {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
  }
  if (response.ok) {
    $(".loading").removeClass("d-block");
    $(".loading").addClass("d-none");
    console.log("Success");
  } else {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-block");
    console.log("Error");
  }
  const responseData = await response.json();
  return responseData.meals;
}












$("#food-name").keyup(async function (e) {
  let Namez = $(this).val();
  console.log(Namez);


  let allRecipesz = await getRecipesByNamez(Namez);
  console.log(await allRecipesz);
  const container = document.querySelector("#meals .container");
  container.innerHTML = "";
  
  let row = document.createElement("div");
  row.classList.add("row", "text-white", "gx-3", "gy-3");
  
  await allRecipesz.forEach((recipe) => {
    const col = document.createElement("div");
    col.classList.add("col-md-3");
    const mealElement = document.createElement("div");
    mealElement.classList.add(
      "meal",
      "position-relative",
      "overflow-hidden",
      "rounded-2",
      "cursor-pointer"
    );
    mealElement.setAttribute("data-id", recipe.idMeal);
    const imgElement = document.createElement("img");
    imgElement.classList.add("w-100");
    imgElement.src = recipe.strMealThumb;
    imgElement.alt = recipe.strMeal;
  
    const mealLayerElement = document.createElement("div");
    mealLayerElement.classList.add(
      "meal-layer",
      "position-absolute",
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "text-black",
      "p-2"
    );
    mealLayerElement.innerHTML = `<h3>${recipe.strMeal}</h3>`;
    mealElement.appendChild(imgElement);
    mealElement.appendChild(mealLayerElement);
    col.appendChild(mealElement);
    row.appendChild(col);
    $("#area").hide();
    $("#meals").show();
    $("#categories").hide();
    $("#contact-us").hide();
$("#categories").hide();
$("#meal-details").hide();
$("#Ingredients").hide();


  });
  container.appendChild(row);
  $(".col-md-3").click(async function (e) {
    console.log("WP ?")
    var nextMeal_id = $(this).find(".meal").data("id");
    let x = await getRecipeByDetailsByID(nextMeal_id);

    const container2 = document.querySelector("#meal-details .container .row .col-md-4 .img");
    const container3 = document.querySelector("#meal-details .container .row .col-md-8 .instructions");
    const container4 = document.querySelector("#meal-details .container .row .col-md-4 .oriname");
    const container5 = document.querySelector("#meal-details .container .row .col-md-8 .zapa");
    const container6 = document.querySelector("#meal-details .container .row .col-md-8 .zapa2");
    const container7 = document.querySelector("#meal-details .container .row .col-md-8 .srz");
    const container8 = document.querySelector("#meal-details .container .row .col-md-8 .yt");

    container2.src = x[0].strMealThumb;
    container2.style.width = "100%";
    container2.style.maxHeight = "100%";
    container3.innerHTML = `<h2><strong>Instructions:</strong></h2><p>${x[0].strInstructions}</p>`;
    container4.innerHTML = `<p>${x[0].strMeal}</p>`;
    container5.innerHTML = `<h2><strong>Area:</strong></h2><p>${x[0].strArea}</p>`;
    container6.innerHTML = `<h2><strong>Category:</strong></h2><p>${x[0].strCategory}</p>`;
    container7.innerHTML = `<a href="${x[0].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>`;
    container8.innerHTML = `<a href="${x[0].strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>`;
    $(".meal, .dd").css("margin-top", 120);
    $(".meal").hide();
    $(".dd").show();
});



});






$("#food-letter").keyup(async function (e) {
  let poi = $(this).val();


  let allRecipesz = await getRecipesByLetter(poi);
  console.log(await allRecipesz);
  const container = document.querySelector("#meals .container");
  container.innerHTML = "";
  
  let row = document.createElement("div");
  row.classList.add("row", "text-white", "gx-3", "gy-3");
  
  await allRecipesz.forEach((recipe) => {
    const col = document.createElement("div");
    col.classList.add("col-md-3");
    const mealElement = document.createElement("div");
    mealElement.classList.add(
      "meal",
      "position-relative",
      "overflow-hidden",
      "rounded-2",
      "cursor-pointer"
    );
    mealElement.setAttribute("data-id", recipe.idMeal);
    const imgElement = document.createElement("img");
    imgElement.classList.add("w-100");
    imgElement.src = recipe.strMealThumb;
    imgElement.alt = recipe.strMeal;
  
    const mealLayerElement = document.createElement("div");
    mealLayerElement.classList.add(
      "meal-layer",
      "position-absolute",
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "text-black",
      "p-2"
    );
    mealLayerElement.innerHTML = `<h3>${recipe.strMeal}</h3>`;
    mealElement.appendChild(imgElement);
    mealElement.appendChild(mealLayerElement);
    col.appendChild(mealElement);
    row.appendChild(col);
    $(".meal").show();
    $(".dd").hide();
  });
  container.appendChild(row);
  $(".col-md-3").click(async function (e) {
    console.log("WP ?")
    var nextMeal_id = $(this).find(".meal").data("id");
    let x = await getRecipeByDetailsByID(nextMeal_id);

    const container2 = document.querySelector("#meal-details .container .row .col-md-4 .img");
    const container3 = document.querySelector("#meal-details .container .row .col-md-8 .instructions");
    const container4 = document.querySelector("#meal-details .container .row .col-md-4 .oriname");
    const container5 = document.querySelector("#meal-details .container .row .col-md-8 .zapa");
    const container6 = document.querySelector("#meal-details .container .row .col-md-8 .zapa2");
    const container7 = document.querySelector("#meal-details .container .row .col-md-8 .srz");
    const container8 = document.querySelector("#meal-details .container .row .col-md-8 .yt");

    container2.src = x[0].strMealThumb;
    container2.style.width = "100%";
    container2.style.maxHeight = "100%";
    container3.innerHTML = `<h2><strong>Instructions:</strong></h2><p>${x[0].strInstructions}</p>`;
    container4.innerHTML = `<p>${x[0].strMeal}</p>`;
    container5.innerHTML = `<h2><strong>Area:</strong></h2><p>${x[0].strArea}</p>`;
    container6.innerHTML = `<h2><strong>Category:</strong></h2><p>${x[0].strCategory}</p>`;
    container7.innerHTML = `<a href="${x[0].strSource}" target="_blank"><button class="btn btn-success">Source</button></a>`;
    container8.innerHTML = `<a href="${x[0].strYoutube}" target="_blank"><button class="btn btn-danger">Youtube</button></a>`;
    $(".meal, .dd").css("margin-top", 120);
    $(".meal").hide();
    $(".dd").show();
});
});


$(".contact-us").click(async function (e) {
  console.log("Hi2");
  $("#contact-us").show();
  $(".meal").hide();
  $("#Categories").hide();
  $(".meal").hide();
  $("#area").hide();
  $("#meal-details")
  $("#Ingredients").hide();
  $(".search").hide();
$(".dd").hide();

});


$("#username").on("input", function () {
  let inputValue = $(this).val();

  if (inputValue.length >= 3 && /^[a-zA-Z]+$/.test(inputValue)) {

    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {

    $(this).removeClass("is-valid").addClass("is-invalid");
  }
});


$("#telefone").on("input", function () {
  let inputValue = $(this).val();


  if (/^\d+$/.test(inputValue)) {

    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {

    $(this).removeClass("is-valid").addClass("is-invalid");
  }
});

$("#password, #re-password").on("input", function () {
  let passwordValue = $("#password").val();
  let rePasswordValue = $("#re-password").val();


  if (passwordValue === rePasswordValue && /^[a-zA-Z0-9]{5,}$/.test(passwordValue)) {

    $("#password, #re-password").removeClass("is-invalid").addClass("is-valid");
  } else {

    $("#password, #re-password").removeClass("is-valid").addClass("is-invalid");
  }
});

$("#age").on("input", function () {
  let inputValue = $(this).val();

  if (/^\d{2}$/.test(inputValue)) {
    // Valid input
    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {
    $(this).removeClass("is-valid").addClass("is-invalid");
  }
});
$("#email").on("input", function () {
  let emailValue = $(this).val();

  if (/^\S+@\S+\.\S+$/.test(emailValue)) {
    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {
    $(this).removeClass("is-valid").addClass("is-invalid");
  }
});

let isSubmitButtonVisible = false;

function updateSubmitButtonVisibility() {
  if (isSubmitButtonVisible) {
    $(".dd6").show();
  } else {
    $(".dd6").hide();
  }
}

$("#username").on("input", function () {
  let inputValue = $(this).val();

  if (inputValue.length >= 3 && /^[a-zA-Z]+$/.test(inputValue)) {
    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {
    $(this).removeClass("is-valid").addClass("is-invalid");
  }

  isSubmitButtonVisible = checkAllInputsValidity();
  updateSubmitButtonVisibility();
});

$("#telefone").on("input", function () {
  let inputValue = $(this).val();

  if (/^\d+$/.test(inputValue)) {
    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {
    $(this).removeClass("is-valid").addClass("is-invalid");
  }

  isSubmitButtonVisible = checkAllInputsValidity();
  updateSubmitButtonVisibility();
});

$("#password, #re-password").on("input", function () {
  let passwordValue = $("#password").val();
  let rePasswordValue = $("#re-password").val();

  if (passwordValue === rePasswordValue && /^[a-zA-Z0-9]{5,}$/.test(passwordValue)) {
    $("#password, #re-password").removeClass("is-invalid").addClass("is-valid");
  } else {
    $("#password, #re-password").removeClass("is-valid").addClass("is-invalid");
  }

  isSubmitButtonVisible = checkAllInputsValidity();
  updateSubmitButtonVisibility();
});

$("#age").on("input", function () {
  let inputValue = $(this).val();

  if (/^\d{2}$/.test(inputValue)) {
    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {
    $(this).removeClass("is-valid").addClass("is-invalid");
  }

  isSubmitButtonVisible = checkAllInputsValidity();
  updateSubmitButtonVisibility();
});

$("#email").on("input", function () {
  let emailValue = $(this).val();

  if (/^\S+@\S+\.\S+$/.test(emailValue)) {
    $(this).removeClass("is-invalid").addClass("is-valid");
  } else {
    $(this).removeClass("is-valid").addClass("is-invalid");
  }

  isSubmitButtonVisible = checkAllInputsValidity();
  updateSubmitButtonVisibility();
});

function checkAllInputsValidity() {
  return (
    $("#username").hasClass("is-valid") &&
    $("#telefone").hasClass("is-valid") &&
    $("#password, #re-password").hasClass("is-valid") &&
    $("#age").hasClass("is-valid") &&
    $("#email").hasClass("is-valid")
  );
}

updateSubmitButtonVisibility();