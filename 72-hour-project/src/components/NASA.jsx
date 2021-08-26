function NASA() {
    const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;
    const key = `KTatox3u1ypx0L1rspOXjF9CjVu4Az1MHE0mdCbj`;
    let longitude = 100.75;
    let latitude = 1.5;

    fetch(baseURL + '?lon=' + longitude + '?lat=' + latitude + '?api_key=' + key)
    .then(response => response.json())
    .then(json => displayContent(json));

    function displayContent(spaceObject) {
        console.log(spaceObject);
    }
}
export default NASA;