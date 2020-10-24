// Gate.js

import CategoryPolicy from './admin/policies/CategoryPolicy';

export default class Gate
{
    constructor(user)
    {
        this.user = user;

        this.policies = {
            category: CategoryPolicy
        };
    }

    before()
    {
        return this.user && this.user.is_super == 1;
    }

    allow(action, type, model = null)
    {
        if (this.before()) {
            return true;
        }

        return this.policies[type][action](this.user, model);
    }

    deny(action, type, model = null)
    {
        return !this.allow(action, type, model);
    }
}