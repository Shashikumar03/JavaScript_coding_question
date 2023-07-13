// Only change code below this line
function urlSlug(title) {

    const arr = title.trim().split(/\s+/).join("-");
    return arr;

}
// Only change code above this line
let a = urlSlug("A Mind Needs    Books Like A Sword Needs A Whetstone");
console.log(a);