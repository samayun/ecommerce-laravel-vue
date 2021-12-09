// admin/CategoryPolicy.js

export default class ProductPolicy
{
    static create(user)
    {
        return user && user.is_super == 1;
    }

    static view(user, Product)
    {
        return true; // It means every one with Guest is authorized
    }

    static delete(user, Product)
    {
        return user && user.is_super == 1;
    }

    static update(user, Product)
    {
        return user && user.is_super == 1 || user.is_super == 0;
    }
}
