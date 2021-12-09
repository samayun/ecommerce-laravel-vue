// admin/CategoryPolicy.js

export default class BrandPolicy
{
    static create(user)
    {
        return user && user.is_super == 1;
    }

    static view(user, brand)
    {
        return true; // It means every one with Guest is authorized
    }

    static delete(user, brand)
    {
        return user && user.is_super == 1;
    }

    static update(user, brand)
    {
        return user && user.is_super == 1 || user.is_super == 0;
    }
}
