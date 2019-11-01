function UserFullName(first, last) {
     let _firstName  = first;
     let _lastName  = last;

    return {
        getName () {
            return _firstName;
        },

        getLast () {
            return _lastName;
        }
    };
};

let user1 = UserFullName('Jon', 'Gold');
console.log("Hello, " + user1.getName(), user1.getLast() + "!");
console.log();
