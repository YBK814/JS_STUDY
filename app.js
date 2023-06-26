const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player["name"]);

player.fat=false;
console.log(player);
// const 변경의 에러, 내부 object 업데이트는 가능
player.lastName="potato";
console.log(player);

player.points = player.points + 15;
console.log(player.points);
// get something from the object and update something from the object