//Object contructor ban thiet ke
function User(firstName, lastName, avatar) {
    this.firstName = firstNamel
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function() {
        return `${this.firstName}${this.lastName}`


    }

}
var author = new User('nva', 'KMA', 'av1');
//Object prototype : nguyen mau,nguyen lieu,thanh phan cau thanh doi tuong
//thuoc tinh + phong thuc
//thêm thuộc tính vào đối tượng
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className;
}