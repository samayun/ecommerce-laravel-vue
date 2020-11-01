import BrandPolicy from './admin/policies/BrandPolicy';
// Gate.js

import CategoryPolicy from './admin/policies/CategoryPolicy';

class Gate
{
    constructor(user)
    {
        this.user = user;

        this.policies = {
            category: CategoryPolicy,
            brand: BrandPolicy,
        };
    }

    before()
    {
        return this.user && this.user.is_super == 1;
    }

    allows(action, type, model = null)
    {
        if (this.before()) {
            return true;
        }

        return this.policies[type][action](this.user, model);
    }

    denies(action, type, model = null)
    {
        return !this.allows(action, type, model);
    }
}


export default Gate;
