// admin/CategoryPolicy.js

export default class CategoryPolicy
{
    static create(user)
    {
        return user && user.is_super == 1;
    }

    static view(user, category)
    {
        return true;
    }

    static delete(user, category)
    {
        return user.id === category.user_id;
    }

    static update(user, category)
    {
        return user.id === category.user_id || user.is_super == 1;
    }
}