function getUsers(db) {
    let users = await db.collections('users').find({}).toArray();
    return users;
}

module.exports = {
    getUsers
}