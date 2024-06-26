console.clear();
/** 
fetch("https://pokeapi.co/api/v2/pokemon/dsitto")
.then((response) => {
    if (!response.ok) {
      throw new Error("Could not Fetch! Error");
    }
    return response.json();
  })
  .then((data) => console.log(data.id))
  .catch((error) => console.error(error));
*/

async function fetchResource() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/dsitto");
    if (!response.ok) {
      throw new Error("Tuzya Nana Chi Tang");
    } else {
      const data = await response.json();
      console.log(data);
      
    }
  } catch (error) {
    console.error(error);
  }
}
fetchResource()