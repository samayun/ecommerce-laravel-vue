import BrandPolicy from "./admin_layout/policies/BrandPolicy";
import AttributePolicy from "./admin_layout/policies/AttributePolicy";
import CategoryPolicy from "./admin_layout/policies/CategoryPolicy";
import ProductPolicy from "./admin_layout/policies/ProductPolicy";

class Gate {
    constructor(user) {
        this.user = user;

        this.policies = {
            category: CategoryPolicy,
            brand: BrandPolicy,
            product: ProductPolicy,
            attribute: AttributePolicy
        };
    }

    before() {
        return this.user && this.user.is_super == 1;
    }

    allows(action, type, model = null) {
        if (this.before()) {
            return true;
        }

        return this.policies[type][action](this.user, model);
    }

    denies(action, type, model = null) {
        return !this.allows(action, type, model);
    }
}

export default Gate;
