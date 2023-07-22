const myList = document.getElementById("my-list");
console.log(myList);

for (let i = 1; i <= 100; i++) {
  const listItem = document.createElement("li");
  console.log(listItem);
  listItem.innerHTML += ``;
  listItem.style.width = "100px";
  listItem.style.height = "100px";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.justifyContent = "center";
  listItem.style.margin = "10px";
  listItem.style.fontWeight = "bold";

  myList.append(listItem);
  if (i % 15 == 0) {
    listItem.innerHTML += "FizzBuzz";
    listItem.style.backgroundColor = "#f0466f";
  } else if (i % 5 == 0) {
    listItem.innerHTML += "Buzz";
    listItem.style.backgroundColor = "#ffd166";
  } else if (i % 3 == 0) {
    listItem.innerHTML += "Fizz";
    listItem.style.backgroundColor = "#0cd6a1";
  } else {
    listItem.innerHTML += ` ${i}`;
    listItem.style.backgroundColor = "#1389b2";
  }
}
