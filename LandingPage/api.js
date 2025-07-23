export const getData = async () => {
    const url = "https://uselessfacts.jsph.pl/random.json?language=en";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json.text;
    } catch (error) {
      console.error(error.message);
      return "Sorry, no facts for you today 😢";
    }
  };
  