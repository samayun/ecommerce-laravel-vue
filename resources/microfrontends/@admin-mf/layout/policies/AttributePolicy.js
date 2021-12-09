// admin/AttributePolicy.js

export default class AttributePolicy
{
    static create(user)
    {
        return user && user.is_super == 1;
    }

    static view(user, attribute)
    {
        return true; // It means every one with Guest is authorized
    }

    static delete(user, attribute)
    {
        return user && user.is_super == 1;
    }

    static update(user, attribute)
    {
        return user && user.is_super == 1 || user.is_super == 0;
    }
}
