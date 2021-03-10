//1 async와 awit의 사용은 비동기 처리에 대한 혼란스러운 코드의 가독성을 향상 시켜줌으로써 코드의 유지보수 및 견고한 코드를 작성할 수 있습니다.
async function getRandomMeal(){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
   
}
//2
async function getMealById(id){
   fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);

}
//3
async function getMealsBysearch(term){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+term);


}