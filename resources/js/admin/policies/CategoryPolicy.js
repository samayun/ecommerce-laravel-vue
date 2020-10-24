// admin/CategoryPolicy.js

export default class CategoryPolicy
{
    static create(user)
    {
        return user && user.is_super == 1;
    }

    static view(user, category)
    {
        return true; // It means every one with Guest is authorized
    }

    static delete(user, category)
    {
        return user && user.is_super == 1;
    }

    static update(user, category)
    {
        return user && user.is_super == 1 || user.is_super == 0;
    }
}