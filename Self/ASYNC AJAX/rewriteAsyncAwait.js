// async await
async function loadJson(url) {
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(response.status);
  }
}

loadJson("https://javascript.info/no-such-user.json").catch(console.log); // Error: 404

// handle inside

// async function loadJson(url) {
//   try {
//     let response = await fetch(url);
//     if (response.status === 200) {
//       return await response.json();
//     } else {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//   } catch (error) {
//     console.log("Caught inside:", error.message);
//   }
// }

// loadJson("https://javascript.info/no-such-user.json");

// .then/catch
// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
