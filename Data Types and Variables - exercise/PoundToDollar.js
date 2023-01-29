function paundToDollar(pounds) {
    let ratio = 1.31;
    let dollars = (pounds * ratio).toFixed(3);
    console.log(dollars);
}